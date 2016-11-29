




/*
     FILE ARCHIVED ON 11:57:49 三月 10, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:01:09 六月 18, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
window.onload= function (){
	var img = $("art_text").getElementsByTagName("img");
	for(var i=0;i<img.length;i++){
		if(img[i].width<=200)
			img[i].style.border = "0";
	}
}