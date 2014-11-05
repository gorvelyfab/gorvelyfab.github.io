$(document).ready(function(){


    // gestion du menu pusher
    $('#button-toggle').click(function(e){
        e.preventDefault();
        $('body').toggleClass('with-sidebar');
    });

    $('#button-toggle-2').click(function(e){
        e.preventDefault();
        $('body').toggleClass('with-sidebar');
    });

    $('#site-cache').click(function(){
        $('body').removeClass('with-sidebar');
    });


    // gestion du sticky menu
    $(document).scroll(function(){

        var scrollTop = $(document).scrollTop();

        if (scrollTop > 280) {
            // $('#header-brand').css('top', '0');
            $('#header-brand').stop().animate({
              top: '0'
            }, 100, 'linear');
        } else {
            $('#header-brand').stop().animate({
              top: '-70px'
            }, 80, 'linear');
            // $('#header-brand').css('top', '-70px');
        }
    });
    $('.site-content').scroll(function(){

        var scrollTopContent = $('.site-content').scrollTop();

        if (scrollTopContent > 280) {
            $('#header-brand').stop().animate({
              top: '0'
            }, 100, 'linear');
        } else {
            $('#header-brand').stop().animate({
              top: '-70px'
            }, 80, 'linear');
        }
    });




    $('ul.tabs').each(function(){
      // For each set of tabs, we want to keep track of
      // which tab is active and it's associated content
      var $active, $content, $links = $(this).find('a');

      // If the location.hash matches one of the links, use that as the active tab.
      // If no match is found, use the first link as the initial active tab.
      $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
      $active.addClass('active');

      $content = $($active[0].hash);

      // Hide the remaining content
      $links.not($active).each(function () {
        $(this.hash).hide();
      });

      // Bind the click event handler
      $(this).on('click', 'a', function(e){
        // Make the old tab inactive.
        $active.removeClass('active');
        $content.hide();

        // Update the variables with the new link and content
        $active = $(this);
        $content = $(this.hash);

        // Make the tab active.
        $active.addClass('active');
        $content.show();

        // Prevent the anchor's default click action
        e.preventDefault();
      });
    });

    $('.alert').on('click', 'a', function(e){
      e.preventDefault();
      $('.alert').fadeOut();
    });
});