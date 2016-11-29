
/**************************************************************************/
/*********************Netease Javascript Framework V1.7********************/
/**************************Last Change:2006-10-09**************************/
/**********************write by [cxia@corp.netease.com]********************/
/**************************************************************************/
function $()
{var elements=new Array();for(var i=0;i<arguments.length;i++)
{var element=arguments[i];if(typeof element=="string")
{element=document.getElementById(element);}
if(arguments.length==1)
{return element;}
elements.push(element);}
return elements;}
function getCookie(name)
{var start=document.cookie.indexOf(name+"=");var len=start+name.length+1;if((!start)&&(name!=document.cookie.substring(0,name.length)))
{return null;}
if(start==-1)return null;var end=document.cookie.indexOf(";",len);if(end==-1)end=document.cookie.length;return unescape(document.cookie.substring(len,end));}
function setCookie(name,value,expires,path,domain,secure)
{var today=new Date();today.setTime(today.getTime());if(expires)
{expires=expires*1000*60*60*24;}
var expires_date=new Date(today.getTime()+(expires));document.cookie=name+"="+escape(value)+
((expires)?";expires="+expires_date.toGMTString():"")+
((path)?";path="+path:"")+
((domain)?";domain="+domain:"")+
((secure)?";secure":"");}
function deleteCookie(name,path,domain)
{if(getCookie(name))document.cookie=name+"="+
((path)?";path="+path:"")+
((domain)?";domain="+domain:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT";}
function adRandom(adDiv)
{var adImg=eval(adDiv+"_img");var adLink=eval(adDiv+"_link");var aid=rand(adImg.length);var ad_img=adImg[aid];var ad_src=(adLink[aid]==undefined)?"#":adLink[aid];creathtml(adDiv,ad_img,ad_src);}
function nextAd(adDiv,adTime)
{var i=1;var adImg=eval(adDiv+"_img");var adLink=eval(adDiv+"_link");var aid=adImg.length;var ad_img=adImg[i-1];var ad_src=(adLink[i-1]==undefined)?"#":adLink[i-1];creathtml(adDiv,ad_img,ad_src);var theTimer=setInterval(function()
{var ad_img=adImg[i];var ad_src=(adLink[i]==undefined)?"#":adLink[i];ad_img.onload=imagesLoaded();function imagesLoaded()
{creathtml(adDiv,ad_img,ad_src);if(i<(aid-1))
{i++;}
else
{i=0;}}},adTime*1000);}
function creathtml(adDiv,ad_img,ad_src)
{var newAd=$(adDiv);newAd.innerHTML="";if(ad_img=="flash"){var flash_ad=ad_src.split("|");var fo=new FlashObject(flash_ad[0],"richad_swf"+rand(100),flash_ad[1],flash_ad[2],"8","#FFFFFF");if(flash_ad[3]=="transparent"){fo.addParam("wmode","transparent");}
fo.write(adDiv);}
else{var newSrc=document.createElement("a");newSrc.setAttribute("href",ad_src);newSrc.setAttribute("target","_blank");newAd.appendChild(newSrc);var newImg=document.createElement("img");newImg.setAttribute("src",ad_img);newImg.setAttribute("alt","");newSrc.appendChild(newImg);}}
var alLeft=0,alCenter=1,alRight=2;var alTop=0,alMiddle=1,alBottom=2;var f=new Array();var cnt=0;function richMedia(adDiv,align,vAlign,x,y,move,smooth)
{f[cnt++]=new floatDiv(adDiv,align,vAlign,x,y,move,smooth);setTimeout("floatMove();",50);}
function floatDiv(adDiv,align,vAlign,x,y,move,smooth)
{this.adDiv=adDiv;this.align=align;this.vAlign=vAlign;this.x=x;this.y=y;this.move=move;this.smooth=smooth;$(this.adDiv).style.position="absolute";}
function floatMove()
{var objX,objY;if(document.getElementById)
{if(document.body.scrollLeft=="0")
{var d=document.documentElement;}
else
{var d=document.body;}
for(var i=0;i<f.length;i++)
{var obj=$(f[i].adDiv);if(f[i].move)
{var ds=d.scrollLeft;var dt=d.scrollTop;}
else
{var ds=0;var dt=0;}
switch(f[i].align)
{case"alLeft":objX=ds+f[i].x;break;case"alCenter":objX=ds+Math.ceil((d.clientWidth-obj.offsetWidth)/2)+f[i].x;break;case"alRight":objX=ds+d.clientWidth-f[i].x-obj.offsetWidth-20;break;}
switch(f[i].vAlign)
{case"alTop":objY=dt+f[i].y;break;case"alMiddle":objY=dt+Math.ceil((d.clientHeight-obj.offsetHeight)/2)+f[i].y;break;case"alBottom":objY=dt+d.clientHeight-f[i].y-obj.offsetHeight;break;}
if(f[i].smooth)
{smoothMove(f[i].adDiv,objX,objY);}
else
{obj.style.left=objX+"px";obj.style.top=objY+"px";}}}
if(document.layers)
{for(var i=0;i<f.length;i++)
{var obj=$(f[i].adDiv);if(f[i].move)
{var ds=pageXOffset;var dt=pageYOffset;}
else
{var ds=0;var dt=0;}
switch(f[i].align)
{case"alLeft":objX=ds+f[i].x;break;case"alCenter":objX=ds+Math.ceil((window.innerWidth-obj.width)/2)+f[i].x;break;case"alRight":objX=ds+window.innerWidth-f[i].x-obj.width;break;}
switch(f[i].vAlign)
{case"alTop":objY=dt+f[i].y;break;case"alMiddle":objY=dt+Math.ceil(window.innerHeight/2)+f[i].y;break;case"alBottom":objY=dt+window.innerHeight-f[i].y-obj.height;break;}
if(f[i].smooth)
{smoothMove(f[i].adDiv,objX,objY);}
else
{obj.left=objX+"px";obj.top=objY+"px";}}}
setTimeout("floatMove();",50);}
function smoothMove(adDiv,x,y)
{var percent;var obj=$(adDiv);if(document.getElementById)
{percent=.1*(x-parseInt(obj.style.left));if(percent>0)
{percent=Math.ceil(percent);}
else
{percent=Math.floor(percent);}
var Xtop=parseInt(obj.style.left)+percent;if(isNaN(Xtop))
{Xtop=0}
obj.style.left=Xtop+"px";percent=.1*(y-parseInt(obj.style.top));if(percent>0)
{percent=Math.ceil(percent);}
else
{percent=Math.floor(percent);}
var Ytop=parseInt(obj.style.top)+percent;if(isNaN(Ytop))
{Ytop=0}
obj.style.top=Ytop+"px";}
if(document.layers)
{percent=.1*(x-obj.left);if(percent>0)
{percent=Math.ceil(percent);}
else
{percent=Math.floor(percent);}
obj.left+=percent;percent=.1*(y-obj.top);if(percent>0)
{percent=Math.ceil(percent);}
else
{percent=Math.floor(percent);}
obj.top+=percent;}}
function divOut(adDiv,ray,adTime)
{if(ray)
{$(adDiv).style.visibility="visible";var theTimer=setInterval(function()
{vista=($(adDiv).style.visibility=='visible')?"hidden":"visible";$(adDiv).style.visibility=vista;},adTime*1000);}
else
{$(adDiv).style.display="block";var theTimer=setInterval(function()
{if($(adDiv).style.display=="block")
{$(adDiv).style.display="none";}
else
{clearInterval(theTimer);}},adTime*1000);}}
function getClient(adDiv){if(adDiv=="width"){return}}
function hideORview(adDiv)
{if(isNaN($(adDiv).style.display)==false)
{$(adDiv).style.display="block";}
var hv=($(adDiv).style.display=="block")?"none":"block";$(adDiv).style.display=hv;}
function hide(){for(var i=0;i<arguments.length;i++)
{var element=arguments[i];$(element).style.display="none";}}
function view(){for(var i=0;i<arguments.length;i++)
{var element=arguments[i];$(element).style.display="block";}}
function newOpen(url,width,height,name,opt)
{var scroll=(opt=="no_scroll")?"no":"yes";window.open(url,name,'statusbar=no,scrollbars='+scroll+',status=no,resizable=no,width='+width+',height='+height);}
function cssLeft(adDiv,x)
{$(adDiv).style.left=x+"px";}
function cssTop(adDiv,y)
{$(adDiv).style.top=y+"px";}
function cssEqual(adDiv1,adDiv2)
{var obj1=$(adDiv1);var obj2=$(adDiv2);var cc_left=obj1.offsetHeight;cc_left=parseInt(cc_left);var cc_right=obj2.offsetHeight;cc_right=parseInt(cc_right);var cc_height=(cc_left>cc_right)?cc_left:cc_right;obj1.style.height=cc_height+"px";obj2.style.height=cc_height+"px";}
function doZoom(size)
{if($("content")!=null)
{$("content").style.fontSize=size+'px';}}
function layerClick(adDiv,allN,iN)
{if(typeof adDiv!='string')
{adDiv=adDiv.toString();}
if(iN==0)
{for(i=1;i<allN+1;i++)
{$(adDiv+i).style.display="none";}}
else
{for(i=1;i<allN+1;i++)
{$(adDiv+i).style.display="none";}
$(adDiv+iN).style.display="block";}}
function timeOver(adDiv,y,m,d,h,mi,s)
{var obday=new Date();obday.setFullYear(y,m,d);obday.setHours(h,mi,s);var theTimer=setInterval(function()
{var today=new Date();var difftime=obday.getTime()-today.getTime();d=difftime/(3600000*24);drnd=Math.floor(d);h=difftime/3600000-(24*drnd);hrnd=Math.floor(h);m=difftime/60000-(24*60*drnd)-(60*hrnd);mrnd=Math.floor(m);s=difftime/1000-(24*60*60*drnd)-(60*60*hrnd)-(60*mrnd);srnd=Math.round(s);if(srnd==60)
{srnd=59;}
var divHtml="<span>"+drnd+"</span>  <span>"+hrnd+"</span> Сʱ <span>"+mrnd+"</span> "+" <span>"+srnd+"</span> ";if(difftime>0)
{$(adDiv).innerHTML=divHtml;}
else
{clearInterval(theTimer);$(adDiv).innerHTML="";}},100);}
rnd.today=new Date();rnd.seed=rnd.today.getTime();function rnd()
{rnd.seed=(rnd.seed*9301+49297)%233280;return rnd.seed/(233280.0);};function rand(number)
{return Math.floor(rnd()*number);};
function flash(adDiv,adSrc,adid,w,h,t){
var trans=pars="";
if(t){
var trans = '<param name="wmode" value="transparent">';
var pars = 'wmode="transparent"';
}
var fhtml = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" name="'+adid+'" width="'+w+'" height="'+h+'" id="'+adid+'"><param name="movie" value="'+adSrc+'" /><param name="quality" value="high" />'+trans+'<embed src="'+adSrc+'" width="'+w+'" height="'+h+'" quality="high" '+pars+' pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" name="'+adid+'" id="'+adid+'"></embed></object>';
$(adDiv).innerHTML = fhtml;

var fw = $(adid).GetVariable("Stage.width")?$(adid).GetVariable("Stage.width"):$(adid).TGetProperty("_root",8);
var fh = $(adid).GetVariable("Stage.height")?$(adid).GetVariable("Stage.height"):$(adid).TGetProperty("_root",9);

if(w==undefined||w==false||h==false||h==undefined){
var fhtml = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" name="'+adid+'" width="'+fw+'" height="'+fh+'" id="'+adid+'"><param name="movie" value="'+adSrc+'" /><param name="quality" value="high" />'+trans+'<embed src="'+adSrc+'" width="'+fw+'" height="'+fh+'" quality="high" '+pars+' pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" name="'+adid+'" id="'+adid+'"></embed></object>';
$(adDiv).innerHTML = fhtml;
}
}