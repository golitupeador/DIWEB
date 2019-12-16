/*$('a').on('click',function(e){
    e.preventDefault();
    var target = $($(this).attr('href')),
        p = $(target).offset().top,
        offset = 50;
    
    $(target).hasClass('topFixed') && (p = p - offset);
    $('body, html').animate({ 'scrollTop': p }, 250);
  });*/

  window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});