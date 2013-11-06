$(function() {
	equalHeight($(".blog_item .date"), $(".blog_item .title"));

	// shortcuts
	$(".shortcuts li").click(function() {
		var target = $(this).data("target");
		var currBlog = $(this).parents(".blog_item");
		currBlog.find(".short_content").fadeOut();
		currBlog.find(".title .square").fadeOut();
		if (currBlog.find("." + target).css("display") == "none") {
			currBlog.find("." + target).fadeIn();
			currBlog.find(".title .square").fadeIn();
		}
	})
});

function equalHeight(target1, target2) {
	var maxHeight = Math.max(target1.height(), target2.height());
	target1.css("height",maxHeight);
	target2.css("height",maxHeight);
}