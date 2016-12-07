	 function fullscreen() {		//全屏
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
		}
		 
		bindClick(document.getElementById("nav4_ul").querySelectorAll("li>a"), document.getElementById("nav4_masklayer"));
		//绑定呼吸灯
		function bindClick(els, mask){
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
				if(ci == mask){mask.classList.remove("on");return;}
				switch(evt.type){
					case "click":
						var on = ci.classList.toggle("on");
						break;
				}
			}
		}
