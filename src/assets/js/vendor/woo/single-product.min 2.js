jQuery(function(a) { 
"use strict";
    return "undefined" == typeof wc_single_product_params ? !1 : (a("body").on("init", ".wc-tabs-wrapper, .woocommerce-tabs", function() { 
	"use strict";
        a(".wc-tab, .woocommerce-tabs .panel:not(.panel .panel)").hide();
        var b = window.location.hash,
            c = window.location.href,
            d = a(this).find(".wc-tabs, ul.tabs").first();
        b.toLowerCase().indexOf("comment-") >= 0 || "#reviews" === b || "#tab-reviews" === b ? d.find("li.reviews_tab a").click() : c.indexOf("comment-page-") > 0 || c.indexOf("cpage=") > 0 ? d.find("li.reviews_tab a").click() : d.find("li:first a").click()
    }).on("click", ".wc-tabs li a, ul.tabs li a", function(b) {
		"use strict";
        b.preventDefault();
        var c = a(this),
            d = c.closest(".wc-tabs-wrapper, .woocommerce-tabs"),
            e = d.find(".wc-tabs, ul.tabs");
        e.find("li").removeClass("active"), d.find(".wc-tab, .panel:not(.panel .panel)").hide(), c.closest("li").addClass("active"), d.find(c.attr("href")).show()
    }).on("click", "a.woocommerce-review-link", function() {
		"use strict";
        return a(".reviews_tab a").click(), !0
    }).on("init", "#rating", function() {
		"use strict";
        a("#rating").hide().before('<p class="stars"><span><a class="star-1" href="#">1</a><a class="star-2" href="#">2</a><a class="star-3" href="#">3</a><a class="star-4" href="#">4</a><a class="star-5" href="#">5</a></span></p>')
    }).on("click", "#respond p.stars a", function() {
		"use strict";
        var b = a(this),
            c = a(this).closest("#respond").find("#rating"),
            d = a(this).closest(".stars");
        return c.val(b.text()), b.siblings("a").removeClass("active"), b.addClass("active"), d.addClass("selected"), !1
    }).on("click", "#respond #submit", function() {
		"use strict";
        var b = a(this).closest("#respond").find("#rating"),
            c = b.val();
        return b.length > 0 && !c && "yes" === wc_single_product_params.review_rating_required ? (window.alert(wc_single_product_params.i18n_required_rating_text), !1) : void 0
    }), void a(".wc-tabs-wrapper, .woocommerce-tabs, #rating").trigger("init"))
});