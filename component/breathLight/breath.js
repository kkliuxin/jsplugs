/**
 * 呼吸灯导航：拖拽事件依赖jquery-ui.js;
 */
//绑定呼吸灯
function bindClick(els){
	if(!els || !els.length){return;}
	for(var i=0,ci; ci = els[i]; i++){
		ci.addEventListener("click", evtFn, false);
	}

	function evtFn(evt, ci){
		ci =this;
		for(var j=0,cj; cj = els[j]; j++){
			if(cj != ci){
				console.log(cj);
				cj.classList.remove("on");
			}
		}
		switch(evt.type){
			case "click":
				var on = ci.classList.toggle("on");
				break;
		}
	}
}
//初始化呼吸灯
bindClick(document.getElementById("nav4_ul").querySelectorAll("li>a"));
//呼吸灯拖拽
$('#drag_button').draggable({
	stop:function(event,ui){
		var position = $(this).position();
		$(this).parent().find('dl').css({'left':position.left+5,'top':position.top-238});
	}
});
//绑定全屏按钮
$('#btn_fullScreen').bind('click',function(){
	var el = document.documentElement,
    rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen,
    wscript;
	if(typeof rfs != "undefined" && rfs) {
	    rfs.call(el);
	    return;
	}
	if(typeof window.ActiveXObject != "undefined") {
	    wscript = new ActiveXObject("WScript.Shell");
	    if(wscript) {
	        wscript.SendKeys("{F11}");
	    }
	}
});
//绑定刷新按钮
$('#btn_refresh').bind('click',function(){
	history.go(0);
});
//绑定后退按钮
$('#btn_back').bind('click',function(){
	//处理事件
});
//绑定前进按钮
$('#btn_go').bind('click',function(){
	//处理事件
});