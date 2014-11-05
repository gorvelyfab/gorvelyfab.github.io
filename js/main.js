$(document).ready(function(){
    var header    = $('.header'),
        container = $('.l-container')
    ;
    container.scroll(function(){
        var scrollTop = container.scrollTop();
        if (scrollTop > 240) {
            header.addClass('fixed').next().css('margin-top', '300px');
        } else {
            header.removeClass('fixed').next().css('margin-top', '0');
        }
    });


    $('input').blur(function() {

        // check if the input has any value (if we've typed into it)
        if ($(this).val())
          $(this).addClass('used');
        else
          $(this).removeClass('used');
    });

    $('#file').change(function(){
        $('#file-message').html('un fichier ajouté \n' + $('#file').val());
    });

    $('.alert a').click(function(e){
        e.preventDefault();
        $(this).parent().slideToggle();
    });
});