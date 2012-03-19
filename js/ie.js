$(document).ready(function () {
    //$('#warning').css(properties)
    setTimeout("$('#warning').css({'font-size': '8pt','color': 'grey','height':'20px'})", 30000);
    //setTimeout("$('#warning').hide('700')", 10000);
    //setTimeout("$('#warning').remove()",11000);
    $('td div').each(function (index, el) {
        $(el).bind('click', function () {
            //var e = $(el);//.clone();
            var e = $(el).clone();
            var imgname = $(el).find('img').attr('src').substring('14');
            e.find('img').attr('src', '/m/images/min/b/' + imgname);
            e.addClass('focusIE').find('img').css('width', '250px');
            //e.find('img').css('width','250px');
            e.append('<button style="margin-left:10px;">Закрыть</button>').bind('click', function () {
//                   $(e).fadeOut('300');
                e.hide();
                e.empty();

                //$('.divimg').remove(e);
                //$(e).unbind('click')
                // $(e).find('img').attr('src', '/m/images/min/'+imgname);
                // $(e).find('img').css('width','70px');
                // $(e).find('button').remove();
            });
            $('.divimg').append(e);
//               $('.focusIE').fadeIn('1000');
//               $('.focusIE').scrollTop('200');
            window.scroll(0, 140);
//               $(e).find('button').bind('click',function(){
////                   $(e).fadeOut('300');
//                   $('.divimg').remove(e);
//                    //$(e).unbind('click')
//                   // $(e).find('img').attr('src', '/m/images/min/'+imgname);
//                   // $(e).find('img').css('width','70px');
//                   // $(e).find('button').remove();
//               })
        });
    })
//        $('#ImgButton').bind('click',function(){
//            $('.focus').fadeOut('500',function(){$(this).empty()})
//        });
});