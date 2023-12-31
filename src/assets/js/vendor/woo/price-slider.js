var woocommerce_price_slider_params = {"currency_symbol":"$","currency_pos":"left","min_price":"","max_price":""};

jQuery(function(a) {
	"use strict";
	if ("undefined" == typeof woocommerce_price_slider_params) return !1;
	a("input#min_price, input#max_price").hide(), a(".price_slider, .price_label").show();
	var b = a(".price_slider_amount #min_price").data("min"),
		c = a(".price_slider_amount #max_price").data("max"),
		d = parseInt(b, 10),
		e = parseInt(c, 10);
	woocommerce_price_slider_params.min_price && (d = parseInt(woocommerce_price_slider_params.min_price, 10)), woocommerce_price_slider_params.max_price && (e = parseInt(woocommerce_price_slider_params.max_price, 10)), a(document.body).bind("price_slider_create price_slider_slide", function(b, c, d) {
		"left" === woocommerce_price_slider_params.currency_pos ? (a(".price_slider_amount span.from").html(woocommerce_price_slider_params.currency_symbol + c), a(".price_slider_amount span.to").html(woocommerce_price_slider_params.currency_symbol + d)) : "left_space" === woocommerce_price_slider_params.currency_pos ? (a(".price_slider_amount span.from").html(woocommerce_price_slider_params.currency_symbol + " " + c), a(".price_slider_amount span.to").html(woocommerce_price_slider_params.currency_symbol + " " + d)) : "right" === woocommerce_price_slider_params.currency_pos ? (a(".price_slider_amount span.from").html(c + woocommerce_price_slider_params.currency_symbol), a(".price_slider_amount span.to").html(d + woocommerce_price_slider_params.currency_symbol)) : "right_space" === woocommerce_price_slider_params.currency_pos && (a(".price_slider_amount span.from").html(c + " " + woocommerce_price_slider_params.currency_symbol), a(".price_slider_amount span.to").html(d + " " + woocommerce_price_slider_params.currency_symbol)), a(document.body).trigger("price_slider_updated", [c, d])
	}), a(".price_slider").slider({
		range: !0,
		animate: !0,
		min: b,
		max: c,
		values: [d, e],
		create: function() {
			a(".price_slider_amount #min_price").val(d), a(".price_slider_amount #max_price").val(e), a(document.body).trigger("price_slider_create", [d, e])
		},
		slide: function(b, c) {
			a("input#min_price").val(c.values[0]), a("input#max_price").val(c.values[1]), a(document.body).trigger("price_slider_slide", [c.values[0], c.values[1]])
		},
		change: function(b, c) {
			a(document.body).trigger("price_slider_change", [c.values[0], c.values[1]])
		}
	})
});