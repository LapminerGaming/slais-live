const firebaseConfig = {
    apiKey: "AIzaSyDfWh719VKGf9MWtnk59B9SYJXdm3pHTQY",
    authDomain: "slais-database.firebaseapp.com",
    projectId: "slais-database",
    storageBucket: "slais-database.appspot.com",
    databaseURL: "https://slais-database-default-rtdb.firebaseio.com/",
    messagingSenderId: "772984610918",
    appId: "1:772984610918:web:8da9c8292915f8e1344da7"
  };
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
