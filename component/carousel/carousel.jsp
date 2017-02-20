<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>图片轮播（可增加简介描述）</title>
<link type="text/css" href="carousel.css" rel="stylesheet">
<script type="text/javascript" src="jquery-spacegallery.js"></script>
<script type="text/javascript" src="carousel.js"></script>
</head>
<body>
   <!-- 可自行进行增减 -->
	<div class="preview">
		<div id="sub_col">
			<div class="p01-text">
				<h2>图片1名称</h2>
				<p>描述</p>
			</div>
			<div class="p02-text">
				<h2>图片2名称</h2>
				<p>描述</p>
			</div>
			<div class="p03-text">
				<h2>图片3名称</h2>
				<p>描述</p>
			</div>
			<div class="p04-text">
				<h2>图片4名称</h2>
				<p>描述</p>
			</div>
			<div class="p05-text">
				<h2>图片5名称</h2>
				<p>描述</p>
			</div>
		</div>
		<div id="main_col">
			<div id="gallery" class="spacegallery">
				<img width="680" height="301" class="p01-text" alt="" src="图片1路径" />
				<img width="680" height="301" class="p02-text" alt="" src="图片2路径" />
				<img width="680" height="301" class="p03-text" alt="" src="图片3路径" />
				<img width="680" height="301" class="p04-text" alt="" src="图片4路径" />
				<img width="680" height="301" class="p05-text" alt="" src="图片5路径" />
			</div>
		</div>
	</div>
</body>
</html>