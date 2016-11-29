var minWidth = 1004;
var minHeight = 773;
var cw = document.body.clientWidth ;
var ch = document.body.clientHeight;
if(cw>minWidth) {document.write("<style>#head,#copyright{width:100%;}</style>");}
if(ch>minHeight) {document.write("<style>#main{ margin:13px auto "+(ch-minHeight)+"px auto;}</style>");}