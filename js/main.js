$(document).ready(initMain);

function initMain() {
	fixWindow();

	// On/Off toggle modal
	$("#button-main").click(function() {
		$("#main-modal").fadeIn();
	});
	
	
	$(".on-off-button").click(function() {
		$holder = $(this).closest(".on-off-button-wrap");
		if($holder.hasClass("on-off-active")) {
			$holder .removeClass("on-off-active");
		} else {
			$holder .addClass("on-off-active");
		}
		return false;
	});

	// Rooms modal
	$("#button-rooms").click(function() {
		$("#livingroom-modal").fadeIn();
	});

	$(".close-modal").click(function() {
		$(this).parent().parent().fadeOut();
	});

	$( ".control-slider" ).slider({
      	orientation: "vertical",
		range: "min",
		min: 0,
		max: 80,
		value: 50,
		slide: function( event, ui ) {
			$lights = parseInt(ui.value / 10);
			if($lights != 0) {
				$(ui.handle).parent().next(".cs-indicators").children("li").removeClass("csi-active");
				$(ui.handle).parent().next(".cs-indicators").children("li").slice(-$lights).addClass('csi-active');
			} else {
				$(ui.handle).parent().next(".cs-indicators").children("li").removeClass("csi-active");
			}
		}
    });
    $(".scene-button").click(function() {
    	$(this).siblings().removeClass("scene-button-active");
    	$(this).addClass("scene-button-active");
    });
    $(".modal-button").click(function() {
		if($(this).hasClass("modal-button-disabled")) {
			$(this).removeClass("modal-button-disabled");
		} else {
			$(this).addClass("modal-button-disabled");
		}
		return false;
	});
}


function fixWindow() {
	$ww = $(window).width();
	$wh = $(window).height();

	$("#page-wrap").css("width", $ww);
	$("#page-wrap").css("height", $wh);
}



