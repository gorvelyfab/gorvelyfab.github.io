$(function(){
    // get random integer
    function rand(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var $box = $('.box');
    var $box__child = $('.box__child');
    var surfaceWidth = $box.width() - $box__child.width();
    var surfaceHeight = $box.height() - $box__child.height();

    $(window).on('load', function(){
        function loop() {

            $box__child.each(function(){
                $(this).animate({
                    top: rand(1, surfaceHeight),
                    left: rand(1, surfaceWidth)
                }, 1000, 'linear');
            });
        }
        setInterval(loop, 1000);
    });
});