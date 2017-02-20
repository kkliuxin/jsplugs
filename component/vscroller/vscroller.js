/**
 * 依赖jquery
 * xml:xml文件的具体内容
 * 一般通过ajax请求获取，确定返回的数据是以下格式：
 * 
<newslist>
	<dl>
		 <h1>序号</h1>
		 <h2>省份</h2>
		 <h3>数量</h3>
	</dl>
	<news>
		<num>1</num>
		<headline>江苏</headline>
		<detail>9571354</detail>
	</news>
	<news>
		<num>2</num>
		<headline>四川</headline>
		<detail>9201088</detail>
	</news>
	<news>
		<num>3</num>
		<headline>上海</headline>
		<detail>8612541</detail>
	</news>
</newslist>
 * 如果想把ajax请求移入jquery-vscroller.js文件，修改jQuery-vscroller文件即可。
 */

$('#news_vscroller').vscroller({ xml:xml});