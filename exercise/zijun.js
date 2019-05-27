// 获取元素样式
// object: 元素对象
// att: 需要获取的属性()
function getStyle(object, att) {
	return window.getComputedStyle ? getComputedStyle(object)[att] : object.currentStyle[att];
}

// 通过id获取对应元素
//function $(id) {
//	return document.getElementById(id);
//}


function $(str){
	if(typeof str === 'string'){
		return document.getElementById(str);
	} else if(typeof str === 'function'){
		window.onload = str;
	}
}
