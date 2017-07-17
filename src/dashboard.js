    $(document).ready(function() {

      $('.settings-btn').on('click', function (e) {
            $('.settings-btn').toggleClass('open');
            $('.settings-box').toggleClass('open');
            e.preventDefault();
          });

    });
