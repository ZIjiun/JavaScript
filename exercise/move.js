

function startMove(obj, att, target) {
	clearInterval(obj.timer);
	
	//速度
	var speed = 0;
	//操作的屬性
	var currentValue = 0;

	obj.timer = setInterval(function() {
		
		//1.當前值
		if(att == 'opacity'){
			currentValue = parseInt(getStyle(obj,att)*100);
		} else {
			currentValue = parseInt(getStyle(obj, att));
		}
		
		//2.速度
		speed = (target - currentValue) / 7;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

		//3.運動處理
		currentValue += speed;
		if(currentValue == target) {
			clearInterval(obj.timer);
		} else {
			if(att == 'opacity'){
				obj.style.opacity = currentValue / 100;
				obj.style.filter = 'alpha(opacity:'+currentValue+')';
			} else {
				obj.style[att] = currentValue + 'px';
			}
		}
	}, 30)

}

function getStyle(obj, att) {
	return window.getComputedStyle ? getComputedStyle(obj)[att] : obj.currentStyle[att];
}