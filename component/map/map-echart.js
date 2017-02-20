/**
 * 地图封装;依赖echarts和jquery
 * 需要以required.js的方式定义引入；在map.js页面就举例直接引入
 */
(function() {
	'use strict';
	define('map', ['jquery', 'echarts'], function($, echarts) {
		/**
		 * url:渲染地图json数据的链接
		 * name:地图的名称 例中国地图：china
		 * chartId：地图的图表id
		 * width:宽度
		 * height:高度
		 */
		function renderMap(option){
			var url = option.url,name = option.name,
				chartId = option.chartId,width = option.width,
				height = option.height;
			$('#'+chartId).css({'width':width,'height':height});
			$.ajax({
				url: url,
				type: "GET",
				async:false,
				dataType: "json",
				success: function (mapData) {
					var myChart = echarts.init(document.getElementById(chartId));
			        echarts.registerMap(name, mapData);
			        var defaultOption = {
			           tooltip : {
			               trigger: 'item'
			           },
			           visualMap: {
				            text:['高','低'],
				            realtime: false,
				            calculable: true,
				            inRange: {
				            	color: ['yellow', 'orange'],
				            },
				            left:'5%',
				            bottom:'5%',
				            textStyle:{
				                color:'#EEE',
				                fontSize:18
				            }
				        },
				        series: [{
		                     name: '地图',
		                     type: 'map',
		                     mapType: name, // 自定义扩展图表类型
		                     zoom:1.2,
		                     roam:true,
		                     itemStyle:{
		                    	 normal:{
								       areaStyle:{
								       		color: '#1b1b1b'
								       },
								       areaColor: 'rgba(22,49,76,0.3)'
								   },
									emphasis:{
										label:{ 
											show:true
										},
										areaColor:'rgba(194,53,49,0.7)',
										borderWidth:4,
										borderColor:'rgba(194,53,49,0.3)',
										shadowBlur:5,
										shadowOffsetX:5,
										shadowOffsetY:5,
										shadowColor: 'rgba(255, 0, 0, 0.5)'
									}
			                   },
			                   label:{
			                	   normal:{
			                		   show:true,
			                		   textStyle:{
			                			   fontSize:18
			                		   }
			                	   },
			                	   emphasis:{
			                		   show:true,
			                		   textStyle:{
			                			   fontSize:18,
			                			   color:'#EEE',
			                			   fontWeight:600
			                		   }
			                	   }
			                   },
		                     data:[]
		                }]
			        };                                
			        // 使用刚指定的配置项和数据显示图表。
			        myChart.setOption(defaultOption);
			        myChart.on('click', function (params) {
			        	reloadMap(params,option);
			        });
				}
			});
		}
		
		
		function reloadMap(params,option){		//重新加载地图
			var mapChart = echarts.getInstanceByDom(document.getElementById(option.chartId)),
     			mapOption = mapChart.getOption(),
     			name = params.name,
     			pname = _pinUtil(name);
			if(!pname){return;}
			//注意：具体的截取数据数量，跟随自定义的URL截取
     		var	url = option.url.substring(0,15)+pname+".json";
			$.getJSON(url, function (mapData) {
		        echarts.registerMap(pname, mapData);
		        mapOption.series[0].map = pname;
		        mapOption.series[0].mapType = pname;
		        mapChart.setOption(mapOption);
			});
		}
		
		function _pinUtil(name){		//拼音码转换
			var _data = {'北京':'beijing','天津':'tianjin','河北':'hebei','山西':'shanxi','内蒙古':'neimenggu',
							'辽宁':'liaoling','吉林':'jilin','黑龙江':'heilongjiang','上海':'shanghai','江苏':'jiangsu',
							'浙江':'zhejiang','安徽':'anhui','福建':'fujian','江西':'jiangxi','山东':'shandong',
							'河南':'henan','湖北':'hubei','湖南':'hunan','广东':'guangdong','广西':'guangxi',
							'海南':'hainan','重庆':'chongqing','四川':'sichuan','贵州':'guizhou','云南':'yunnan',
							'西藏':'xizang','陕西':'shanxi','甘肃':'gansu','青海':'qinghai','宁夏':'ningxia',
							'新疆':'xinjiang','中国':'china'};
			return _data[name];
		}
		
		return {
			renderMap:renderMap, 	//渲染地图
			reloadMap:reloadMap
		}
	});
})();