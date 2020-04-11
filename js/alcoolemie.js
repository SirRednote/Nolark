/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Listeners sur les inputs
 */

window.addEventListener('load', function () {
    // tabEvents est une collection d'évenements
    let tabEvents = ['keyup', 'click'];
    
    // tabInputs est une collection de <input>
    let tabInputs = window.document.querySelectorAll('input:not([id="btn_annuler"])');
    
    // Parcours de tabInputs en s'appuyant sur le nombre de <input> et sur tabEvents
    for (let i = 0; i < tabInputs.length; i++) {
        for (let j = 0; j < tabEvents.length; j++) {
            // Ajout des listeners sur tous les <input> des events listés dans tabEvents
            tabInputs[i].addEventListener(tabEvents[j], gestionAlcoolemie);
        }
    }
    
    // Suppression du bug du bouton reset
    window.document.querySelector('#btn_annuler').addEventListener('click', function () {
        window.document.querySelector('#btn_annuler').form.reset();
        gestionAlcoolemie();
    });
});

function gestionAlcoolemie() {
    let poids = getInt('#nb_poids');
    let sexe = getString('#sexe input[type="radio"]:checked');
    let nbVerres = getInt('#nb_verres');
    let alcoolemie = getAlcoolemie(sexe, poids, nbVerres);
    
    if(alcoolemie >= 0.5) {
        affiche('h3', '#sect_alcoolemie', 'alcoolemie', 'Alcoolémie : ' + alcoolemie + 'g/l de sang', 'red');
        affiche('h3', '#sect_alcoolemie', 'amende', 'Amende : ' + getAmende(alcoolemie), 'black');
        affiche('h3', '#sect_alcoolemie', 'sanction', 'Sanction : ' + getSanction(alcoolemie), 'black');
    }
    else {
        affiche('h3', '#sect_alcoolemie', 'alcoolemie', 'Alcoolemie : ' + alcoolemie + 'g/l de sang');
        supprime('amende');
        supprime('sanction');
    }
}

/**
 * Fonction qui affiche le message en fonction du taux d'alcoolémie
 * @param {type} typeEl
 * @param {type} cible
 * @param {type} id
 * @param {type} contenu
 * @param {type} couleur
 * @returns {undefined}
 */

function affiche(typeEl, cible, id, contenu, couleur) {
    let elH3 = window.document.querySelector('#' + id);
    if (!elH3) {
        elH3 = window.document.createElement(typeEl);
        elH3.id = id;
        window.document.querySelector(cible).appendChild(elH3);
    }
    elH3.style.setProperty('color', couleur);
    elH3.innerHTML = contenu;
}

/**
 * Fonction qui supprime le message
 * @param {type} id
 * @returns {undefined}
 */

function supprime(id) {
    let el = window.document.querySelector('#' + id);
    if(el){
        el.remove();
    }
}

/**
* Fonction qui retourne l'alcool pur ingéré en fonction du nombre
* de verre
*
* @param {int} nbVerres
* @returns {int}
*/

function getAlcoolPur(nbVerres) {
    const uniteAlcool = 10;
    return nbVerres * uniteAlcool;
}

/**
 * Fonction qui retourne le coefficient de diffusion selon le sexe
 * @param {type} sexe
 * @returns {Number}
 */

function getCoefDiffusion(sexe) {
    const coefDiffuH = 0.7, coefDiffuF = 0.6;
    if(sexe === 'homme'){
        return coefDiffuH;
    }
    else {
        return coefDiffuF;
    }
}

/**
 * Fonction qui retourne l'alcoolémie en fonction du sexe,
 * du poids et du nombre de verres ingérés
 * @param {string} sexe
 * @param {int} poids
 * @param {int} nbVerres
 * @returns {float}
 */

function getAlcoolemie(sexe, poids, nbVerres) {
    if (poids > 0) {
        return (getAlcoolPur(nbVerres) / (poids * getCoefDiffusion(sexe))).toFixed(2);
    }
    else {
        return 0;
    }
}

/**
 * Fonction qui retourne le montant de l'amende en fonction du taux d'alcoolémie
 * @param {float} alcoolemie
 * @returns {String}
 */

function getAmende(alcoolemie) {
    if(alcoolemie < 0.8) {
        return 'Minorée : 90 € / Forfaitaire : 135 € / Majorée : 375 €';
    }
    else {
        return '4500 €';
    }
}

/**
 * Fonction qui retourne la sanction encourue selon le taux d'alcoolémie
 * @param {float} alcoolemie
 * @returns {String}
 */

function getSanction(alcoolemie) {
    const seuil = 0.8;
    if (alcoolemie < seuil) {
        return '6 points + suspension 3 ans';
    }
    else {
        return '6 points + 2 ans de prison + suspension 3 ans + stage de sensibilisation';
    }
}

/**
 * Fonction qui permet de retourner une valeur entière récupérée via
 * window.document.querySelector(id)
 * @param {string} id
 * @returns {integer}
 */
function getInt(id) {
    let valeur = parseInt(window.document.querySelector(id).value);
    if(isNaN(valeur)){
        window.document.querySelector(id).value = 0;
        return 0;
    }
    else {
        return valeur;
    }
}

/**
 * Fonction qui permet de retourner un string récupéré via son id
 * @param {string} id
 * @returns {string}
 */
function getString(id) {
    return window.document.querySelector(id).value;
}