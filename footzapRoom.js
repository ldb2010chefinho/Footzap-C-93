
//ADICIONE SEUS LINKS FIREBASE

const firebaseConfig = {

  apiKey: "AIzaSyDVYZYob2PDLbSzYxCywaHeLQ0VHUKy-LU",

  authDomain: "footzap-77677.firebaseapp.com",

  databaseURL: "https://footzap-77677-default-rtdb.firebaseio.com",

  projectId: "footzap-77677",

  storageBucket: "footzap-77677.appspot.com",

  messagingSenderId: "430381072767",

  appId: "1:430381072767:web:a3b766fe481cd45af35a4a"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "footzapPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "footzapPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
