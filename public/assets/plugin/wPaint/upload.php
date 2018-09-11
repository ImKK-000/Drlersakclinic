<?php
$image = imagecreatefrompng($_POST['image']);
// $picture_name = uniqid("wPaint-", true);
$picture_name = $_POST['picture_name'];

imagealphablending($image, false);
imagesavealpha($image, true);
imagepng($image, '../../../asset/img/treatment_pic/' . $picture_name . '.png');
// imagepng($image, $picture_name . '.png');
