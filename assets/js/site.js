$(function(){
	var html = $('html').html();
        $(".typed").typed({
            strings: [html],
			contentType: 'text',
            typeSpeed: 0,
			startDelay: 0,
            // backspacing speed
            backSpeed: 0,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: false,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
        });
	
		interact('.right')
			.resizable({
				edges: {left: true, right: false, bottom: false, top: true}
			})
			.on('resizimove', function () {
				var target = event.target,
					x = (parseFloat(target.getAttribute('data-x')) || 0 ),
					y = (parseFloat(target.getAttribute('data-y')) || 0 );
				target.style.width = event.rect.width + 'px';
				target.style.height = event.rect.height + 'px';
				x += event.deltaRect.left;
				y += event.deltaRect.top;
				target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px,' + y + 'px)';

				target.setAttribute('data-x', x);
				target.setAttribute('data-y', y);
				target.textContent = event.rect.width + '×' + event.rect.height;
		});
	
    });