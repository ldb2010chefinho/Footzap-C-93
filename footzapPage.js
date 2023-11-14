//LINKS FIREBASE
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
roomName = localStorage.getItem("roomName");

function send(){
    msg = document.getElementById("mensagem");
    firebase.database().ref(roomName).push({
    name:userName,
    message:msg,
    like:0,
    });
    document.getElementById("mensagem").value="";
};

//////////\////////\////////////////////\/////////////\////////////////\//////////////\//////////////\////////////////////
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;

//////////////////////////////////////////////////////////////////////////////////////////////

//Início do código
console.log(firebaseMessageId);
console.log(messageData);

nome=messageData["name"];
message=messageData["message"];
like=messageData["like"];


nameWithTag= "<h4>"+nome+"<img class='user_tick' src='tick.png'> </h4>";
messageWithTag= "<h4 class='message_h4'>"+message+"</h4>";
likeButton= "<button class='btn btn-warning' id="+firebaseMessageId+"value="+like+" onclick='updateLike()'>";spanWithTag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+" </span> </button><hr>";
row= nameWithTag+messageWithTag+likeButton+spanWithTag;
document.getElementById("output").innerHTML+=row;


//Fim do código
      } });  }); 
    
    }
    function updateLike(messageId){
      console.log("botão like pressionado - " + messageId);
       button_id = messageId; 
       likes = document.getElementById(button_id).value;  
        updateLike= Number(likes)+1;
        firebase.database().ref(roomName).child(messageId).update({
          like:updateLike
        })
    }

    function logout() 
    {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location ="index.html";
    };
        
getData();
