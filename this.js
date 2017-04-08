/*global console, alert, confirm, prompt*/
$(document).ready(function() {
    var $email = $('#email'),
        $emailR = $('#emailR'),
        $i = $email.find('i'),
        c = true,
        $wrapper = $('#wrapper'),
        $container = $wrapper.find('#container'),
        $hireS =  $wrapper.find('#hireS'),
        $workS = $wrapper.find('#workS'),
		$workH = $wrapper.find('#workH'),
        $homeB = $('#homeB'),
		$homeBW = $('#homeBW'),
        $desc = $container.find('#desc'),
        $blurThisC = $container.find('.blurThis'),
        $blurThisH = $hireS.find('.blurThis'),
    	$blurThisW = $workS.find('.blurThis'),
    	$project = $blurThisW.find('.p');

    $desc.on('click', function() {
        $blurThisC.addClass('blur');
        $blurThisH.removeClass('blur');
        setTimeout(function() {
            $hireS.css({
                'transform': 'translate(-100%)'
            });
            $container.css({
                'transform': 'translate(-100%)'
            });
        }, 200);
    });

	$workH.on('click', function() {
		$blurThisC.addClass('blur');
		$blurThisW.removeClass('blur');
		setTimeout(function() {
			$workS.css({
				'transform': 'translate(-100%)'
			});
			$container.css({
				'transform': 'translate(-100%)'
			});
		}, 200);
	});


    $homeB.on('click', function() {
        $blurThisC.removeClass('blur');
        $blurThisH.addClass('blur');
        setTimeout(function() {
            $hireS.css({
                'transform': 'translate(0%)'
            });
            $container.css({
                'transform': 'translate(0%)'
            });
        }, 200);
    });

	$homeBW.on('click', function() {
		$blurThisC.removeClass('blur');
		$blurThisW.addClass('blur');
		setTimeout(function() {
			$workS.css({
				'transform': 'translate(0%)'
			});
			$container.css({
				'transform': 'translate(0%)'
			});
		}, 200);
	});
    $email.on('click', function() {
        if(c){
            $email.addClass('open');
            $i.addClass('fa-envelope');
            $i.removeClass('fa-envelope-o');
            $emailR.css('opacity', '1');
            c = false;
        } else {
            $email.removeClass('open');
            $i.removeClass('fa-envelope');
            $i.addClass('fa-envelope-o');
            $emailR.css('opacity', '0');
            c = true;
        }
    });

    var $faUl = $('.fa-ul'),
        $s = $('.shape');
    $faUl.hover(function() {
        $s.attr('id', 'shapeO');
    }, function() {
        $s.attr('id', '');
    });

	$project.hover(function() {
		$(this).parent().siblings().toggleClass('notSelected');
	}, function(){
		$(this).parent().siblings().toggleClass('notSelected');
	});

	if (location.hash === '#work') {

		$workH.click();
	}
});
