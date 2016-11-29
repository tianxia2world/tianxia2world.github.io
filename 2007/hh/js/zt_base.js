




/*
     FILE ARCHIVED ON 14:37:26 ?? 20, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:29:27 ?? 18, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
function p(string){document.write(string);}
//页面最小宽度
var min_width = 1014;
var min_height = 750;
var ch = document.body.clientHeight;
var cw = document.body.clientWidth;
p('<style type="text/css">');
p('<!--');
if(ch > min_height) p('#main{margin-top:'+ (ch-min_height)/2 +'px}');
if(cw > min_width) p('#main{width:100%;}');
p('-->');
p('</style>');	
