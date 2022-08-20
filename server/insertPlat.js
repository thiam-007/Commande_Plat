// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
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

const formulaire = document.getElementById('add-food-form');
formulaire.addEventListener('submit', (e) => sendFood(e));

function sendFood(e){
    e.preventDefault();
    var recName = document.getElementById('food-name').value;
    var cin = document.getElementById('user-cin').value;
    var recDesc = document.getElementById('food-desc').value;
    var recTown = document.getElementById('food-location').value;
    var recPhotoURL = document.getElementById('food-pic').value;
    console.log(recName,cin,recDesc,recTown,recPhotoURL);
    PostPlatDansDB(recName,cin,recDesc,recTown,recPhotoURL);  //
    formulaire.reset();
    window.alert("Plat ajouté à la base de donnée ! ");
}

function PostPlatDansDB(recName,cin,recDesc,recTown,recPhotoURL){
    set(ref(db,'food/'+cin),
    {
        recName : recName ,
        cin : cin,
        recDesc : recDesc ,
        recTown : recTown ,
        recPhotoURL : recPhotoURL ,
    }
    )
}