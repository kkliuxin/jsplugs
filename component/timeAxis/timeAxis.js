/**
 * 时间轴：依赖jquery-easing.js、jquery-mousewheel.js和jquery-timeAxis文件
 */
(function() {
	function e(){
		c=$(".list li").eq(d).find(".year").html();
		$(".timeblock").attr("thisyear",c);
		var a=c.split(""),b=["numf","nums","numt","numfo"];
		for(var i=0;4>i;i++)
		$("."+b[i]+"").stop(!0,!1).animate({backgroundPosition:"0px "+-24*a[i]},{duration:200});
	}
	$(".list .liwrap").mouseover(function(){
		$(".list li").removeClass("thiscur");
		$(this).parent().addClass("thiscur");
	});
	var b=0,f=$(".list li").length,d=0,a=!0,c,row;
	(function(){
		var a=$(window).height();
		890<=a&&(row=4);
		800<=a&&890>a&&(row=4);
		726<=a&& 800>a&&(row=3);
		726>a&&(row=2)}
	)();
	var h=f-row;
	$(".list").height(150*row);
	$("#content").height(150*row+25);
	$.fn.liOut=function(){
		$(this).find(".lileft").animate({left:"-400px"},500,"easeOutQuart");
		$(this).find(".liright").animate({right:"-700px"},500,"easeOutQuart");
	};
	$.fn.liIn=function(){
		$(this).find(".lileft").animate({left:"0px"},500,"easeOutQuart");
		$(this).find(".liright").animate({right:"0px"},500,"easeOutQuart");
	};
	$(".arrowdown").click(function(event){
		//stopDefault(event);
		a&&parseInt($(".list li:first").css("marginTop"))> -180*h&&(d++,b--,a=!1,$(".list li").eq(d-1).liOut(),$(".list li").eq(d+row-1).liIn(),$(".list li:first").animate({marginTop:150*b},600,"easeInOutQuad",function(){
			a=!0;$(".arrowdown").css("opacity",0.3);
			$(".arrowdown").removeClass("arrow_active");
		}),e()
	)});
	$(".arrowup").click(function(event){
		a&&0!=parseInt($(".list li:first").css("marginTop"))&&(b++,d--,a=!1,$(".list li").eq(d).liIn(),$(".list li").eq(d+row).liOut(),$(".list li:first").animate({marginTop:150*b},600,"easeInOutQuad",function(){
			a=!0;$(".arrowup").css("opacity", 0.3);
			$(".arrowup").removeClass("arrow_active");
		}),e()
	)});
	$(".list").mousewheel(function(b,c){
		Math.abs(c);
		if(a){
			var d=parseInt($(".list li:first").css("marginTop"));
			0<c?0!=d&&($(".arrowup").addClass("arrow_active"),$(".arrowup").trigger("click")):d>-150*h&&($(".arrowdown").addClass("arrow_active"),$(".arrowdown").trigger("click"));
		}
	});
	$(".timeblock").attr("thisyear",c);
	$(".list li:gt("+(row-1)+")").find(".lileft").css({left:"-400px"});
	$(".list li:gt("+(row-1)+")").find(".liright").css({right:"-700px"});
})();