

function init() {
    console.log("Init");
    loop();
}

function loop() {
    console.log("Init");

      console.log('search links');
      console.log($('.divgloballinks .divlink a'));

      if($('.divgloballinks .divlink a').length > 0) {
        console.log('active links');
        $.each($('.divgloballinks .divlink a'), function(index, item) {
            $(item).get(0).click();
        });
        window.close();
        return true;
      }

    if($("form[name='ccerure'] input[type='submit']").length > 0 && !$('#captcha').length) {
      console.log("test ccerure");
      console.log($("form[name='ccerure'] input[type='submit']"));
      setTimeout(function() {
        $("form[name='ccerure'] input[type='submit']").click();
      }, 2000);
      return true;
    }


    console.log($('form'));

    if($($('form div div').get(0)) && $($('form div div').get(0)).html()) {

        if($($('form div div').get(0)).html().indexOf("vous ne pouvez télécharger qu'un seul fichier à la fois") >= 0) {
            window.timing = parseFloat( 2 )*60000;
            setTimeout(function() {
                if($('input[type="submit"]').get(0)) {
                    $('input[type="submit"]').get(0).click();
                }
            }, window.timing);
            showTinming();
            return false;
        }

        if($($('form div div').get(0)).html().indexOf('Vous devez attendre encore') >= 0) {
            var positiontiming = parseFloat($($('form div div').get(0)).html().indexOf('Vous devez attendre encore'))+27;

            window.timing = parseFloat( $($('form div div').get(0)).html().charAt(positiontiming) )*60000;
            console.log(timing);

            setTimeout(function() {

                if($('input[type="submit"]').get(0)) {
                    $('input[type="submit"]').get(0).click();
                }

            }, window.timing);

            showTinming();
            return false;
        }

    }

    if($('a.ok').get(0)) {
        $('a.ok').get(0).click();
    } else if($('input[type="submit"]').get(0)) {
        $('input[type="submit"]').get(0).click();
    }
}

function showTinming() {
    $('body').append('<div class="timing" style="display:flex; z-index: 1000; justify-content:center; align-items: center; position:fixed; left:0; top:0; height:25px; width:100%; background:#FFF; color:#333; border-bottom:1px solid #333;">Timing&nbsp;:&nbsp;<span class="timer">'+Math.floor(window.timing/1000)+'</span>sec</div>');

    if(!window.dllInterval) {

        window.dllInterval = setInterval(function() {
            window.timing-=1000;
            if(timing > 0) {
                showTinming();
            } else {
                clearInterval(window.dllInterval);
            }
        }, 1000);

    }
}


(function( $ ) {
  $(function() {
        if(!window.dllHealper) {
            window.dllHealper =true;
        }


        if(!firstTime) {
            var firstTime = 1;
            init();
        } else {
            loop();
        }
  });
})(jQuery);
