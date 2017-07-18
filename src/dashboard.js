    $(document).ready(function() {
      $(".accordiontable tbody tr:not(.accordion)").hide();
      $(".accordiontoggle").click(function()
      {
        console.log("this");
        $(this).toggleClass("zmdi-unfold-less zmdi-unfold-more");
        $(this).parent().parent().nextUntil("tr.accordion").toggle();
      });

      $('.settings-btn').on('click', function (e) {
            $('.settings-btn').toggleClass('open');
            $('.settings-box').toggleClass('open');
            e.preventDefault();
          });

    });
