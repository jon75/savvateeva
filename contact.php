<!DOCTYPE html>
<html>
    <head>
        <title>�������� savvateeva.com</title>
        <meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
        <meta name="description" content="��������� ���������� ������� ���������">
        <meta name="keywords" content="���������,����������,��������,�������,��������,������,�����,��������,����,">
        <meta name="robots" content="index, follow">
        <meta name="Copyright" content="������� ��������">
        <link rel="stylesheet" type="text/css" href="jQuery/ui/css/ui-lightness/jquery-ui-1.8.16.custom.css"></link>
        <link rel="stylesheet" type="text/css" href="css/jq.css"></link>
        <script type="text/javascript" src="jQuery/jquery-1.7.1.js"></script>        
    </head>
    <body>
        <div id="divmenu">
            <span>���� ���������� ����������� ������� ���������</span>
            <p> </p>
            <div class="menu">
            <ul>
                <li><a href="/index.php" title="�� �������">�� �������</a></li>
                <li><a href="/news.php" title="������ ������">�������</a></li>
                <li><a href="/galery.php" title="�������">�������</a></li>
                <li><a href="/contact.php" title="��������" class="act">��������</a></li>
            </ul>
            </div>
        </div>
        <div >
            <p><a href="mailto:tatyana@savvateeva.com">�� ������ ��������� ������ �� �������� ���������</a> ��� � �����:</p>
        <?php
        echo "
             <form name='form1' method='post' action='contact.php'>              
                 ���� ���:<br><input type='text' name='name' id='textfield' maxlength='15'><br>
                 ��� email (��� ������):<br><input type='text' name='repl' id='textfield' maxlength='15'><br>                      
                 ���� ������:<br><input type='text' name='subject' id='textfield' maxlength='30'><br>                      
                 ���������:<br><textarea name='message_text' cols='120' rows='14' id='textfield'></textarea><br>
                      <input type='submit' name='button' id='button' value='���������'>
                </form>
            ";
            $message_text = trim($_POST['message_text']);
            $subject = trim($_POST['subject']);
            $repl = $_POST['repl'];
            $name = trim($_POST['name']);
            
            // ������ ��� �������� ������� E-mail
            $pat = '^([a-z0-9\._\-]+)@([a-z0-9\.\-]+)(\.[a-z]{2,})$';
            // ��������� ����� ���������, ��� �� ������ ��������� $len ������
            $len = 200;
//            if(strlen($message_text) > $len)
//            {
//                exit("������. ��������� �� ������ ��������� ".$len. " ������. ");
//            }

            // ����� ���� �������� email ���� ���������� ���������
            $to = "tatyana@savvateeva.com";
            //$to .= "tatyana@savvateeva.com";
            //$to =((isset($to) && eregi($pat,$to))? strtolower($to) : '');
             
            $message ="
                       ������ ���������� ����� savvateeva.com - ".date("d.m.Y H:i:s"). "
                       ��� ����������� - ".$name."
                       ����� ����������� - ".$repl."
                       ����� ������: ".
                       $message_text                       
                       ;
//            $headers= "MIME-Version: 1.0\r\n";
//            $headers .= "Content-type: text/html; charset=windows-1251\r\n";            
//            // �� ���� ������
//            $headers .= "From: server <savvateeva.com>\r\n";
//            $headers .= "From: Birthday Reminder <birthday@example.com>\r\n";
            $headers .= "Cc: tatyana@savvateeva.com\r\n";
            if((strlen($subject)>0)&&(strlen($message_text)>0)){
                if(strlen($message_text) <= $len){
                    if(strpos($message_text, 'script') == false){
                      if(mail($to,$subject,$message)){ //,$headers,$sendmail_path='/usr/lib/sendmail'                                                                                          
                                  echo "������ ������� ����������.";    
                                }
                                else
                                {
                                  echo "������. ������ �� ����������.";    
                                }
                    }else{exit("������. ������������ �����!");}
                }else{exit("������. ��������� �� ������ ��������� ".$len. " ������. ");}
            }
        ?>            
            <p>��� ��������� �� �������� <br/><a href="#" onclick="$('em').css({'visibility':'visible'})">�������� �������</a><em style="visibility: hidden;"> +7(903)1511264</em></p>           
        </div>
        <div class="footer">
            <!-- Yandex.Metrika informer -->
<a href="http://metrika.yandex.ru/stat/?id=11553484&amp;from=informer"
target="_blank" rel="nofollow"><img src="//bs.yandex.ru/informer/11553484/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
style="width:88px; height:31px; border:0;" alt="������.�������" title="������.�������: ������ �� ������� (���������, ������ � ���������� ����������)" onclick="try{Ya.Metrika.informer({i:this,id:11553484,type:0,lang:'ru'});return false}catch(e){}"/></a>
<!-- /Yandex.Metrika informer -->

<!-- Yandex.Metrika counter -->
<div style="display:none;"><script type="text/javascript">
(function(w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter11553484 = new Ya.Metrika({id:11553484, enableAll: true, webvisor:true});
        }
        catch(e) { }
    });
})(window, "yandex_metrika_callbacks");
</script></div>
<script src="//mc.yandex.ru/metrika/watch.js" type="text/javascript" defer="defer"></script>
<noscript><div><img src="//mc.yandex.ru/watch/11553484" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
<!--LiveInternet counter--><script type="text/javascript"><!--
document.write("<a href='http://www.liveinternet.ru/click' "+
"target=_blank><img src='//counter.yadro.ru/hit?t58.1;r"+
escape(document.referrer)+((typeof(screen)=="undefined")?"":
";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
";"+Math.random()+
"' alt='' title='LiveInternet' "+
"border='0' width='88' height='31'><\/a>")
//--></script><!--/LiveInternet-->

        </div>
    </body>
</html>
