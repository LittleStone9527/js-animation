function moveMsg(elemId,finalX,finalY,interval){
	if (!document.getElementById) return false;
	var elem = document.getElementById(elemId);
	var disX = parseInt(elem.style.left);
	// console.log(disX);
	var disY = parseInt(elem.style.top);
	// console.log(disY);

//如果div到达目的地，则退出这个函数。
	if (disX == finalX && disY == finalY) { return true;}
	//如果没到达目的地，则继续执行下面的代码
	if(disX < finalX){disX++;}
	if(disX > finalX){disX--;}
	
	if(disY < finalY){disY++;}
	if(disY > finalY){disY--;}

	var newX1 = elem.style.left = disX + 'px';
	// console.log(newX1);
	var newY1 = elem.style.top = disY + 'px';
	// console.log(newY1);
	var repeat = "moveMsg('"+elemId+"', "+finalX+", "+finalY+", "+interval+")";
	movement = setTimeout(repeat,interval);
	//movement = setTimeout("moveMsg()",10);
}

function posMsg(){
	var oImg = document.getElementById("pic");
	oImg.style.position = "absolute";
	oImg.style.left = "0px";
	oImg.style.top = "0px";

	var alinks = document.getElementsByTagName("a");
	// console.log(alinks);
	alinks[0].onmouseover = function(){
		moveMsg("pic",0,0,10);
		console.log("ok");
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
addonloadEvent(moveMsg);

























