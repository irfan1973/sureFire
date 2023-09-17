

jQuery(document).ready(function() {
	"use strict";
	PROGUARDS_GLOBALS.message_callback = null;
	PROGUARDS_GLOBALS.message_timeout = 5000;
	
	jQuery("body").on("click", "#proguards_modal_bg,.proguards_message .proguards_message_close", function(a) {
		"use strict";
		proguards_message_destroy();
		if (PROGUARDS_GLOBALS.message_callback) {
			PROGUARDS_GLOBALS.message_callback(0);
			PROGUARDS_GLOBALS.message_callback = null
		}
		a.preventDefault();
		return false
	})
});

function proguards_message_warning(c) {
	"use strict";
	var d = arguments[1] ? arguments[1] : "";
	var b = arguments[2] ? arguments[2] : "cancel";
	var a = arguments[3] ? arguments[3] : PROGUARDS_GLOBALS.message_timeout;
	return proguards_message({
		msg: c,
		hdr: d,
		icon: b,
		type: "warning",
		delay: a,
		buttons: [],
		callback: null
	})
}

function proguards_message_success(c) {
	"use strict";
	var d = arguments[1] ? arguments[1] : "";
	var b = arguments[2] ? arguments[2] : "check";
	var a = arguments[3] ? arguments[3] : PROGUARDS_GLOBALS.message_timeout;
	return proguards_message({
		msg: c,
		hdr: d,
		icon: b,
		type: "success",
		delay: a,
		buttons: [],
		callback: null
	})
}

function proguards_message_info(c) {
	"use strict";
	var d = arguments[1] ? arguments[1] : "";
	var b = arguments[2] ? arguments[2] : "info";
	var a = arguments[3] ? arguments[3] : PROGUARDS_GLOBALS.message_timeout;
	return proguards_message({
		msg: c,
		hdr: d,
		icon: b,
		type: "info",
		delay: a,
		buttons: [],
		callback: null
	})
}

function proguards_message_regular(c) {
	"use strict";
	var d = arguments[1] ? arguments[1] : "";
	var b = arguments[2] ? arguments[2] : "quote";
	var a = arguments[3] ? arguments[3] : PROGUARDS_GLOBALS.message_timeout;
	return proguards_message({
		msg: c,
		hdr: d,
		icon: b,
		type: "regular",
		delay: a,
		buttons: [],
		callback: null
	})
}

function proguards_message_confirm(a) {
	"use strict";
	var c = arguments[1] ? arguments[1] : "";
	var b = arguments[2] ? arguments[2] : null;
	return proguards_message({
		msg: a,
		hdr: c,
		icon: "help",
		type: "regular",
		delay: 0,
		buttons: ["Yes", "No"],
		callback: b
	})
}

function proguards_message_dialog(a) {
	"use strict";
	var d = arguments[1] ? arguments[1] : "";
	var b = arguments[2] ? arguments[2] : null;
	var c = arguments[3] ? arguments[3] : null;
	return proguards_message({
		msg: a,
		hdr: d,
		icon: "",
		type: "regular",
		delay: 0,
		buttons: ["Apply", "Cancel"],
		init: b,
		callback: c
	})
}

function proguards_message(b) {
	"use strict";
	var c = b.msg != undefined ? b.msg : "";
	var l = b.hdr != undefined ? b.hdr : "";
	var k = b.icon != undefined ? b.icon : "";
	var h = b.type != undefined ? b.type : "regular";
	var e = b.delay != undefined ? b.delay : PROGUARDS_GLOBALS.message_timeout;
	var g = b.buttons != undefined ? b.buttons : [];
	var n = b.init != undefined ? b.init : null;
	var m = b.callback != undefined ? b.callback : null;
	jQuery("#proguards_modal_bg").remove();
	jQuery("body").append('<div id="proguards_modal_bg"></div>');
	jQuery("#proguards_modal_bg").fadeIn();
	jQuery(".proguards_message").remove();
	var f = '<div class="proguards_message proguards_message_' + h + (g.length > 0 ? " proguards_message_dialog" : "") + '"><span class="proguards_message_close iconadmin-cancel icon-cancel"></span>' + (k ? '<span class="proguards_message_icon iconadmin-' + k + " icon-" + k + '"></span>' : "") + (l ? '<h2 class="proguards_message_header">' + l + "</h2>" : "");
	f += '<div class="proguards_message_body">' + c + "</div>";
	if (g.length > 0) {
		f += '<div class="proguards_message_buttons">';
		for (var d = 0; d < g.length; d++) {
			f += '<span class="proguards_message_button">' + g[d] + "</span>"
		}
		f += "</div>"
	}
	f += "</div>";
	jQuery("body").append(f);
	var a = jQuery("body .proguards_message").eq(0);
	if (m != null) {
		PROGUARDS_GLOBALS.message_callback = m;
		jQuery(".proguards_message_button").click(function(o) {
			"use strict";
			var i = jQuery(this).index();
			m(i + 1, a);
			PROGUARDS_GLOBALS.message_callback = null;
			proguards_message_destroy()
		})
	}
	if (n != null) {
		n(a)
	}
	var j = jQuery(window).scrollTop();
	jQuery("body .proguards_message").animate({
		top: j + Math.round((jQuery(window).height() - jQuery(".proguards_message").height()) / 2),
		opacity: 1
	}, {
		complete: function() {}
	});
	if (e > 0) {
		setTimeout(function() {
			proguards_message_destroy()
		}, e)
	}
	return a
}

function proguards_message_destroy() {
	"use strict";
	var a = jQuery(window).scrollTop();
	jQuery("#proguards_modal_bg").fadeOut();
	jQuery(".proguards_message").animate({
		top: a - jQuery(".proguards_message").height(),
		opacity: 0
	});
	setTimeout(function() {
		jQuery("#proguards_modal_bg").remove();
		jQuery(".proguards_message").remove()
	}, 500)
};

