
var firebaseConfig = {
      apiKey: "AIzaSyBRj9R8yEfwKPLZpBwWJILTbiSNgMZPl3s",
      authDomain: "kwitter-e446d.firebaseapp.com",
      databaseURL: "https://kwitter-e446d-default-rtdb.firebaseio.com",
      projectId: "kwitter-e446d",
      storageBucket: "kwitter-e446d.appspot.com",
      messagingSenderId: "748250538837",
      appId: "1:748250538837:web:4ebff8c92dfd2608d685dc"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name;

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();
function redirectToRoomName()
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}