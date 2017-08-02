<?php
require 'lib.php';
require 'constants.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page title</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="<?= SITE_DIR ?>favicon.ico" rel="shortcut icon" type="image/x-icon"/>
    <link rel="stylesheet" href="<?= SITE_TEMPLATE_PATH . '/css/bundle.min.css' ?>"/>
</head>
<body>
<?php include 'old-browser-warning.php'; ?>
<header class="header">
    <?php
    includeComponent('nav/menu', 'menu/simple')
    ?>
    <?php if (isOnPage('main')) : ?>
        <h1 class="h1">This is main page!</h1>
    <?php endif; ?>
</header>
<div class="content">