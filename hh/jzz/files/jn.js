function jnshow(element){
	var txy = GetXY(element);
	cssLeft("jnmain",txy.absoluteLeft+20);
	cssTop("jnmain",txy.absoluteTop+15);
	var snum = element.slice(3);
	if(snum%9==0){cssLeft("jnmain",txy.absoluteLeft-10);}
	$("jn_title").innerHTML = mpjn[snum][0];
	$("jntd1").innerHTML = ""+mpjn[snum][3];
	$("jntd2").innerHTML = ""+mpjn[snum][4];
	$("jntd3").innerHTML = ""+mpjn[snum][5];
	$("jntd4").innerHTML = ""+mpjn[snum][6];
	$("jntd5").innerHTML = ""+mpjn[snum][7];
	$("jntd6").innerHTML = ""+mpjn[snum][8];
	$("jn_ms").innerHTML = mpjn[snum][9].replace(/需要调息/g,"<br /><br />需要调息");
	if(mpjn[snum][9]!=""){
	view("jn_ms");
	}else{$("jn_ms").style.display="none";}

        $("jn_zb").innerHTML = "<span class='white'>"+mpjn[snum][10]+"</span>";
	if(mpjn[snum][10]!=""){
	view("jn_zb");
	}else{hide("jn_zb");}
	view("jnmain");
	/*$("jn_jj").innerHTML = mpjn[snum][2]+"　　必须等级："+mpjn[snum][11];*/
	if(mpjn[snum][3]!=""){
	view("jntd1");
	}else{$("jntd1").style.display="none";}
	if(mpjn[snum][4]!=""){
	view("jntd2");
	}else{$("jntd2").style.display="none";}
	if(mpjn[snum][5]!=""){
	view("jntd3");
	}else{$("jntd3").style.display="none";}
	if(mpjn[snum][6]!=""){
	view("jntd4");
	}else{$("jntd4").style.display="none";}
	if(mpjn[snum][7]!=""){
	view("jntd5");
	}else{$("jntd5").style.display="none";}
	if(mpjn[snum][8]!=""){
	view("jntd6");
	}else{$("jntd6").style.display="none";}

}
function jnpx(){
	var jn_length = mpjn.length;
	for(var i=1;i<=54;i++){
		$("jni"+i).src = "images/"+mpjn[i][1]+".jpg";
		//if(i%3==1){$("tt"+Math.ceil(i/3)).innerHTML = mpjn[3*Math.ceil(i/3)][0].slice(0,6);}
		//if(mpjn[3*Math.ceil(i/6)][0].indexOf("·")<0){$("tt"+Math.ceil(i/6)).style.lineHeight=34+"px";}
//		else{$("tt"+Math.ceil(i/6)).style.marginTop=2+"px";}
//		if(i%6==1){$("tt"+Math.ceil(i/6)).innerHTML = mpjn[3*Math.ceil(i/6)][0].replace(/·/g,"<br />");}
	}
}
