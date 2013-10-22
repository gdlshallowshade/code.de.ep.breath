$(function() {
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
		if ($(this).parent().hasClass("quarter_row_active quarter_col_active")) {
			reset();
		}
		else {
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
		}
	});

	// logo reset, and menu expand
	$('#menu li:first-child').click(function() {
		if ($(".quarter")) {
			reset();
			toggleMenu();	
		}
		else {
			toggleMenu();
		}
	});

	// contact prompt
	$('#menu li:last-child')
	.mouseenter(function() {
		var prompt = $('#prompt-contact');
		prompt.fadeIn();
	})
	.mouseleave(function() {
		$('#prompt-contact').fadeOut();
	});

	// contact panel click
	$('#prompt-contact').click(function() {
		toggleControlPanel();
	});
});

function reset() {
	$('.quarter').removeClass("quarter_row_active quarter_col_active quarter_row_deactive quarter_col_deactive");
	$('.pv-box').fadeOut();
	$(".title").removeClass("cl-effect-8").addClass("cl-effect-1");
	$('#contact-panel').fadeOut();
};

function toggleMenu() {
	if ($('#menu').hasClass("active")) {
		$('#menu').removeClass("active");
		$('#typo-logo').fadeOut(function() {
			$('#gem_logo').fadeIn();
		});
		$('.typo-item').fadeOut();
	}
	else {
		$('#menu').addClass("active");
		$('#gem_logo').fadeOut(function() {
			$('#typo-logo').fadeIn();
		});
		$('.typo-item').fadeIn();	
	}
};

function toggleControlPanel() {
	if ($('#contact-panel').css("display") == "none") {
		$('#contact-panel').fadeIn();
	}
	else {
		$('#contact-panel').fadeOut();
	}
}