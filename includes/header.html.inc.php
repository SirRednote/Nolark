<picture>
    <source media="(max-width: 576px)" srcset="images/banniere_small.png">
    <source srcset="images/banniere.png">
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
            <li><a href="index.php">Accueil</a></li>
            <?php
                $tabAssociatif = array("Route" => "route.php", "Cross" => "cross.php", "Piste" => 
                "piste.php", "Enfants" => "enfants.php", "Nous contacter" => "nous-contacter.php");

                foreach ($tabAssociatif as $nom => $url) {
                    echo '<li><a href="pages/', $url, '">', $nom, '</a></li>';
                }
            ?>
        </ul>
</nav>