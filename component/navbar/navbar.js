//浮动导航条展开与收缩
$(function () {
    var box = $('.menu .box');
    $('.menu').hover(function () {
        box.stop().show(300);
    }, function () {
        box.stop().hide(150);
    });

    //浮动导航条拖动
    var box = document.getElementById('btn');
    box.onmousedown = function (event) {
        var e = event || window.event,
        t = e.target || e.srcElement,
        //鼠标按下时的坐标x1,y1
        x1 = e.clientX,
        y1 = e.clientY,
        //鼠标按下时的左右偏移量
        dragLeft = this.offsetLeft,
        dragTop = this.offsetTop;
        document.onmousemove = function (event) {
            var e = event || window.event,
            t = e.target || e.srcElement,
            //鼠标移动时的动态坐标
            x2 = e.clientX,
            y2 = e.clientY,
            //鼠标移动时的坐标的变化量
            x = x2 - x1,
            y = y2 - y1;
            box.style.left = (dragLeft + x) + 'px';
            box.style.top = (dragTop + y) + 'px';
        }
        document.onmouseup = function () {
            this.onmousemove = null;
        }
    }
    //子菜单事件请自行绑定处理,示例：
    $('#btn_1').click(function(){
    	//事件1
    })
    
    
})	