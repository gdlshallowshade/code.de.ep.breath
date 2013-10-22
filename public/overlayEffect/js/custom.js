$(function() {
	/*
	the menu list element,
	the container and content divs
	*/
	$(function() {
			/*
			the menu list element,
			the container and content divs
			*/
			var $menu			= $('#menu'),
				$container		= $('#container'),
				$content		= $container.find('.content');
			
			/*
			lets add the classes effect, e-fade, and e-color to some elements.
			e-fade : this will decrease the opacity of the element
			e-color: this will change the color of the element
			*/		
			$content
			.find('div.gemArea')
			.addClass('effect e-fade')
			.end()
			.find('img')
			.addClass('effect e-fade');
				
			/*
			elems is all the elements with class effect.
			overlayEffect is our function / module that will take care of the animations
			*/	
			var $elems			= $(document).find('.effect'),
				OverlayEffect 	= (function(){
						//speed for animations
					var speed				= 1000,
						//the event that triggers the effect
						eventOff			= 'mouseenter',
						//the event that stops the effect
						eventOn				= 'mouseleave',
						//this is the color that the elements will have after eventOff
						colorOff			= '#AAAAAA',
						//saves the original color of each e-color element,
						//and calls the methos to initialize the events
						init				= function() {
							$elems.each(function(){
								var $el		= $(this);
								// if($el.hasClass('e-color'))	
								// 	$el.data('original-color',$el.css('color'));
							});
							initEventsHandler();
						},
						//initializes the events eventOff / eventOn
						initEventsHandler 	= function() {
							$menu
							.delegate('a',eventOff,function(e){
								//relation is the id of the element, 
								//and the class of related elements
								var relation	= $(this).attr('id');
								animateElems('off',relation);
								// fadein title box
								var titleBox    = $(this).data('title');
								$('#' + titleBox).fadeIn("slow");
								// $('#' + titleBox).slideDown("slow");
								return false;
							})
							.delegate('a',eventOn,function(e){
								var relation	= $(this).attr('id');
								animateElems('on',relation);
								// fadeout title box
								var titleBox    = $(this).data('title');
								// $('#' + titleBox).slideUp("slow");
								$('#' + titleBox).fadeOut("slow");
								return false;
							});	
						},
						//animates the color and / or opacity
						animateElems		= function(dir,relation) {
							var $e	= $elems;
							
							switch(dir){
								case 'on'	:
									//if there are elements on the page with class = relation
									//then these elements will be excluded for the animation
									if(relation)
										$e	= $elems.not('.'+relation);
									
									$e.each(function(){
										var $el		= $(this),
											color	= $el.data('original-color'),
											param	= {};
										
										if($el.hasClass('e-color'))
											param.color		= color;
										if($el.hasClass('e-fade'))
											param.opacity	= 1;

										$el.stop().animate(param,speed);	
									});
									
									break;
								case 'off'	:
									if(relation)
										$e	= $elems.not('.'+relation);
									
									$e.each(function(){
										var $el		= $(this),
											param	= {};
										
										if($el.hasClass('e-color'))
											param.color		= colorOff;
										if($el.hasClass('e-fade'))
											param.opacity	= 0.6;

										$el.stop().animate(param,speed);	
									});
									
									break;
							}
						};
						
					return {
						init				: init
					};
				})();
				
			/*
			call the init method of OverlayEffect
			*/
			OverlayEffect.init();
			});
	// end of overlay effect

	// img hover
	$('.gemArea img')
	.mouseenter(function() {
		var titleBox = $(this).data("title");
		$("#" + titleBox).parent().siblings().find(".title").fadeOut(200);
		// $("#" + titleBox).parent().siblings().find(".title").slideUp("slow");
		$("#" + titleBox).fadeIn(200);
		// $("#" + titleBox).slideDown("slow");
		$('.quarter').mouseleave(function() {
			$('.title').fadeOut(200);
			// $('.title').slideUp("slow");
		});
	})

	// img and title click
	$('.gemArea').click(function() {
		var row = $(this).parent().attr("id").split("-")[0];
		var col = $(this).parent().attr("id").split("-")[1];
		// console.log(row + "," + col);
		$(".quarter:not([id*=" + row + "])").removeClass("quarter_row_active").addClass("quarter_row_deactive");
		$(".quarter:not([id*=" + col + "])").removeClass("quarter_col_active").addClass("quarter_col_deactive");
		$(".quarter[id*=" + row + "]").removeClass("quarter_row_deactive").addClass("quarter_row_active");
		$(".quarter[id*=" + col + "]").removeClass("quarter_col_deactive").addClass("quarter_col_active");
		$(this).parent().find(".title").removeClass("cl-effect-1").addClass("cl-effect-8");
		$(this).parent().siblings().find(".title").removeClass("cl-effect-8").addClass("cl-effect-1");

		$(this).parent().find(".pv-box").fadeIn();
		$(this).parent().siblings().find(".pv-box").fadeOut();
		// $(".quarter[id*=" + row + "]").css({"height":"55%","opacity":"1"});
		// $(".quarter[id*=" + col + "]").css({"width":"44%","opacity":"1"});
		// $(".quarter:not([id*=" + row + "])").css({"height":"40%","opacity":"0.5"});
		// $(".quarter:not([id*=" + col + "])").css({"width":"27%","opacity":"0.5"});
	});

	// logo reset, and menu expand
	$('#gem_logo').click(function() {
		$('.quarter').removeClass("quarter_row_active quarter_col_active quarter_row_deactive quarter_col_deactive");
		$('.pv-box').fadeOut();
		$(".title").removeClass("cl-effect-8").addClass("cl-effect-1");
	});
});

