<html>
    <head></head>
    <body>
<?php
include("resize-class.php");
//	// *** 1) Initialise / load image
//	$resizeObj = new resize('sample.jpg');
//
//	// *** 2) Resize image (options: exact, portrait, landscape, auto, crop)
//	$resizeObj -> resizeImage(200, 200, 'crop');
//
//	// *** 3) Save image
//	$resizeObj -> saveImage('sample-resized.jpg', 100);
    function resize($img){
            $pathimgbig = 'm/images/big';
            $pathimgmin = 'm/images/min';
            $resizeObj = new resize($pathimgbig.'/'.$img);
            if($resizeObj -> resizeImage(400, 400, 'auto')){
            $resizeObj -> saveImage($pathimgmin.'/'.$img, 100);}
            //$saved=($pathimgmin.'/'.$img);
            //return true;
        }
//function resizeimg(){
    $pathimgbig = 'm/images/big';
    $pathimgmin = 'm/images/min';
    //if (is_dir($pathimgbig)) {
        $arr=scandir($pathimgbig);
        $arrimg=array_slice($arr, '2');
        $countimg = count($arrimg);
        //print_r($arrimg);
        echo ('<br/>кол-во картинок'.$countimg.'<br/>');
        //$b=0;
        //if($startcnt<$countimg){
//        for($i=0;$i<$countimg;$i++){
        foreach ($arrimg as $value) {
            $img=$value;
            echo($img.'<br/>');
                resize($img);
            sleep(3);
            //$b++;
            unset ($img);
            //echo ('saved file'.$pathimgmin.'/'.$arrimg[$i].'<br/>');
            }
            //echo('кол-во сохранений'.$b);
        //}
        //return $countimg;
    //}
//}
//if(count($_REQUEST['resize'])>0){
    //$startcnt=imgcount();
    //resizeimg($startcnt);
    
//}
//resizeimg();
?>
        </body>
</html>
