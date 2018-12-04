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



function doctorLogin(){
	
	
	var user=document.getElementById("doctor_username").value;
	var password=document.getElementById("doctor_password").value;
	
	var phoneRGEX = /[789][0-9]{9}/;
	
	if(phoneRGEX.test(user) && user.length==10){
	db.collection("doctor").where("mobile","==",user).where("password","==",password)
    .get()
    .then(function(querySnapshot) {
		if(querySnapshot.empty){
			alert("Please enter valid Details ");
		}
		else{
			querySnapshot.forEach(function(doc) {
				
			
			var mob=doc.data().mobile;
			var gender=doc.data().gender;
			var name=doc.data().Name;
			var pass=doc.data().password;
			
			
			
			if(mob==user && pass==password ){
				
				
				var name=doc.data().Name;
				localStorage.setItem( 'dname', name );
			localStorage.setItem( 'dgender', gender );
			localStorage.setItem( 'dmobile', mob );
			
			
			
				location.replace("index3.html");
		}
		
			
				
	});
		}
	})
	
	.catch(function(error) {
        alert("Please enter valid Details ");
    });
	}
	else{
		alert("Enter Valid Username");
	}
	
	
	
}



function reg(){
	
var x=document.getElementById("rname").value;
  var mob=document.getElementById("rmob").value;
  var pass=document.getElementById("rpass").value;
  var cpass=document.getElementById("rcpass").value;
  
  var gen=document.getElementById("gender").value;
  if(pass!=cpass){
	  alert("Please Enter matched password");
  }
  else{
  
  var phoneRGEX = /[789][0-9]{9}/;
  var r=confirm("Name : "+x+"\nMobile Number : "+mob);
  if(r==true){
  if(phoneRGEX.test(mob) && mob.length==10){
  
db.collection("users").add({
    Name: x,
	Mobile: mob,
	Password: String(pass),
	gender: gen
	
    
})
.then(function(docRef) {
	alert("Thank You User Register Successfully ");
    console.log("Document written with ID: ", docRef.id);
	window.location.replace("index3.html");
	
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
}
