function jnshow(element){
	var txy = GetXY(element);
	cssLeft("jnmain",txy.absoluteLeft+20);
	cssTop("jnmain",txy.absoluteTop+15);
	var snum = element.slice(3);
	if(snum%9==0){cssLeft("jnmain",txy.absoluteLeft-10);}
	$("jn_title").innerHTML = mpjn[snum][0];
	$("jn_jj").innerHTML = mpjn[snum][2]+"　　必须等级："+mpjn[snum][11];
	$("jntd1").innerHTML = "技力："+mpjn[snum][3];
	$("jntd2").innerHTML = "射程："+mpjn[snum][4];
	$("jntd3").innerHTML = "聚气："+mpjn[snum][5];
	$("jntd4").innerHTML = "回气："+mpjn[snum][6];
	$("jntd5").innerHTML = "伤害类型："+mpjn[snum][7];
	$("jntd6").innerHTML = "威力："+mpjn[snum][8];
	$("jn_ms").innerHTML = mpjn[snum][9].replace(/需要调息/g,"<br />需要调息");
	$("jn_zb").innerHTML = "<span class='white'>需要装备："+mpjn[snum][10]+"</span>";
	if(mpjn[snum][10]!=""){
	view("jn_zb");
	}else{hide("jn_zb");}
	view("jnmain");
}

function jnpx(){
	var jn_length = mpjn.length;
	for(var i=1;i<=54;i++){
		$("jni"+i).src = "images/icon/"+mpjn[i][1]+".gif";		
		//if(i%3==1){$("tt"+Math.ceil(i/3)).innerHTML = mpjn[3*Math.ceil(i/3)][0].slice(0,6);}
		if(mpjn[3*Math.ceil(i/3)][0].indexOf("·")<0){$("tt"+Math.ceil(i/3)).style.lineHeight=34+"px";}
		else{$("tt"+Math.ceil(i/3)).style.marginTop=2+"px";}
		if(i%3==1){$("tt"+Math.ceil(i/3)).innerHTML = mpjn[3*Math.ceil(i/3)][0].replace(/·/g,"<br />");}
	}
}