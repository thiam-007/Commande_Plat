// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase,ref,onValue} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyDYJmPeDgCWCYa5-bM4uXAXf7dH5AW-XQA",
    authDomain: "projet1-thiam.firebaseapp.com",
    databaseURL: "https://projet1-thiam-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "projet1-thiam",
    storageBucket: "projet1-thiam.appspot.com",
    messagingSenderId: "825173005549",
    appId: "1:825173005549:web:b8252e46873705e59868e4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


function getPlats(){
    const allPlates = ref(db, 'food/');
    onValue(allPlates,(snapshot)=>{
        const data = snapshot.val();
        console.log(data);
        var keys = Object.keys(data)
        console.log("KEYS ===> : ", keys);
        for(let i = 0 ; i < keys.length ; i++){
            var currentElement = keys[i];
            var recName = data[currentElement].recName;
            var recDesc = data[currentElement].recDesc;
            var recTown = data[currentElement].recTown;
            var photo = data[currentElement].recPhotoURL;
            console.log(recName, recDesc, recTown,photo);
            var platHTML = document.createElement("div");
            platHTML.innerHTML = 
            "<div class='card mb-3'>"+
            "<img class='card-imd-top foodPic' src='"+photo+"' />"+
            "<div class='card-body'>"+
            "<h1 class='card-title'>"+recName+"</h1>"+
            "<p class='card-text'>"+recDesc+"</p>"+
            "<p class='card-text'>"+recTown+"</p>"+
            "</div>"+
            "</div>";
            document.getElementById("Allrecieps").appendChild(platHTML);
        }
        
    })
}

getPlats();