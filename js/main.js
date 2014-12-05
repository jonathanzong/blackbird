$(document).ready(function() {
	var tweenCache = {};
	$(".columns")
		.not($(".text-head").parent())
		.not($("footer").find(".columns"))
		.click(function(e) {
			var el = $(this);
			if (!el.hasClass("expanded")) {
				el.addClass("expanded");
				var siblings = el.parent().find(".columns").not(el);
				siblings.hide();
				var id = el.find(".panel").attr("id");
				var w = el.parent(".row").width();
				tweenCache[id] = TweenMax.to(el, 0.5, {
					width: w,
					height: w * 0.75,
					onReverseComplete: function() {
						siblings.show();
					}
				});
			}
			else {
				var id = el.find(".panel").attr("id");
				if (tweenCache[id]) {
					console.log(tweenCache[id]);
					tweenCache[id].reverse();
					tweenCache[id] = null;
				}
				el.removeClass("expanded");
			}
		});
});