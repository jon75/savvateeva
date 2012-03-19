//$(document).ready(function(){
//
//     var req = $.ajax({ 
//          type: 'GET',
//          url: "m/images/img.json",
//          async: false,
//          //data: data,
//          dataType:'json'
//         }).responseText;
//// }
//imagesdata=jQuery.parseJSON(req)
//console.log(imagesdata)
//       var basetbl = $('.tableimg')
//       for(var b=0;b<5;b++){basetbl.append('<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>')}
//       $('</tr>').append('</table>')
//       $('td').each(function(index,el) {
//                     var img = imagesdata.name[index]
//                     var title = imagesdata.title[index]
//              if(img!==undefined){
//              $(el).append('<div class="divcell"><img class="images" src="/m/images/min/'+img+'" title="'+title+'"><br/><span>'+title+'</span></img></div>')
//              $(el).hide();
//              $(el).find('img').fadeIn('700',function(){$(el).find('span').fadeIn('300', function(){$(el).fadeIn('100')})})
//              }         
//            });
//       $('#focus').hide();
//       $('td div').each(function(index,el) {
//           $(el).bind('click',function(){
//               var e = $(this).clone();
//               var imgname = $(el).find('img').attr('src').substring('14');
//               e.find('img').attr('src', '/m/images/min/b/'+imgname);
//               e.addClass('focus').find('img').css('width','300px');
//               e.append('<button style="margin-left:10px;">Закрыть</button>').bind('click',function(){
//                   $('#focus').fadeOut(10);
//                   $('#focus').empty();
//               })
//               $('#focus').append(e);               
//               $('#focus').fadeIn('200');
//               window.scroll(0,0)
//           });
//       })
//        $('#ImgButton').bind('click',function(){
//            $('.focus').fadeOut('500',function(){$(this).empty()})
//        });
//     });
window.scroll(0, 0);
dojo.require("dojo.data.ItemFileReadStore");
dojo.require("dojo.data.api.Read");
dojo.require("dojo._base.xhr");
//dojo.require("dijit.form.Button");
dojo.addOnLoad(function () {

    function brouser() {
        var agt = navigator.userAgent.toLowerCase();
        var is_ns = ((agt.indexOf('mozilla') != -1) && (agt.indexOf('spoofer') == -1) && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera') == -1) && (agt.indexOf('webtv') == -1));
        var is_ie = (agt.indexOf("msie") != -1 && agt.indexOf('opera') == -1);
        var is_opera = ((agt.indexOf("opera") != -1) || (window.opera));
        if (is_ie) {
            //location = 'ie.html';
            return 'ie'
        } else if (is_ns) {
            //location = 'mozilla.html';
            return 'mozilla'
        } else {
            //location = 'opera.html';
            return 'opera'
        }
    }

    var req = dojo.xhrGet({
        url:"/m/images/img.json", handleAs:"text",
        sync:true
    })
//    console.log(req);
    var imagesdata = dojo.fromJson(req.results[0]);
    var count = ["1", "2", "3", "4", "5"];
    dojo.forEach(count, function (entry, i) {
        var tr = dojo.query(dojo.create('tr')).place(dojo.query('.tableimg'));
        dojo.query(dojo.create('td')).place(tr);
        dojo.query(dojo.create('td')).place(tr);
        dojo.query(dojo.create('td')).place(tr);
        dojo.query(dojo.create('td')).place(tr);
        dojo.query(dojo.create('td')).place(tr);
        dojo.query(dojo.create('td')).place(tr);
    });

    var td = dojo.query('tr>*')//class="images" 
    dojo.forEach(td, function (entry, i) {
        var img = imagesdata.name[i]
        var title = imagesdata.title[i]
        if (img !== undefined) {
            var div = dojo.create('div', {innerHTML:'<img style="" id="' + img + '" src="/m/images/min/' + img + '" title="' + title + '"><br/><span>' + title + '</span></img>'}, entry);
            dojo.addClass(div, "divcell")
            var imgid = dojo.byId(img);

            if (dojo.query('.divcell > img').attr('naturalHeight') < dojo.query('.divcell > img').attr('naturalWidth')) {

                dojo.query('.divcell > img')//.style('display','inline')
                    .style('width', '90%')
            }
            else {
                dojo.query('.divcell > img')//.style('display','inline')
                    .style('width', '90%')
            }
        }
    });


    var images = dojo.query('.divcell > img')
    //    console.log(divcell);
    dojo.forEach(images, function (el, i) {
        //confirm(dojo.prop(el,'height'));
        dojo.style(el, 'opacity', '0')
        var fadeArgs = {node:el, duration:3000};
        dojo.fadeIn(fadeArgs).play();
        //confirm(dojo.prop(el,'height'));
    })
    var divcell = dojo.query('.divcell')
    //console.log(divcell)
    dojo.forEach(divcell, function (item, i) {

        dojo.connect(item, "click", function (e) {
            e.preventDefault();
            console.log('focusimg ' + dojo.query('#focusimg'))
//                    dojo.require("dijit.form.Button");
            if (dojo.query('#focusimg')) {
                console.log('focusimg ' + dojo.query('#focusimg'))
                dojo.destroy('focusimg');
            }
            var f = dojo.clone(item);
            //console.log(dojo.query('img',f))
            var imgname = dojo.query('img', item).attr('src');
            imgname = imgname.toString().substring('14');
            //console.log(imgname);
            dojo.query('img', f).attr({src:'/m/images/min/b/' + imgname});
            dojo.query(f).attr({id:'focusimg'});
            dojo.removeClass(f, 'divcell');
            if (brouser() != 'ie') {
                dojo.addClass(f, 'focus');
            } else {
                dojo.addClass(f, 'focusIE');
            }
            dojo.query('img', f).style('width', '250px');

            function delfocusimg() {
                var fadeArgs = {node:f, duration:1000};
                dojo.fadeOut(fadeArgs).play()
                setTimeout("dojo.query('.divimg > #focusimg').forEach(dojo.destroy)", 1100);
            }

            function delfocusimgIE() {
                dojo.query('>*', f).forEach(function (itm, i) {
                    var fadeArgs2 = {node:itm, duration:1000};
                    dojo.fadeOut(fadeArgs2).play();
                })
                //setTimeout("dojo.query('.divimg > #focusimg').forEach(dojo.destroy)", 1100);
                setTimeout("dojo.destroy('focusimg')", 1100);
                dojo.query(f).style('z-index', '-5');
            }

            dojo.query(dojo.create('button', {id:"ImgButton", type:"button", innerHTML:"Закрыть"})).place(f); // style:"margin-left:10px;",    //dojo.create('button',{id:"ImgButton",type:"button"})
            dojo.query('button', f).connect("click", function (e) {
                e.preventDefault();
                if (brouser() != 'ie') {
                    delfocusimg()
                } else {
                    delfocusimgIE()
                }
                //dojo.query('#focus').style('filter', 'DXImageTransform.Microsoft.Alpha(opacity=0);');
                //console.log(navigator.userAgent.toLowerCase())
            });
            var divimg = dojo.query('.divimg');
            dojo.query(f).place(divimg, 'last');
            //var cld = dojo.query('>*',f);
            //dojo.forEach(cld, function(el,i){
            dojo.style(f, 'opacity', 0);
            dojo.query('>*', f).forEach(function (itm, i) {
                var fadeArgs2 = {node:itm, duration:1000};
                dojo.fadeIn(fadeArgs2).play();
            })
            var fadeArgs1 = {node:f, duration:1000};
            dojo.fadeIn(fadeArgs1).play();
            //console.log(dojo.query(el))
            // });
            //dojo.style(dojo.query(f), 'opacity', 0);
            //var node = dojo.query(f);
            //console.log(focus);
//                    var fadeArgs1 = {node:dojo.query('img',f),duration:5000};
//                    var fadeArgs2 = {node:dojo.query(f),duration:5000};
            //dojo.fadeIn(fadeArgs1).play();
//                    dojo.fadeIn(fadeArgs2).play();
            window.scroll(0, 90);
            //console.log(dojo.query('img',f))
        })
    })
    //dojo.query('#focus').style('opacity','0');

});
//    console.log(imagesdata);
//    var imagestore = new dojo.data.ItemFileReadStore({
//        url:"m/images/img.json",
//        typeMap:'json'       
//    }).loadItem();
//    console.log(imagestore);
//    imagesdata = new dojo.data.api.Read({url:"m/images/img.json"}); 
//console.log(button);
//                    var button = new dijit.form.Button({
//                                label: "Закрыть",
//                                onClick: function(e){
//                                    e.preventDefault();
//                                var fadeArgs = {node:dojo.query(f),duration:1000};
//                                dojo.fadeOut(fadeArgs).play()
//                                }
//                            }, dojo.query("ImgButton",f));
