$(function () {


    $('.mavic').hover(

        function () {
            $('.mavic-img').addClass('mavic-on').removeClass('mavic-off');
            $(this).addClass('anime-on').removeClass('anime-off');
        },

        function () {
            $('.mavic-img').removeClass('mavic-on').addClass('mavic-off');
            $(this).removeClass('anime-on').addClass('anime-off');
        }

    );












});