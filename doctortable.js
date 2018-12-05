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




document.getElementById("goDashboard").onclick = function() {
	history.go(-(history.length - 1));
    location.replace("index3.html");
	return false;
  };

 document.getElementById("patientLst").onclick = function() {
	history.go(-(history.length - 1));
    location.replace("table.html");
	return false;
  };

document.getElementById("patientLst1").onclick = function() {
	history.go(-(history.length - 1));
    location.replace("table.html");
	return false;
  };
  
  document.getElementById("goDashboard1").onclick = function() {
	history.go(-(history.length - 1));
    location.replace("index3.html");
	return false;
  };

  
  
  function last7(){
	var i=0,j=0;
	
	var y=document.getElementById("pdtab");
	var head=document.getElementById("head");
	head.style.visibility="hidden";
	y.style.display="none";
	var t1=document.getElementById("pdtab1");
	t1.style.visibility="visible";
	while(t1.rows.length > 0) {
		t1.deleteRow(0);
	}
	
	
	var todayweek = getWeekNumber(new Date());
	
	
	
	var d = new Date();
  t1.innerHTML="<tr style=background:#2bc9ff><th>Date</th><th>Name</th><th>Mobile</th><th>Shift</th></tr>";
  db.collection("patient").orderBy("time")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
			var lastweek=getWeekNumber(doc.data().date);
            var date=doc.data().date.getDate();
				var month=doc.data().date.getMonth();
				var year=doc.data().date.getFullYear();
				if(todayweek[1]-lastweek[1]==0 || todayweek[1]-lastweek[1]==1){
					
				if( doc.data().Status==0){
					
					i++;
				t1.innerHTML+="<tr style=background:#324DFF;color:white><td>"+date+"/"+month+"/"+year+"</td><td>"+doc.data().Name+"</td><td>"+doc.data().Mobile+"</td><td >"+doc.data().shift+"</td></tr>";
				}
				else if( doc.data().Status==1){
					j++;
				t1.innerHTML+="<tr style=background:#3AFF2D;><td>"+date+"/"+month+"/"+year+"</td><td>"+doc.data().Name+"</td><td>"+doc.data().Mobile+"</td><td >"+doc.data().shift+"</td></tr>";
				}
				
				

                }
				head.innerHTML="Patient Status: &nbsp;&nbsp;&nbsp;&nbsp;Absent "+i+"&nbsp;&nbsp;"+"Present "+j;
				head.style.visibility="visible";
				
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
	
	
	
  }
	

/*end last seven*/
  
  
function myFunction(){
	var y=document.getElementById("pdtab");
	
	var head=document.getElementById("head");
	head.style.visibility="hidden";
	y.style.display="none";
	var t1=document.getElementById("pdtab1");
	t1.style.visibility="visible";
	while(t1.rows.length > 0) {
		t1.deleteRow(0);
	}
	var name=document.getElementById("search").value.toLowerCase();
	if(name==""){
		alert("Enter Patient Name");
		location.replace("AssistantDashboard.html");
	}
	var todayweek = getWeekNumber(new Date());
	
	
	
	var d = new Date();
  t1.innerHTML="<tr style=background:#2bc9ff><th>Date</th><th>Name</th><th>Mobile</th><th>Shift</th></tr>";
  db.collection("patient").orderBy("time")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
			var lastweek=getWeekNumber(doc.data().date);
            var date=doc.data().date.getDate();
				var month=doc.data().date.getMonth();
				var year=doc.data().date.getFullYear();
				if(todayweek[1]-lastweek[1]==0 || todayweek[1]-lastweek[1]==1){
					
				if(name==doc.data().Name&& doc.data().Status==0){
					
					
				t1.innerHTML+="<tr style=background:#324DFF;color:white><td>"+date+"/"+month+"/"+year+"</td><td>"+doc.data().Name+"</td><td>"+doc.data().Mobile+"</td><td >"+doc.data().shift+"</td></tr>";
				}
				else if(name==doc.data().Name&& doc.data().Status==1){
					
				t1.innerHTML+="<tr style=background:#3AFF2D;><td>"+date+"/"+month+"/"+year+"</td><td>"+doc.data().Name+"</td><td>"+doc.data().Mobile+"</td><td >"+doc.data().shift+"</td></tr>";
				}
				
				

                }
				
				
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }
  
  function doctorDeleteAssistant(){
	  var y=document.getElementById("pdeletetab");
	  var i1=1;
	  db.collection("users")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
			
            var name=doc.data().Name;
			var mob=doc.data().mobile;
			y.innerHTML+="<tr style=background:#0091FF;color:white><td>"+i1+++"</td><td>"+name+"</td><td>"+mob+"</td><td><button style='padding: 3px 35px;font-size: 24px;text-align: center;cursor: pointer;outline: none;color: #fff;background-color: #4CAF50;border: none;border-radius: 15px;'>Delete</button></td></tr>";
  
   });
	
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }
  
  
  function addRowHandlers1() {
  var table = document.getElementById("pdeletetab");

  var rows = table.getElementsByTagName("tr");
  for (i = 0; i < rows.length; i++) {
    var currentRow = table.rows[i];
    var createClickHandler = function(row) {
      return function() {
		  var cell = row.getElementsByTagName("td")[0];
		  var id = cell.innerHTML;
		  var c = row.getElementsByTagName("td")[1];
		  var idn = c.innerHTML;
		  var ccc = row.getElementsByTagName("td")[2];
		  var idnn = ccc.innerHTML;
		  var status123 = row.getElementsByTagName("td")[3];
		  var status123 = status123.innerHTML;
		  
		  rowvalue=id;
		if (confirm("Serial Number : " + id+"  "+idn+"  "+idnn)) {
        
		
		  
	db.collection("patient").where("Name","==",idn).where("Mobile","==",idnn)
    .delete()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            alert("Assistant details are Del");
		
    
})

})
	
	
	for(i=0;i<4;i++){
	row.getElementsByTagName("td")[i].style.background = "#3AFF2D";
	}
	
	row.getElementsByTagName("td")[3].innerHTML = "Success"
	
    } 
	
		  
      };
    };
    currentRow.onclick = createClickHandler(currentRow);
  }
}
  
  
  
function doctorLoginData(){
	var docName = localStorage['dname'];
	var dmob = localStorage['dmobile'];
	var docGender = localStorage['dgender'];
	if(typeof(docName)!="undefined"){
	var n=document.getElementById("docName");
	var n1=document.getElementById("docName1");
	
	var m=document.getElementById("docMobile");
	
	n.innerHTML="Dr. "+docName;
	n1.innerHTML="Dr. "+docName;
	
	m.innerHTML=dmob;
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


function addRowHandlers() {
  var table = document.getElementById("pdtab");

  var rows = table.getElementsByTagName("tr");
  for (i = 0; i < rows.length; i++) {
    var currentRow = table.rows[i];
    var createClickHandler = function(row) {
      return function() {
		  var cell = row.getElementsByTagName("td")[0];
		  var id = cell.innerHTML;
		  var c = row.getElementsByTagName("td")[1];
		  var idn = c.innerHTML;
		  var ccc = row.getElementsByTagName("td")[2];
		  var idnn = ccc.innerHTML;
		  var status123 = row.getElementsByTagName("td")[3];
		  var status123 = status123.innerHTML;
		  localStorage.setItem( 'valueupadte', id );
		  rowvalue=id;
		if (confirm("Serial Number : " + id+"  "+idn+"  "+idnn)) {
        
		
		  
	db.collection("patient").where("Name","==",idn).where("Mobile","==",idnn)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            var da=doc.id;
			
		
		db.collection("patient").doc(da).update({
		Status: 1,
		id: id
		
    
})

})
	})
	
	for(i=0;i<4;i++){
	row.getElementsByTagName("td")[i].style.background = "#3AFF2D";
	}
	
	row.getElementsByTagName("td")[3].innerHTML = "Success"
	
    } 
	
		  
      };
    };
    currentRow.onclick = createClickHandler(currentRow);
  }
}


var pdtable=document.getElementById("pdtab");
var d = new Date();
var i1=1;
db.collection("patient").orderBy("time")
    .onSnapshot(function(querySnapshot) {
        querySnapshot.docChanges().forEach(function(change) {
            if (change.type === "added"  ) {
				var sft=change.doc.data().shift;
				
				var status=change.doc.data().Status;
				var date=change.doc.data().date.getDate();
				var month=change.doc.data().date.getMonth();
				var year=change.doc.data().date.getFullYear();
				var tm=d.getHours();
				


				if(date==d.getDate() && month==d.getMonth() && year==d.getFullYear() && sft=="morning" && tm<=13 ){
				if(status==0){
				pdtable.innerHTML+="<tr style=background:#0091FF;color:white><td>"+i1+++"</td><td>"+change.doc.data().Name+"</td><td>"+change.doc.data().Mobile+"</td><td><button style='padding: 3px 35px;font-size: 24px;text-align: center;cursor: pointer;outline: none;color: #fff;background-color: #4CAF50;border: none;border-radius: 15px;'>Click</button></td></tr>";
				
					}
					else{
						pdtable.innerHTML+="<tr style=background:#8AFF86;><td>"+i1+++"</td><td>"+change.doc.data().Name+"</td><td>"+change.doc.data().Mobile+"</td><td>Success</td></tr>";
				
				
				
					}
				
                }
				
				if(date==d.getDate() && month==d.getMonth() && year==d.getFullYear() && sft=="evening" && tm>13 ){
					if(status==0){
				pdtable.innerHTML+="<tr style=background:#3577FF;color:red><td>"+i1+++"</td><td>"+change.doc.data().Name+"</td><td>"+change.doc.data().Mobile+"</td><td><button style='padding: 3px 35px;font-size: 24px;text-align: center;cursor: pointer;outline: none;color: #fff;background-color: #4CAF50;border: none;border-radius: 15px;'>Click</button></td></tr>";
				
					}
					else{
						pdtable.innerHTML+="<tr style=background:#8AFF86;><td>"+i1+++"</td><td>"+change.doc.data().Name+"</td><td>"+change.doc.data().Mobile+"</td><td>Success</td></tr>";
				
				
					}
                }
				
			}
			
			if ( change.type === "modified") {
				
				var id=change.doc.data().id;
				var sft=change.doc.data().shift;
				var status=change.doc.data().Status;
				var date=change.doc.data().date.getDate();
				var month=change.doc.data().date.getMonth();
				var year=change.doc.data().date.getFullYear();
				var tm=d.getHours();
				
				if(date==d.getDate() && month==d.getMonth() && year==d.getFullYear() && sft=="morning" && tm<=13 ){
				if(status==1){
					pdtable.deleteRow(id);
				var row123=pdtable.insertRow(id);
				row123.style.background = "#8AFF86";
				row123.innerHTML+="<tr style=background:#8AFF86;><td>"+id+"</td><td>"+change.doc.data().Name+"</td><td>"+change.doc.data().Mobile+"</td><td>Success</td></tr>";
				
					}
					
				
                }
				
				if(date==d.getDate() && month==d.getMonth() && year==d.getFullYear() && sft=="evening" && tm>13 ){
					if(status==1){
						pdtable.deleteRow(id);
				var row123=pdtable.insertRow(id);
				row123.style.background = "#8AFF86";
				row123.innerHTML+="<tr style=background:#8AFF86;><td>"+id+"</td><td>"+change.doc.data().Name+"</td><td>"+change.doc.data().Mobile+"</td><td>Success</td></tr>";
				
				
				xmarq.innerHTML="<p>Current Patient: "+id+"</p>";

					}
					
                }
				
				
            }
			
				});
	});
	
