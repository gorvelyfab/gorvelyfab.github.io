$(document).ready ->
    rand = (min, max) ->
        Math.floor(Math.random() * (max - min + 1) + min)

    $box          = $ '.box'
    $box__child   = $ '.box__child'
    surfaceWidth  = $box.width() - $box__child.width()
    surfaceHeight = $box.height() - $box__child.height()

    $(window).on 'load', ->
        loopFunction = ->
            $box__child.each ->
                $(@).animate
                    top: rand 1, surfaceHeight
                    left: rand 1, surfaceWidth
                , 1000, 'linear'

        window.setInterval loopFunction, 1000
