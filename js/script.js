$(document).ready(function () {
	$(window).scroll(function () {
		if (
			($(window).scrollTop() > 100 &&
				!$(".navigation").hasClass("navigation-act")) ||
			($(window).scrollTop() === 0 &&
				$(".navigation").hasClass("navigation-act"))
		) {
			$(".navigation").toggleClass("navigation-act");
		}
	});
});
