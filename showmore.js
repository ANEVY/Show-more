/*
A simple script to show or hide selected content
Akombo Neville Akwo

*/

jQuery(document).ready(function( $ ){
    // show hide configuration
    var config = {
        showChars: 40,
        ellipsesText: "[...]",
        moreText: "more",
        lessText: "less"
    };

// strip content into hide and show halves
$('section#blog-section p.aheto-content-block__info-text').each(function() {

  var content = $.trim($(this).html());
//   console.log(content));

  if(content.length > config.showChars) {

      var c = content.substr(0,config.showChars);

      var h = content.substr(config.showChars, content.length - config.showChars);

      var html = c +'<span class="orangered moreeclipse">' + config.ellipsesText +'</span><span class="morecontent hidden"><span>' + h +'</span>';

      $(this).html(html);
  }

});

// listen to click event

 $('#blog-content-1 .aheto-content-block__link-wrap a ').on('click',function(e){
   e.preventDefault();
   var eclipse = $('section#blog-section #blog-content-1 p.aheto-content-block__info-text span.moreeclipse ');
   var morecontent =  $('section#blog-section #blog-content-1 p.aheto-content-block__info-text span.morecontent ')
	hideShowContent(eclipse,morecontent);
 });

//  hide or show content based on click event
  function hideShowContent(eclipse,morecontent){

   if(eclipse.hasClass('hidden')){
     eclipse.removeClass('hidden');
   }else{
      eclipse.addClass('hidden');
   }
      if(morecontent.hasClass('hidden')){
     morecontent.removeClass('hidden');
   }else{
      morecontent.addClass('hidden');
   }

  }

});