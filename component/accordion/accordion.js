/**
 * 手风琴式轮播图
 */
//定时器返回值，主要用于关闭定时器  
		var iNow=0,showNumber=$(".voice_2 ul li").length;
		var interval = setInterval(function(){  //打开定时器   
			 if($('#item_accordion').length<=0){
				 clearInterval(interval);
				 return;
			 }
			 iNow++;       //让图片的索引值次序加1，这样就可以实现顺序轮播图片   
			 if(iNow>showNumber-1){ //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始    
				 iNow=0;   
			 }   
			 $(".voice_2 ul li").eq(iNow).trigger("click"); //模拟触发数字按钮的click  
		},3000); 
		//语音通知手风琴效果
		$(".voice_2 ul li").each(function(){
			var fold = $(this).find(".fold");
			if(fold.is(":hidden")){
				$(this).width(680);
			}else{
				$(this).width(100);
			}
		});

		$(".voice_2 ul li").click(function(){
			$(this).animate({width:680},200);
			$(this).find(".unfold").show();
			$(this).find(".fold").hide();
			$(this).siblings().animate({width:100},200);
			$(this).siblings().find(".unfold").hide();
			$(this).siblings().find(".fold").show();
		});