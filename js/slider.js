/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var timeOut;
var pause=5000;

var ta= window.setInterval(function(){
    window.clearInterval(ta);
    init();
},4000);



function init(){
    
    $('#rotkSliderNext').hover(function(){
        $(this).attr("src","img/arrow-right.png");
    },function(){
        $(this).attr("src","img/next-big.png");
    });
    $('#rotkSliderPrev').hover(function(){
        $(this).attr("src","img/arrow-left.png");
    },function(){
        $(this).attr("src","img/prev-big.png");
    });
    
    $('#pop-title').attr({
        'data-0':"height:81px; font-size:45px; top:0px",
        'data-20':"height:61px;font-size:34px; top:0px;"
    });
    $('#rotkSlider').attr({
        'data-20':"height:720px; top:71px",
        'data-100':"opacity:1",
        'data-550':"opacity:-.5;height:0px;",
        'data-0':"height:700px; top:91px"
    });
    $('#rotkSlider .imagegroup img').attr({
        'data-0':"height:700px; top:91px",
        'data-20':"height:720px; top:71px",
        'data-550':"height:0px;"
    });
    
    $('#rotkSliderNext,#rotkSliderPrev').attr({
        'data-0':"top:300px",
        'data-550':"top:400px"
        
    });
    
        
   $('#nextBtn').click(function(){
       $('#nextBtn').css("z-index","-100");
       $('prevBtn').css("z-index","1000");
   });
   $('#prevBtn').click(function(){
       $('#prevBtn').css("z-index','-100");
       $('#nextBtn').css("z-index","1000");
   });
    
    
    var s = skrollr.init();
    var bs = $('#rotkSlider .columnizer-row h2');

    for( var index = 0; index < bs.length; index++ ) {

        var text = bs.eq(index).text();
            text = '<span class="coolSpan">' + text + '</span>';
            //alert(text);
            bs.eq(index).html(text);

};

    $('#rotkSlider .columnizer-row:first').addClass('active');
    $('#rotkSlider .columnizer-row:first').css("opacity","1");
    $(".active img").one('load', function() {
            $('.loadi').hide();
            $('#rotkSlider>.active').find('.coolText').animate({opacity:1,bottom:"+=100px"},800);
        }).each(function() {
            if(this.complete) $(this).load();
        });
    
    timeOut=window.setInterval(function(){
        slider(true);
    },pause);
    
    
    $('#rotkSlider #rotkSliderNext').click(function(){
        window.clearInterval(timeOut);
        slider(true);
    });
    
    $('#rotkSlider #rotkSliderPrev').click(function(){
        window.clearInterval(timeOut);
        slider(false);
    });
    
    
}

function slider(nextOrPrev){
     $('#rotkSlider>.active').animate({opacity:0},400,function(){
         $(this).find('.coolText').css({'opacity':'0','bottom':'100px'});
         if(nextOrPrev){
             next($(this));
         }else{
             prev($(this));
         }
     });
}

function next(ob){
    //alert('hi');
    ob.removeClass('active');
    if(!ob.is('.columnizer-row:last-of-type')){
        ob.next('div').animate({opacity:1},400,function(){
            $(this).addClass('active');
            $(this).find('.coolText').animate({opacity:1,bottom:"+=100px"},800); 
        });
    }else{
        $('#rotkSlider>.columnizer-row:first').animate({opacity:1},400,function(){
            $(this).addClass('active');
            $(this).find('.coolText').animate({opacity:1,bottom:"+=100px"},800);
        });
    }
    
}

function prev(ob){
    ob.removeClass('active');
    if(!ob.is('.loadi+.columnizer-row')){
        ob.prev('div').animate({opacity:1},400,function(){
            $(this).addClass('active');
            $(this).find('.coolText').animate({opacity:1,bottom:"+=100px"},800); 
            
        });
    }else{
        $('#rotkSlider>.columnizer-row:last').animate({opacity:1},400,function(){
            $(this).addClass('active');
            $(this).find('.coolText').animate({opacity:1,bottom:"+=100px"},800);
        });
    }
}
