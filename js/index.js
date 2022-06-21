$(document).ready(function () {
	// Full Page
	$("#fullpage").fullpage({
		licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
		anchors: ["1", "2", "3", "4", "5"],
		autoScrolling: true,
		scrollHorizontally: true,
		setAllowScrolling: true,

		afterLoad: function (anchorLink, index) {
			// Section indexes in fullpage start at 1
			var numSections = document.querySelectorAll(".fp-section").length;

			if (index === numSections) {
				$(".btn-round").fadeOut();
			} else {
				$(".btn-round").fadeIn();
			}
		},
	});
	$(".btn-round").on("click", function (e) {
		$.fn.fullpage.moveSectionDown();
	});

	//Nav
	$(".nav li").click(function () {
		$(".nav li").removeClass("on");
		$(this).addClass("on");
	});

	//Slick
	$(".full").slick({
		nav: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
	});

	$(".normal").slick({
		nav: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: false,
		autoplaySpeed: 2000,
	});
});
