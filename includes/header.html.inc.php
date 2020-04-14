<?php
    // Sommes-nous sur l'index ? RÃ©cupÃ©ration du nom de page dans $pageActuelle
    $scriptName = filter_input(INPUT_SERVER, 'SCRIPT_NAME');
    $pageActuelle = substr($scriptName, strrpos($scriptName, '/') + 1);
    if ($pageActuelle === 'index.php') {
        $dirIndex = './';
        $dirPages = './pages/';
    } else {
        $dirIndex = '../';
        $dirPages = './';
    }
    // Construction d'un tableau associatif contenant les correspondances
    // noms de pages / liens de la barre de navigation
    $pages = array(
        'Accueil' => $dirIndex . 'index.php',
        'Route' => $dirPages . 'route.php',
        'Cross' => $dirPages . 'cross.php',
        'Piste' => $dirPages . 'piste.php',
        'Enfants' => $dirPages . 'enfants.php',
        'Nous contacter' => $dirPages . 'nous-contacter.php'
    );
?>

<header>
    <picture>
        <source media="(max-width: 576px)" srcset="<?php echo $dirIndex; ?>images/banniere_small.png">
        <source srcset="<?php echo $dirIndex; ?>images/banniere.png">
        <img src="<?php echo $dirIndex; ?>images/banniere.png" alt="Nolark : Protect your minds ! Cette banniÃ¨re montre un 
             coucher de soleil avec une femme embrassant un homme rÃ©alisant en stoppie sur sa
             moto.">
        <!-- Image basÃ©e sur la crÃ©ation originale de ShiftGraphiX sur Pixabay : 
            https://pixabay.com/fr/couple-stoppie-sportive-vÃ©lomoteur-3156613/ -->
    </picture>
    <nav>
        <input type="checkbox">
        <span></span>
        <span></span>
        <span></span>
        <ul>
            <?php
            // Affichage des liens de la barre de navigation
            foreach ($pages as $nom => $url) {
                echo "\n", '<li><a href="', $url, '">', $nom, '</a></li>';
            }
            ?>
        </ul>
    </nav>
</header>