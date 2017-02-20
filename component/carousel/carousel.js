/**
 * 图片轮播：依赖jquery-spacegallery文件
 */
$("#gallery").spacegallery({loadingClass: "loading", perspective: 100});
var x = $("#gallery img:last").attr("class");
$("#sub_col div."+x).show();

$("#gallery a").click(function(){
	$("#sub_col div").hide();
	var x = $(this).prev("img").prev("img").attr("class");
	$("#sub_col div."+x).fadeIn();
});