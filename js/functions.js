var WHeight = $(window).height();
var WWidth = $(window).width();
var pContainerHeight = $('#header_container').height();

$(document).ready(function () {
//TRIGGERS THE PADDING EACH TIME THE PAGE HAS FINISHED RESIZING
	setTimeout(function(){$(window).trigger('resize');},0);	
});

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();
  var wZoomOut = 1-(wScroll*.00025);
  if (wScroll <= pContainerHeight) {
    $('.header_back img').css({
      'transform' : 'scale('+ wZoomOut +')'
    });
	$('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /5.3 +'%)'
    });
  }


  // Landing Elements
  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

    $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  }


  // Promoscope
  if(wScroll > $('.large-window').offset().top - $(window).height()){

    $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

    $('.window-tint').css({'opacity': opacity});

  }


  // Floating Elements

  if(wScroll > $('.blog-posts').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
});
