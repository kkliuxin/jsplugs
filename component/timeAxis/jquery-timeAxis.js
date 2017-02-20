(function(e){
	function b(a){
		a=a.replace(/left|top/g,"0px");
		a=a.replace(/right|bottom/g,"100%");
		a=a.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
		a=a.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
		return[parseFloat(a[1],10),a[2],parseFloat(a[3],10),a[4]]}
		if(!document.defaultView||!document.defaultView.getComputedStyle){
			var f=e.curCSS;
			e.curCSS=function(a,c,b){
				"background-position"===c&&(c="backgroundPosition");
				if("backgroundPosition"!==c||!a.currentStyle||a.currentStyle[c])
				return f.apply(this, arguments);
				var g=a.style;
				return!b&&g&&g[c]?g[c]:f(a,"backgroundPositionX",b)+" "+f(a,"backgroundPositionY",b)
			}
		}
		var d=e.fn.animate;
		e.fn.animate=function(a){
			"background-position"in a&&(a.backgroundPosition=a["background-position"],delete a["background-position"]);
			"backgroundPosition"in a&&(a.backgroundPosition="("+a.backgroundPosition);
			return d.apply(this,arguments)
		};
		e.fx.step.backgroundPosition=function(a){
			if(!a.bgPosReady){
				var c=e.curCSS(a.elem,"backgroundPosition");
				c||(c="0px 0px");c=b(c);a.start= [c[0],c[2]];
				c=b(a.end);
				a.end=[c[0],c[2]];
				a.unit=[c[1],c[3]];
				a.bgPosReady=!0}c=[];
				c[0]=(a.end[0]-a.start[0])*a.pos+a.start[0]+a.unit[0];
				c[1]=(a.end[1]-a.start[1])*a.pos+a.start[1]+a.unit[1];
				a.elem.style.backgroundPosition=c[0]+" "+c[1]
			}
	}
)(jQuery);

(function(e){e.extend(e.fx.step,{
	backgroundPosition:function(b){
		function f(a){
			a=a.replace(/left|top/g,"0px");
			a=a.replace(/right|bottom/g,"100%");
			a=a.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
		  	a=a.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
		  	return[parseFloat(a[1],10),a[2],parseFloat(a[3],10),a[4]]
		}
		if(0===b.state&&"string"==typeof b.end){
			var d=e.curCSS(b.elem,"backgroundPosition"),d=f(d);
			b.start=[d[0],d[2]];d=f(b.end);b.end=[d[0],d[2]];
			b.unit=[d[1],d[3]]}d=[];
			d[0]=(b.end[0]-b.start[0])* b.pos+b.start[0]+b.unit[0];
			d[1]=(b.end[1]-b.start[1])*b.pos+b.start[1]+b.unit[1];
			b.elem.style.backgroundPosition=d[0]+" "+d[1]
		}
	}
)})(jQuery);
 
