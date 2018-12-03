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

function myfun(){
    
  var x=document.getElementById("name").value;
  var mob=document.getElementById("email").value;
  var sub=document.getElementById("subject").value;
  var message=document.getElementById("message").value;
 
  var d=new Date();
  var t=new Date(d.toLocaleString());
  
  var phoneRGEX = /[789][0-9]{9}/;
  var r=confirm("Name : "+x+"\nMobile Number : "+mob);
  if(r==true){
  
  
  
db.collection("feedback").add({
    Name: x,
	Mobile: mob,
	subject: sub,
	message: message,
	
	date: t
	
    
})
.then(function(docRef) {
	alert("Thank You your Feedback is successfully register. ");
    console.log("Document written with ID: ", docRef.id);
	window.location.replace("contact.html");
	
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

  
  }