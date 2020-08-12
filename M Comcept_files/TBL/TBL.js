var itmL = document.getElementById("PST");var PSTn;//zivi elemntski post od drugo papka da se onade

function rcl(){PSTn=TBL.length;
wrt(PSTn);
for(i=PSTn;i<itmL.children.length-2;i=i++){itmL.children[i].remove();}}

//<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 item"><div class="caption"><div class="star center-block"><span class="h3"></span><span></span><span></span></div><div class="image"><img src=""><div class="title"><h2><span><span/><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></h2></div></div><div class="textContent"><p class="lead"></p></div></div></div>  

function wrt(a){for(i=0;i<a;i++){
itmL.children[i].children[0].children[0].children[0].innerHTML=TBL[i][0][0];//15
itmL.children[i].children[0].children[0].children[1].innerHTML=TBL[i][0][1];// jan
itmL.children[i].children[0].children[0].children[2].innerHTML=TBL[i][0][2];// 2020
itmL.children[i].children[0].children[1].children[0].id="slikica"+i;// src link  ke se redat spored post1,jpg ,, post2.jpg
itmL.children[i].children[0].children[1].children[1].children[0].children[0].innerHTML=TBL[i][1]; // naslovna rubriak
itmL.children[i].children[0].children[2].children[0].innerHTML=TBL[i][2];// info txt
}}

