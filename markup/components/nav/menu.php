<?php
/**
 * @var array $arParams
 * @var array $arResult
 */
?>
<nav class="menu">
    <ul class="menu__list">
        <?php foreach ($arResult as $menuItem) : ?>
            <li class="menu__item<?= $menuItem['SELECTED'] ? ' active' : '' ?>">
                <a class="menu__link" href="<?= $menuItem['LINK'] ?>"><?= $menuItem['TEXT'] ?></a>
            </li>
        <?php endforeach; ?>
    </ul>
</nav>
