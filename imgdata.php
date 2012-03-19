<?php
function iconv_deep($e1, $e2, $value)
{
   if (is_array($value))
   {
      $item = null;
      foreach ($value as &$item)
      {
         $item = iconv_deep($e1, $e2, $item);
      }
      unset($item);
   }
   else
   {
      if (is_string($value)) $value = mb_convert_encoding($value, $e2, $e1);
   }
   return $value;
}
function ucfirst_utf8($str) {
    if (mb_check_encoding($str,'UTF-8')) {
        $first = mb_substr(
            mb_strtoupper($str, "utf-8"),0,1,'utf-8'
        );
        return $first.mb_substr(
            mb_strtolower($str,"utf-8"),1,mb_strlen($str),'utf-8'
        );
    } else {
        return $str;
    }
}
function to_json(array $data)
{
    $isArray = true;
    $keys = array_keys($data);
    $prevKey = -1;

    // Необходимо понять — перед нами список или ассоциативный массив.
    foreach ($keys as $key)
        if (!is_numeric($key) || $prevKey + 1 != $key)
        {
            $isArray = false;
            break;
        }
        else
            $prevKey++;

    unset($keys);
    $items = array();

    foreach ($data as $key => $value)
    {
        $item = (!$isArray ? "\"$key\":" : '');

        if (is_array($value))
            $item .= to_json($value);
        elseif (is_null($value))
            $item .= 'null';
        elseif (is_bool($value))
            $item .= $value ? 'true' : 'false';
        elseif (is_string($value))
            $item .= '"' . preg_replace(
                '%([\\x00-\\x1f\\x22\\x5c])%e',
                'sprintf("\\\\u%04X", ord("$1"))',
                $value
            ) . '"';
        elseif (is_numeric($value))
            $item .= $value;
        else
            throw new Exception('Wrong argument.');

        $items[] = $item;
    }

    return
        ($isArray ? '[' : '{') .
        implode(',', $items) .
        ($isArray ? ']' : '}');
}
function get_img(){
    $pathimg = 'm/images/min';
    if (is_dir($pathimg)) {
        $arr=scandir($pathimg);
        $jsarr=array("name"=>array());
        $jsarr=array("idx"=>array());
        $replimg = array_slice($arr, '2');
        $i=0;
        foreach ($replimg as $value) {
            $sizearr=getimagesize($pathimg.'/'.$value);
            $jsarr["name"][$i]=$value;
            $jsarr["idx"][$i]=$i;
            $jsarr['width'][$i]=$sizearr[0];
            $jsarr['height'][$i]=$sizearr[1];
            $i++;
        }
            $jsonfile = fopen('m/images/img.json', 'w+');
            $str = json_encode($jsarr);
            //$str = '{img:{"name":"'.implode('","title":""},{"name":"', $replimg).'","title":""}}';
            fwrite($jsonfile,$str);
//            for($i=0;$i<count($replimg);$i++){
//                $str = '{idx:'+$i+',name:"'+$replimg[$i]+'",title:""}';
//            fwrite($jsonfile, $str);            
//            }
//            fwrite($jsonfile,']}');
            $endwr = fclose($jsonfile);
            return $str;
    }
}
//if(isset($_REQUEST['json'])){
//    echo get_img();
//}
echo get_img();
//"name":
//$endimg["images"] = iconv_deep('windows-1251', 'utf-8', $replimg["images"]);
        //$end["images"] = iconv_deep('utf-8', 'windows-1251', $endimg);
        //print_r(json_encode($replimg));
        //return $replimg;
?>