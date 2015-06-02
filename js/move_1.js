function moveMsg(elemId,finalX,finalY,interval){
	if (!document.getElementById) return false;
	if (!document.getElementById(elemId)) return false;
	var elem = document.getElementById(elemId);
	//如果函数在开始执行时，就已经有一个movement属性，就应该用clearTimeout对函数进行复位。
	if(elem.movement){
		clearTimeout(elem.movement);
	}

	if (!elem.style.left) {
		elem.style.left = "0px";
	}
	if (!elem.style.top) {
		elem.style.top = "0px";
	}

	var disX = parseInt(elem.style.left);
	// console.log(disX);
	var disY = parseInt(elem.style.top);
	// console.log(disY);

//如果div到达目的地，则退出这个函数。
	if (disX == finalX && disY == finalY) { return true;}
	//如果没到达目的地，则继续执行下面的代码
	if(disX < finalX){
		// 当disX与finalX之间的距离小于10的时候，distance将小于1，而我们不可能将一个元素移动不到一个像素的距离，这是需要用Math.ceil，来解决。
		var distance = Math.ceil((finalX - disX)/10);
		disX = disX + distance; 
	}
	if(disX > finalX){
		var distance = Math.ceil((disX - finalX)/10);
		disX = disX - distance;
	}
	
	if(disY < finalY){
		var distance = Math.ceil((finalY - disY)/10);
		disY = disY + distance;
	}
	if(disY > finalY){
		var distance = Math.ceil((disY - finalY)/10);
		disY = disY - distance;
	}

	var newX1 = elem.style.left = disX + 'px';
	// console.log(newX1);
	var newY1 = elem.style.top = disY + 'px';
	// console.log(newY1);
	var repeat = "moveMsg('"+elemId+"', "+finalX+", "+finalY+", "+interval+")";
	// movement设置为正在被移动的那个元素（elem）的属性，
	// 这样就可以测试它（正在被移动的那个元素（elem）的属性）是否存在，如果存在就使用clearTimeout对函数进行复位。
	elem.movement = setTimeout(repeat,interval);
	//movement = setTimeout("moveMsg()",10);
}

function posMsg(){
	if (!document.getElementById("pic")) return false;
	var oImg = document.getElementById("pic");
	oImg.style.position = "absolute";
	oImg.style.left = "0px";
	oImg.style.top = "0px";

	var alinks = document.getElementsByTagName("a");
	// console.log(alinks);
	alinks[0].onmouseover = function(){
		moveMsg("pic",0,0,10);
		// console.log("ok");
	}
	alinks[1].onmouseover = function(){
		moveMsg("pic",-100,0,10);
	}
	alinks[2].onmouseover = function(){
		moveMsg("pic",-200,0,10);
	}
	alinks[3].onmouseover = function(){
		moveMsg("pic",-300,0,10);
	}

}

function addonloadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}
	else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

addonloadEvent(posMsg);
// addonloadEvent(moveMsg);


























