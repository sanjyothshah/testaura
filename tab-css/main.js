$(document).ready(initMain);
$(window).resize(fixWindow);

function initMain() {
	fixWindow();
	
	
	// MODAL BUTTONS
	$("#button-controls").click(function() {
		$("#controls-modal").fadeIn();
	});
	$("#button-scenes").click(function() {
		$("#scenes-modal").fadeIn();
	});
	$("#button-profile").click(function() {
		$("#profile-modal").fadeIn();
	})
	$("#button-settings").click(function() {
		$("#settings-modal").fadeIn();
	});
	$("#settings-tabs").tabs();

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
    
	$("#next-switchboard").click(function() {
		$next = $(".switchboard-active").nextAll(".switchboard:first");
		if($next.length == 1) {
			$("#controls-modal .modal-title span").html($next.attr("data-name"));
			$(".switchboard-active").fadeOut(400, function() {
				$id = $next.attr("data-id");
				$scenes = $(".room-scenes[data-id='"+$id+"']");
				$(".room-scenes-active").css("display", "none").removeClass("room-scenes-active");
				$scenes.addClass("room-scenes-active").css("display", "block");

				$(".switchboard-active").removeClass("switchboard-active");
				$next.fadeIn(400);
				$next.addClass("switchboard-active");				
			});
		}
		return false;
	});
	$("#prev-switchboard").click(function() {
		$next = $(".switchboard-active").prevAll(".switchboard:first");
		if($next.length == 1) {
			$("#controls-modal .modal-title span").html($next.attr("data-name"));
			$(".switchboard-active").fadeOut(400, function() {
				$id = $next.attr("data-id");
				$scenes = $(".room-scenes[data-id='"+$id+"']");
				$(".room-scenes-active").css("display", "none").removeClass("room-scenes-active");
				$scenes.addClass("room-scenes-active").css("display", "block");

				$(".switchboard-active").removeClass("switchboard-active");
				$next.fadeIn(400);
				$next.addClass("switchboard-active");				
			});
		}
		return false;
	});

	$("#scenes-prev").click(function() {
		$current = $('.room-scenes-active').find(".scene-button-active:first");
		$next = $current.prevAll(".scene-button:first");
		if($next.length == 1) {
			$current.removeClass("scene-button-active");
    		$next.addClass("scene-button-active");
		}
		return false;
	});

	$("#scenes-next").click(function() {
		$current = $('.room-scenes-active').find(".scene-button-active:first");
		$next = $current.nextAll(".scene-button:first");
		if($next.length == 1) {
			$current.removeClass("scene-button-active");
    		$next.addClass("scene-button-active");
		}
		return false;
	});

	$("area").click(function() {
		$id = $(this).attr("data-id");		
		$target = $(".switchboard[data-id='"+$id+"']");
		$title = $target.attr("data-name");
		$("#controls-modal .modal-title span").html($title);
		$(".switchboard-active").css("display", "none").removeClass("switchboard-active");
		$target.addClass("switchboard-active").css("display", "block");
		$(".ui-tooltip").remove();

		$scenes = $(".room-scenes[data-id='"+$id+"']");
		$(".room-scenes-active").css("display", "none").removeClass("room-scenes-active");
		$scenes.addClass("room-scenes-active").css("display", "block");
		$("#controls-modal").fadeIn();
		return false;
	});
	$("#go-back-btn").click(function() {
		$("#scenes-table").fadeOut(300, function() {
			$("#rooms-table").fadeIn(300);
		});
		return false;
	});

	$("#change-password-link").click(function() {
		$("#profile-form").fadeOut(300, function() {
			$("#change-pass-form").fadeIn(300);
		});
		return false;
	});

	$("#back-profile-link").click(function() {
		$("#change-pass-form").fadeOut(300, function() {
			$("#profile-form").fadeIn(300);
		});
		return false;
	});

	/* SETTINGS MODAL LINKS */
	$("#button-new-floor").click(function() {
		$(this).css("display", "none");
		$("#table-floors").fadeOut(300, function() {
			$("#form-new-floor").fadeIn(300);
		});
		return false;
	});
	$("#floors-goback").click(function() {
		$("#form-new-floor").fadeOut(300, function() {
			$("#table-floors, #button-new-floor").fadeIn(300);
		});
		return false;
	});
	$("#button-new-room").click(function() {
		$(this).css("display", "none");
		$("#table-rooms").fadeOut(300, function() {
			$("#form-new-room").fadeIn(300);
		});
		return false;
	});
	$("#rooms-goback").click(function() {
		$("#form-new-room").fadeOut(300, function() {
			$("#table-roooms, #button-new-room").fadeIn(300);
		});
		return false;
	});
	$("#button-new-board").click(function() {
		$(this).css("display", "none");
		$("#table-boards").fadeOut(300, function() {
			$("#form-new-board").fadeIn(300);
		});
		return false;
	});
	$("#boards-goback").click(function() {
		$("#form-new-board").fadeOut(300, function() {
			$("#table-boards, #button-new-board").fadeIn(300);
		});
		return false;
	});
	$("#button-new-light").click(function() {
		$(this).css("display", "none");
		$("#table-lights").fadeOut(300, function() {
			$("#form-new-light").fadeIn(300);
		});
		return false;
	});
	$("#lights-goback").click(function() {
		$("#form-new-light").fadeOut(300, function() {
			$("#table-lights, #button-new-light").fadeIn(300);
		});
		return false;
	});
	$("#eula-accept").click(function() {
		$("#eula-modal").fadeOut();
		return false;
	});
	$("#time-date-widget").click(function() {
		$("#datetime-modal").fadeIn();
		return false;
	});
	$("#button-message").click(function() {
		$("#contactus-modal").fadeIn();
		return false;
	})
}

function initLogin() {
	$("#forgot-pass").click(function() {
		$("#recovery-modal").fadeIn();
		return false;
	});

	$("#other-method").click(function() {
		$("#pass-recovery-form").fadeOut(300, function() {
			$("#pass-recovery-question").fadeIn(300);
		});
		return false;
	});
}

function fixWindow() {
	$ww = $(window).width();
	$wh = $(window).height();

	$("#settings").css("width", $ww);
	$("#settings").css("height", $wh);

	$("#settings-tabs").height($wh -450);
}

function displayRoomsScenes($rid) {
	$.post("ajax/room_getScenes.php", {
		rid : $rid
	}, function(out) {
		$("#scenes-table table").html(out);
		$("#rooms-table").fadeOut(300, function() {
			$("#scenes-table").fadeIn(300);
		});
	},'html');
}