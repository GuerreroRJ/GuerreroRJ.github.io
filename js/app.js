var firebaseConfig = {
    apiKey: "AIzaSyD8nF_CZnmX6-NpTrefNwAxmo4Xj05JHyg",
    authDomain: "contactos-peruwat.firebaseapp.com",
    projectId: "contactos-peruwat",
    storageBucket: "contactos-peruwat.appspot.com",
    messagingSenderId: "1002738693837",
    appId: "1:1002738693837:web:70b3883b233050bd6adb84"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("infos");

//Listen for a submit
document.querySelector(".contact-form").addEventListener("submit",submitForm);

function submitForm(e){

    e.preventDefault();

     //Get input values
     let name = document.getElementById('nombre').value;
     let lastName = document.getElementById('apellido').value;
     let phone = document.getElementById('telefono').value;
     let email = document.getElementById('email').value;
     let message = document.getElementById('comentario').value;
    
    saveContactInfo(name,lastName,phone, email, message);

    
}

  // Save infos to Firebase
  function saveContactInfo(name,lastName,phone, email, message) {

    try{
      let newContactInfo = contactInfo.push();
  
      newContactInfo.set({
        name: name,
        email: email,
        lastName: lastName,
        phone: phone,
        message: message,
      });
    }catch(e){
        
    }
    
  }

