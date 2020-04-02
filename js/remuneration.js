/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Fonction qui retourne la prime d'ancienneté
 * @param {integer} nb
 * @param {const} fixe
 * @returns {float}
 */

function recupPrimeAnciennete(nb, fixe) {
    const nbAncienMin = 5, txAncienMin = 0.03, nbAncienSup = 10, txAncienSup = 0.06;
    if (nb >= nbAncienSup) {
        return (fixe * txAncienSup);
    }
    else if (nb >= nbAncienMin) {
        return (fixe * txAncienMin);
    }
    else {
        return 0.0;
    }
}

/**
 * Fonction qui retourne la commussion sur le S20
 * @param {integer} nb
 * @returns {float}
 */
function recupComS20(nb) {
    const prixS20 = 140.0, txComS20 = 0.02;
    
    return (nb * prixS20 * txComS20);
}

function recupComXS(nb) {
    const prixXS = 350.0, nbXSMinCom = 50, txComXS = 0.06;
    
    if(nb >= nbXSMinCom) {
        return ((nb - nbXSMinCom) * prixXS * txComXS);
    }
    else {
        return 0.0;
    }
}

/**
 * Fonction qui retourne la commission sur le Multitec
 * @param {integer} nb
 * @returns {float}
 */

function recupComMulti(nb) {
    const prixMulti = 180.0, nbMultiTranche1 = 20, nbMultiTranche2 = 50;
    const txMultiTranche1 = 0.04, txMultiTranche2 = 0.06, txMultiTranche3 = 0.1;
    
    if(nb <= nbMultiTranche1) {
        return (nb * prixMulti * txMultiTranche1);
    }
    else if (nb <= nbMultiTranche2) {
        return ((nbMultiTranche1 * prixMulti * txMultiTranche1)
                + ((nb - nbMultiTranche1) * prixMulti * txMultiTranche2));
    }
    else {
        return ((nbMultiTranche1 * prixMulti * txMultiTranche1)
                + ((nbMultiTranche2 - nbMultiTranche1) * prixMulti * txMultiTranche2)
                + ((nb - nbMultiTranche2) * prixMulti * txMultiTranche3));
    }
}

window.addEventListener("load", function() {
    
    window.document.querySelector("#btn_calculer").addEventListener("click", function() {
        // Déclaration des constantes
        const fixe = 1100.0;
        
        // Déclaration et affectation des variables
        let nbAncien = parseInt(window.document.querySelector("#num_ancien").value);
        let nbS20 = parseInt(window.document.querySelector("#num_s20").value);
        let nbXS = parseInt(window.document.querySelector("#num_xs").value);
        let nbMulti = parseInt(window.document.querySelector("#num_multi").value);
        let remuneration = fixe + recupPrimeAnciennete(nbAncien, fixe)
        + recupComS20(nbS20) + recupComXS(nbXS) + recupComMulti(nbMulti);

        // Affichage du résultat
        window.document.querySelector("#remuneration").innerHTML =
        "La rémunération sera de : " + remuneration + " €";
    });
});