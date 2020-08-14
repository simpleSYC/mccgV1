 /// imeto linko ,,,, ime na bizniso,,,  src slikica logo,,,, descripshen,,
var b0=["M COMCEPT GROUP COMPANY "," "," "," "];
var b1=["AQWOS "," "," "," "];
var b2=["CRISTALIS"," "," "," "];
var b3=["KVAT"," "," "," "];
var b4=["TANDES"," "," "," "];
var b5=["B BOSS"," "," "," "];
var b6=["ADDISON"," "," "," "];

 
var B=[b0,b1,b2,b3,b4,b5,b6];
var M_bp=document.getElementById('bizPARTNERS');
var M_ct=document.getElementById('contact');
var M_mb=document.getElementById('MINIblog');
var M_co=document.getElementById('ChekOrder');


var M_=document.getElementById('');
var M_=document.getElementById('');
var M_=document.getElementById('');

var txtURL=document.getElementById('LNKtxt');
var BIZnn=document.getElementById('BIZtab');

var BPT= document.getElementsByClassName("container")[0];// sea se mestat tie
for(i=0;i<BPT.getElementsByClassName("content").length;i++){
BIZnn.children[i].children[0].innerHTML=B[i][0];;/////// tuka fotki
BIZnn.children[i].children[0].href="#Bid_"+i;/////// tuka fotki


BPT.getElementsByClassName("content")[i].id="Bid_"+i;
BPT.getElementsByClassName("content")[i].children[0].innerHTML=B[i][0];//  biz imence
BPT.getElementsByClassName("content")[i].children[1].innerHTML=i+"dasdsad daa";// deskripcia
}



function gTX(a){txtURL.innerHTML=B[a][0];}

function om(a){a.style.display='block';}
function cm(a){a.parentElement.parentElement.parentElement.style.display='none';}

//////////////////////


document.getElementById("CEKEROT").click();
var myObj;
var orderiN; 

var OX;
var OXsuma;
var p0;
var p1;

var DECzgolemuvanje;
var DECbid;

var OSD;


var UBACENOdata;
var UBACENObestelungID;
var UBACENOprais; 
function showHint() {
UBACENOdata       =document.getElementById("txt0").value;
UBACENObestelungID=document.getElementById("txt1").value;
UBACENOprais      =document.getElementById("txt2").value;

codira();


orderiN=0;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   myObj = JSON.parse(this.responseText);


  }
};                   
xmlhttp.open("GET", "M%20Comcept_files/STATUS/status.txt", true);
xmlhttp.send();

for(x in myObj){orderiN=orderiN+1;

if(document.getElementById("STATUS").innerHTML.length>2){break;}
desifriranje(myObj,x)



}
}

var T12;

var Ubacenko;
var ODtamu;
var TesTer;
var TesTer1;
var TesTer2;
var TesTer3;

///                bid-pro-sts-tm
var NOVvirtuleno;//=[[],[],[],[]];  memorisko e ova
var NIVOdeco;// za sporeduvanje

function desifriranje(OBJEKTOT,icrementot){//OX   myObj[i]
	
	if(OBJEKTOT[icrementot][0]==UBACENOdata){
		
		ODtamu=OBJEKTOT[icrementot][1];
		OSD=(OXsuma%100);
		
		NIVOdeco=[[],[],[],[]];
		NOVvirtuleno=[[],[],[],[]];
		TesTer=[];
		TesTer1=[];
		TesTer2=[];
		TesTer3=[];
		for(x in ODtamu){ ///encriptirska funkcija e ova  zimanje informaci od tamu
			NOVvirtuleno[0].push(ODtamu[x]);
			
			}//NOVvirtuleno[0].shift();
		
		for(i=0;i<NOVvirtuleno[0].length;i++){
			NIVOdeco[0][i]=NOVvirtuleno[0][i]-OSD;
		
		NIVOdeco[0][i]=String.fromCharCode(NIVOdeco[0][i]);
		TesTer=TesTer+NIVOdeco[0][i];
		
		}
		
		
		
		
		
		
	//	if(OBJEKTOT[icrementot][1]==UBACENObestelungID){	
			if(TesTer==UBACENObestelungID){	
			
			ODtamu=OBJEKTOT[icrementot][2];
			
			for(x in ODtamu){ ///encriptirska funkcija e ova  zimanje informaci od tamu
			NOVvirtuleno[1].push(ODtamu[x]);
			
			}//NOVvirtuleno[1].shift();
			
			for(i=0;i<NOVvirtuleno[1].length;i++){
				NIVOdeco[1][i]=NOVvirtuleno[1][i]-OSD;
		
				NIVOdeco[1][i]=String.fromCharCode(NIVOdeco[1][i]);
				TesTer1=TesTer1+NIVOdeco[1][i];		
			}
			
			
			ODtamu=OBJEKTOT[icrementot][3];
			for(x in ODtamu){ ///encriptirska funkcija e ova  zimanje informaci od tamu
			NOVvirtuleno[2].push(ODtamu[x]);
			
			}//NOVvirtuleno[1].shift();
			
			for(i=0;i<NOVvirtuleno[2].length;i++){
				NIVOdeco[2][i]=NOVvirtuleno[2][i]-OSD;
		
				NIVOdeco[2][i]=String.fromCharCode(NIVOdeco[2][i]);
				TesTer2=TesTer2+NIVOdeco[2][i];		
			}
			
			
				ODtamu=OBJEKTOT[icrementot][4];
			for(x in ODtamu){ ///encriptirska funkcija e ova  zimanje informaci od tamu
			NOVvirtuleno[3].push(ODtamu[x]);
			
			}//NOVvirtuleno[1].shift();
			
			for(i=0;i<NOVvirtuleno[3].length;i++){
				NIVOdeco[3][i]=NOVvirtuleno[3][i]-OSD;
		
				NIVOdeco[3][i]=String.fromCharCode(NIVOdeco[3][i]);
				TesTer3=TesTer3+NIVOdeco[3][i];		
			}
			
			
				document.getElementById("REZLUTAT").innerHTML = "This Bestelung#ID : "+TesTer+" is in our database";
				document.getElementById("ARTIKLI").innerHTML = "ordered products:<br>"+TesTer1; 
				document.getElementById("STATUS").innerHTML = "status situation is: <br> "+TesTer2;
				document.getElementById("Pstatus").innerHTML = "<br>datum in my system: "+ TesTer3;


	   }
   
   }else{
    document.getElementById("REZLUTAT").innerHTML = "unexsist or/and not payed yet";
    document.getElementById("ARTIKLI").innerHTML = "";
    document.getElementById("STATUS").innerHTML = "";
    document.getElementById("Pstatus").innerHTML = "";}
   
}


///document.getElementById("demoS").innerHTML ="sumata vkupno e = "+ OXsuma;




var PP0; var PP1;
function codira (){DECbid="";OSD=0;
 // lokalni za parsiranej na menavaje na takvite  p0 i p1 za pharsint


document.getElementById("STATUS").innerHTML="";


OX=UBACENOdata+UBACENObestelungID+UBACENOprais;

var txtPTOST=UBACENOdata+UBACENObestelungID+UBACENOprais+"                             ";


OX=txtPTOST.slice(0,23);
	

 //sifrata
PP0=OX.slice(8,11);//za neparno
PP1=OX.slice(12,15);//za parno

p0=0;
p1=0;

for(i=0;i<3;i++){	
p0=parseInt(p0+PP0.charCodeAt(i));
p1=parseInt(p1+PP1.charCodeAt(i));
}

OXsuma=0;
for (i=0;i<OX.length;i++){
OXsuma=parseInt(OXsuma+OX.charCodeAt(i));}

}




