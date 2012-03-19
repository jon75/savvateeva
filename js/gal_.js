//$(document).ready(function(){
//                        var req = $.ajax({ 
//                            type: 'GET',
//                            url: "m/images/img.json",
//                            async: false,
//                            //data: data,
//                            dataType:'json'
//                        }).responseText;
//                        var images=jQuery.parseJSON(req)
//                        $(images.name).each(function(index,el){
//                            $('.thumbs').append('<div><a href="/m/images/min/'+el+'" title="'+images.title[index]+'"><img src="/m/images/min/'+el+'" alt="" ><span>'+images.title[index]+'</span></img></a></div>')//onclick="$(this).css("width","300px")"
//                        })
//                        $('#largeImg').hide('1',function(){$('#largeImg').fadeIn('100')});
//                        $('.thumbs a').show();
//                        $('.thumbs span').fadeIn('500', function(){$('.thumbs img').fadeIn('100')});                        
//                        
//})
dojo.require("dojo.data.ItemFileReadStore");
dojo.require("dojo.data.api.Read");
dojo.require("dojo._base.xhr");
dojo.addOnLoad(function () {
    function sale(o) {
    }

    var req = dojo.xhrGet({
        url:"/m/images/img.json", handleAs:"text",
        sync:true
    })
//    console.log(req);
    var images = dojo.fromJson(req.results[0]);

    var cnt = ["1", "2", "3", "4", "5"];
    dojo.forEach(cnt, function (entry, i) {
        var tr = dojo.query(dojo.create('tr')).place(dojo.query('#galimg'));
        dojo.query(dojo.create('td')).place(tr);
        dojo.query(dojo.create('td')).place(tr);
        dojo.query(dojo.create('td')).place(tr);
        dojo.query(dojo.create('td')).place(tr);
        dojo.query(dojo.create('td')).place(tr);
        dojo.query(dojo.create('td')).place(tr);
    });
    var td = dojo.query('tr>*')
    dojo.forEach(td, function (el, index) {
        var img = images.name[index];
        var title = images.title[index];
        if (img !== undefined) {
            var div = dojo.create('div', {innerHTML:'<a href="/m/images/min/' + img + '" title="' + title + '"><img src="/m/images/min/' + img + '" ><br/><span>' + title + '</span></img></a>'}, el);
            dojo.addClass(div, "galdivcell")
        }
    })
    var divcell = dojo.query('.thumbs >*')
    console.log(divcell);
    dojo.forEach(divcell, function (img, i) {
        //dojo.fadeIn({node:img,duration:1}).play();
        dojo.style(img, 'opacity', '0')
        var fadeArgs = {node:img, duration:5000};
        dojo.fadeIn(fadeArgs).play();
    })
    //var tmbA = dojo.query(".thumbs a");
    dojo.query(dojo.create('em')).place(dojo.query('h2'));
    dojo.query("h2 em")[0].innerHTML = 'Благовещение<br><a href="contact.php" id="emlink" onclick="sale(o)">Купить эту работу</a>';
    dojo.query(".thumbs a").connect("click", function (e) {
        e.preventDefault();

        //dojo.attr(this,'class','actlink');
        var node = dojo.byId("largeImg");
        console.log(node)
        dojo.style(node, 'opacity', '0')

        //dojo.fadeOut(fadeArgs).play();
        var largePath = dojo.attr(this, "href");
        var imgname = largePath.substring('14')
        var largeAlt = dojo.attr(this, "title");

        if (dojo.attr("largeImg", {src:'/m/images/min/b/' + imgname, alt:largeAlt})) {
            var fadeArgs2 = {node:node, duration:3000};
            dojo.fadeIn(fadeArgs2).play();
            dojo.attr(this, 'class', 'vislink');
        }
        em = dojo.query("h2 em")[0];
        em.innerHTML = largeAlt + '<br><a href="contact.php" id="emlink" onclick="sale(o)">Купить эту работу</a>';


        return false;
    });

});