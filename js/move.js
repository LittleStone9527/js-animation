function posMsg(){
	if (!document.getElementById("box")) return false;
	var elem = document.getElementById("box");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "150px";
	// movement = setTimeout("moveMsg()",500);
	moveMsg("box",200,300,10);
}

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
	//if(disX > finalX){disX--;}
	if(disY < finalY){disY++;}
	//if(disY > finalY){disY--;}

	var newX1 = elem.style.left = disX + 'px';
	// console.log(newX1);
	var newY1 = elem.style.top = disY + 'px';
	// console.log(newY1);
	var repeat = "moveMsg('"+elemId+"', "+finalX+", "+finalY+", "+interval+")";
	movement = setTimeout(repeat,interval);
	//movement = setTimeout("moveMsg()",10);
}

// 用于绑定多个函数
function addonloadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}
	else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
addonloadEvent(posMsg);
addonloadEvent(moveMsg);














