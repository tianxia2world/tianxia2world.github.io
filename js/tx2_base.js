




/*
     FILE ARCHIVED ON 14:14:39 Apr 23, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:06:32 Jun 17, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
function $(id){
	return document.getElementById(id);
}
function p(string){
	document.write(string);
}
//参数(前字符,总数,当前,打开class,关闭class,是否处理open状态)
function change_menu(str,total_num,now_num,open_className,close_className,not_chk_open){
	not_chk_open=(not_chk_open==null)?true:false;
	var obj_className=$(str+now_num).className;
	if(obj_className==open_className && not_chk_open){
		$(str+now_num).className=close_className;
	}
	else if(obj_className==close_className){
		
		$(str+now_num).className=open_className;
	}
}
function change_menu1(str,total_num,now_num,open_className,close_className,not_chk_open){
	not_chk_open=(not_chk_open==null)?true:false;
	var obj_className=$(str+now_num).className;
	if(obj_className==open_className && not_chk_open){
		$(str+now_num).className=close_className;
	}
	else if(obj_className==close_className){
		for(var i=1; i<=total_num;i++){
			$(str+i).className=close_className;
		}
		$(str+now_num).className=open_className;
	}
}
//change_obj_display
function change_obj_display(obj_id){
	var obj = $(obj_id);
	if(obj.style.display.indexOf("none")!=-1){
		obj.style.display = "block";
	}
	else{
		obj.style.display = "none";
	}
}
//页面最小宽度
var min_width = 985;
var max_width = 1196;
var cw = document.body.clientWidth;
if(cw > min_width){
	p('<style type="text/css">');
	p('<!--');
	p('#main_layout, #foot{width:100%}#head_content{ padding-right:'+ (max_width - min_width)/2 +'px}');
	if(cw > max_width) 	p('#main_layout{width:'+max_width+'px;}');	
	p('-->');
	p('</style>');	
}