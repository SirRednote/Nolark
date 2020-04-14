<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html lang="fr-FR">
    <head>
        <title>Casques Nolark : Sécurité et confort, nos priorités !</title>
        <meta charset="UTF-8">
        <meta name="author" content="José GIL">
        <meta name="description" content="Découvrez des casques moto dépassant 
        même les exigences des tests de sécurité. Tous les casques Nolark au 
        meilleur prix et avec en prime la livraison gratuite !">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="../css/styles.css" rel="stylesheet" type="text/css">
        <link href="../css/alcoolemie.css" rel="stylesheet" type="text/css">
        <link rel="icon" href="../favicon.ico">
        <script src="../js/alcoolemie.js" type="text/javascript"></script>
    </head>
    <body>
        <header>
            <picture>
                <source media="(max-width: 576px)" srcset="../images/banniere_small.png">
                <source srcset="../images/banniere.png">
                <img src="images/banniere.png" alt="Nolark : Protect your minds ! Cette bannière montre un 
                     coucher de soleil avec une femme embrassant un homme réalisant en stoppie sur sa
                     moto.">
                <!-- Image basée sur la création originale de ShiftGraphiX sur Pixabay : 
                    https://pixabay.com/fr/couple-stoppie-sportive-vélomoteur-3156613/ -->
            </picture>
            <nav>
                <input type="checkbox">
                <span></span>
                <span></span>
                <span></span>
                <ul>
                    <li><a href="../index.php">Accueil</a></li>
                    <li><a href="route.php">Route</a></li>
                    <li><a href="cross.php">Cross</a></li>
                    <li><a href="piste.php">Piste</a></li>
                    <li><a href="enfants.php">Enfants</a></li>
                    <li><a href="nous-contacter.php">Nous contacter</a></li>
                </ul>
            </nav>
        </header>
        <section id="sect_alcoolemie">
            <h1>Simulateur de taux d'alcool dans le sang :</h1>
            <form id="form_alcoolemie" name="form_alcoolemie">
                <p>
                    <label for="nb_poids">Poids :</label>
                    <input type="number" name="nb_poids" id="nb_poids" min="0" max="999" value="0">
                </p>
                <fieldset id="sexe">
                    <legend>Sexe :</legend>
                    <div><input type="radio" name="rd_sexe" value="homme" id="rd_homme" checked="checked"><label for="rd_homme">Homme</label></div>
                    <div><input type="radio" name="rd_sexe" value="femme" id="rd_femme"><label for="rd_femme">Femme</label></div>
                </fieldset>
                <p>
                    <label for="nb_verres">Nombre de verres bus :</label>
                    <input type="number" name="nb_verres" id="nb_verres" min="0" max="99" value="0">
                </p>
                <p id="controles">
                    <input type="reset" id="btn_annuler" value="Effacer les données">
                </p>
            </form>
        </section>
        <footer>
            <p>&copy;2018 Nolark - Créé par <a href="mailto:jose.gil@ac-nice.fr">José GIL</a><p>
        </footer>
    </body>
</html>