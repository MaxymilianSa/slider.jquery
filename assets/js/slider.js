(function($){
    $.fn.carousel = function(config) {
        const options = $.extend({
            pauseTime      : 3000,
            auto            : false,
            arrows          : true,
            load            : true,
            onScroll        : function() {}
        }, config);

        return this.each(function() {
            const $t = $(this);
            const $slides = $t.find('.solo-slide');
            const $prev = $t.find('#prev');
            const $next = $t.find('#next');
            const $line = $t.find('#line');
            var slide = 0;

            const scrollPrev = function() {
                $slides[slide].className = 'solo-slide hide-slide';

				slide--;

				if(slide < 0){
					slide = ($slides.length - 1);
				}

				$slides[slide].className = 'solo-slide show-slide';
            }

            const scrollNext = function() {

            	$line.className += ' white-line-active';

                $slides[slide].className = 'solo-slide hide-slide';

				slide++;

				if(slide == $slides.length){
					slide = 0;
				}

				$slides[slide].className = 'solo-slide show-slide';

				setTimeout(function(){$line.className = 'white-line';}, 5900);
            }

            $prev.bind('click', scrollPrev);
            $next.bind('click', scrollNext);

            if(options.arrows == false) {
                $prev.css('display','none');
                $next.css('display','none');
            }

            if(options.load == false && options.auto == false){
            	$line.css('display','none');
            }else{
            	setTimeout(function(){$line.className += ' white-line-active'}, 100);
				setTimeout(function(){$line.className = 'white-line';}, (options.pauseTime - 200));
            }

            if (options.auto) {
                setInterval(function() {scrollNext()}, options.pauseTime);
            }
        });
    }
})(jQuery);