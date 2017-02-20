/**
 * 竖式手风琴：依赖jquery-easing.js
 */
//初始化竖式手风琴
function initAccordionV(){
	/**
	 * key:一级菜单名称；name:二级菜单名称集合；
	 */
	var navData = [{key: '一', name: ['1.1','1.2']},
			       {key: '二', 
			    	name: ["2.1", "2.2", "2.3"]}
			      ];
	$('#inner_right_nav').empty().append('<ul class="container"></ul>');
	var oUls = $('#inner_right_nav .container');
	for(var i=0; i<navData.length; i++) {
		var key = navData[i].key,
			name = navData[i].name;
		var lis = '<li class="menu"><ul>';
		lis += '<li class="button"><a href="#">' + key + '<span></span></a></li><li class="dropdown"><ul>';
		for(var j=0; j<name.length; j++) {
			lis += '<li><a>' + name[j] +'</a></li>';
		}
		lis += '</ul></li></ul></li>'; 
		oUls.append(lis);
	}
	return $('#inner_right_nav').length;
}

if(initAccordionV() != 0) {
	//加载导航栏
	$.easing.def = "easeOutBounce";
	//一级菜单增加单击事件
	$('li.button a').click(function(evt){
		var dropDown = $(this).parent().next();
		$('.dropdown').not(dropDown).slideUp('slow');
		dropDown.slideToggle('slow');
		evt.preventDefault();
	});
	//二级菜单增加单击事件
	$('li.dropdown li').click(function(evt){
		//处理事件，自行定义
	});
	$('.button a:first').trigger('click');		//默认选中一级菜单
	$('.dropdown a:first').trigger('click');	//默认选中第一个一级菜单的二级菜单
} else {
	return;
}