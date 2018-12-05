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




function assistantLogin(){
	
	
	var user=document.getElementById("assistant_username").value;
	var password=document.getElementById("assistant_password").value;
	
	
	
	
	var phoneRGEX = /[789][0-9]{9}/;
	
	if(phoneRGEX.test(user) && user.length==10){
	db.collection("users").where("Mobile","==",user).where("password","==",password)
    .get()
    .then(function(querySnapshot) {
		if(querySnapshot.empty){
			alert("Please enter valid Details ");
		}
		else{
        querySnapshot.forEach(function(doc) {
				
			
			var mob=doc.data().Mobile;
			var gender=doc.data().gender;
				var name=doc.data().Name;
			var pass=doc.data().password;
			
			
			
			if(mob==user && pass==password ){
				
				var name=doc.data().Name;
			localStorage.setItem( 'name', name );
			localStorage.setItem( 'gender', gender );
		
				location.replace("AssistantDashboard.html");
			}
			
				
	});
		}
	}).catch(function(error) {
        alert("Please enter valid Details ");
    });
	}
	else{
		alert("Enter Valid Username");
	}
	
}








function login(){
	
	var x = localStorage['name'];
	
	var gender = localStorage['gender'];
	if(typeof(x)=="undefined"){
	location.replace("index.html");
	}
else{
	var head=document.getElementById("assistant_heading");
	if(gender=="male"){
		head.innerHTML="Welcome Mr. "+x;
	}
	else{
		head.innerHTML="Welcome Ms. "+x;
	}
	
}	
				
				
			}
	
	



function logout(){
	
	localStorage.removeItem( 'name' );
	localStorage.removeItem( 'gender' );
	
	location.replace("index.html");

}




