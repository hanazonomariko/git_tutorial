//-----------------------------------------------------
//画像切り替え
//-----------------------------------------------------
$(function() {
	'use strict';
  // 置換の対象とするclass属性。
  var $elem = $('.image-switch');
  // 置換の対象とするsrc属性の末尾の文字列。
  var sp = '_sp.';
  var pc = '_pc.';
  // 画像を切り替えるウィンドウサイズ。
  var replaceWidth = 768;

  function imageSwitch() {
    // ウィンドウサイズを取得する。
    var windowWidth = parseInt($(window).width());

    // ページ内にあるすべての`.image-switch`に適応される。
    $elem.each(function() {
      var $this = $(this);
      // ウィンドウサイズが768px以上であれば_spを_pcに置換する。
      if(windowWidth >= replaceWidth) {
        $this.attr('src', $this.attr('src').replace(sp, pc));

      // ウィンドウサイズが768px未満であれば_pcを_spに置換する。
      } else {
        $this.attr('src', $this.attr('src').replace(pc, sp));
      }
    });
  }
  imageSwitch();

  // 動的なリサイズは操作後0.2秒経ってから処理を実行する。
  var resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      imageSwitch();
    }, 200);
  });
});
//-----------------------------------------------------
//スマホメニュー
//-----------------------------------------------------
$(document).on('ready',function(){
	'use strict';
    $('#humberger').on('click', function() {
		$(this).toggleClass('open');
        $('.gnavi').toggle(200);
    });	

});
//------------------------------------------------------
//スマホPC兼用リンクスタイル
//------------------------------------------------------ 
$(function() {
	'use strict';
	if (navigator.userAgent.match(/(iPhone|Android)/)) {
	$('.hv')
	  .on('touchstart', function(){
		$(this).css('opacity',0.7);
	}).on('touchend', function(){
		$(this).css('opacity',1);
	});
	}else{
	$('.hv')
	  .mouseover(function(){
		$(this).css('opacity',0.7);
	}).mouseout(function(){
		$(this).css('opacity',1);
	});		
	}
});
//スマホ個別用　クラス付与
$(function() {
	'use strict';
	$('.hv_cus')
	  .on('touchstart', function(){
		$(this).addClass('touched');
	}).on('touchend', function(){
		$(this).removeClass('touched');
	});
});
//------------------------------------------------------
//matchHeight
//------------------------------------------------------ 
$(function() {
	'use strict';
    $('.flat').matchHeight();
});
//-----------------------------------------------------
//slick
//-----------------------------------------------------
$('.top_bnr').slick({
	dots: true,
	arrows: false,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear'
});
//------------------------------------------------------
//bgswitcher
//------------------------------------------------------ 
$("document").ready(function(){
	'use strict';
	if ((navigator.userAgent.indexOf('iPhone') > 0) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	  $(".bg_switch").bgswitcher({
		images: ["images/top/main_01_sp.jpg","images/top/main_02_sp.jpg"]
	  });
	}else{
	  $(".bg_switch").bgswitcher({
		images: ["images/top/main_01_pc.jpg","images/top/main_02_pc.jpg"]
	  });
	}
});
//------------------------------------------------------
//スケジュール
//------------------------------------------------------
$(function(){
	'use strict';
	$('.schedule_list a').on('click', function() {
		$(this).next().slideToggle();
	});
});
//------------------------------------------------------
//masonry
//------------------------------------------------------
$(function() {
    $('.masonry_wrap').masonry({
        columnWidth: '.masonry_item'
    });
});