var config = {
    apiKey: "AIzaSyChMzQN74af6PKYlEpBWsinXgqvonmtLzA",
    authDomain: "miniproject-6e84e.firebaseapp.com",
    databaseURL: "https://miniproject-6e84e.firebaseio.com",
    projectId: "miniproject-6e84e",
    storageBucket: "miniproject-6e84e.appspot.com",
    messagingSenderId: "310817447988"
  };
  firebase.initializeApp(config);
var db=firebase.firestore();



function doctoLoginData(){
	var docName = localStorage['dname'];
	var dmob = localStorage['dmobile'];
	var docGender = localStorage['dgender'];
	
	if(typeof(docName)!="undefined"){
	var head=document.getElementById("docHead");
	var n=document.getElementById("doctorName");
	var n1=document.getElementById("doctorName1");
	var n2=document.getElementById("doctorName2");
	var n3=document.getElementById("doctorName3");
	var m=document.getElementById("doctorMobile");
	var m2=document.getElementById("doctorMobile2");
	if(docGender=="male"){
		head.innerHTML="Welcome Mr. "+docName;
		
	}
	else{
		head.innerHTML="Welcome Ms. "+docName;
	}
	n.innerHTML="Dr. "+docName;
	n1.innerHTML="Dr. "+docName;
	n2.innerHTML="Dr. "+docName;
	n3.innerHTML="Dr. "+docName;
	m.innerHTML=dmob;
	m2.innerHTML=dmob;
	
	}
	else{
		location.replace("index.html");
	}
}
function doctorLogout(){
	localStorage.removeItem( 'dname' );
	localStorage.removeItem( 'dgender' );
	localStorage.removeItem( 'dmobile' );
	
	location.replace("index.html");

}


Date.prototype.getWeek = function (dowOffset) {
/*getWeek() was developed by Nick Baicoianu at MeanFreePath: http://www.meanfreepath.com */

    dowOffset = typeof(dowOffset) == 'int' ? dowOffset : 0; //default dowOffset to zero
    var newYear = new Date(this.getFullYear(),0,1);
    var day = newYear.getDay() - dowOffset; //the day of week the year begins on
    day = (day >= 0 ? day : day + 7);
    var daynum = Math.floor((this.getTime() - newYear.getTime() - 
    (this.getTimezoneOffset()-newYear.getTimezoneOffset())*60000)/86400000) + 1;
    var weeknum;
    //if the year starts before the middle of a week
    if(day < 4) {
        weeknum = Math.floor((daynum+day-1)/7) + 1;
        if(weeknum > 52) {
            nYear = new Date(this.getFullYear() + 1,0,1);
            nday = nYear.getDay() - dowOffset;
            nday = nday >= 0 ? nday : nday + 7;
            /*if the next year starts before the middle of
              the week, it is week #1 of that year*/
            weeknum = nday < 4 ? 1 : 53;
        }
    }
    else {
        weeknum = Math.floor((daynum+day-1)/7);
    }
    return weeknum;
};

document.getElementById("tableTag").onclick = function() {
	history.go(-(history.length - 1));
    location.replace("table.html");
	return false;
  };
  document.getElementById("tableTag1").onclick = function() {
	history.go(-(history.length - 1));
    location.replace("table.html");
	return false;
  };

function patientbydoctor(){
    
  var x=document.getElementById("name").value;
  var mob=document.getElementById("mob").value;
  var d=new Date();
  var t=new Date(d.toLocaleString());
  var phoneRGEX = /[6789][0-9]{9}/;
  var r=confirm("Name : "+x+"\nMobile Number : "+mob);
  if(r==true){
  if(phoneRGEX.test(mob) && mob.length==10){
  var sft = document.querySelector('input[name="shift"]:checked').value;
db.collection("patient").add({
    Name: x,
	Mobile: mob,
	time: t,
	Status: 0,
	shift: sft,
	date: t,
	id: 0
	
    
})
.then(function(docRef) {
	alert("Thank You, your Appointment is successfully register. ");
    console.log("Document written with ID: ", docRef.id);
	window.location.replace("table.html");
	
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

  }
  else{
	  alert("Enter valid Mobile Number");
  }
  }
  }











var patientapp=document.getElementById("patientAppointment");
var pmonth=document.getElementById("pmonth");
var thisweek=document.getElementById("pweek");
var earning=document.getElementById("dearning");
var dtable=document.getElementById("dtab");

var i=0,j=0,k=0,p=0,q=0,r=0,price1=0,price2=0,price3=0,i1=0,im=0,iw=0;
var d = new Date();
var weeknum=d.getWeek();

db.collection("patient").orderBy("time")
    .onSnapshot(function(querySnapshot) {
        querySnapshot.docChanges().forEach(function(change) {
            if (change.type === "added" || change.type === "modified" ) {
				var sft=change.doc.data().shift;
				var status=change.doc.data().Status;
				var date=change.doc.data().date.getDate();
				var month=change.doc.data().date.getMonth();
				var year=change.doc.data().date.getFullYear();
				var tm=d.getHours();
				
				if( month==d.getMonth() && year==d.getFullYear()  ){
					i++;
					if(status==1){
						im++;
					}
					
                }
				if(  year==d.getFullYear() && change.doc.data().date.getWeek()==weeknum ){
					k++;
					if(status==1){
						iw++;
					}
					
                }
				if( date==d.getDate() && month==d.getMonth() && year==d.getFullYear()  ){
					p++;
					price2=p*300;
					
                }
				
				j++;
				
				if(status==1){
					
					i1++;
					pmonth.innerHTML="<span class=big>"+im+"/"+i+"</span>";
					thisweek.innerHTML="<span class=big>"+iw+"/"+k+"</span>";
					patientapp.innerHTML="<span class=big>"+i1+"/"+j+"</span>";
				var price1=i1*300;
				earning.innerHTML="<span class=big>&#x20b9; "+price1+"</span>";
								dtable.innerHTML="<tbody><tr><td>1. Today</td><td>&#x20b9; "+price2+"</td></tr> <tr><td>2. This Week</td><td>&#x20b9; "+k*300+"</td></tr><tr><td>3. This Month</td><td>&#x20b9; "+i*300+"</td></tr> </tbody>";
				}

				
				
				
				
            }
			
			
			
			
			
			
			
			
			
			
			
	});
	});
	
	
	 
	 
	 
