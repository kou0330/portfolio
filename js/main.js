'use strict'

  $(function() {
      
    $('#open').click(function() {
        $('.overlay').addClass('show');
        $('#open').addClass('hide');
    });
    
    $('#close').click(function() {
        $('.overlay').removeClass('show');
        $('#open').removeClass('hide');
    });

    $('.menu-close').click(function() {
        $('.overlay').removeClass('show');
        $('#open').removeClass('hide');
    });

  });