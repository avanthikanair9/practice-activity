
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDDeZ_XLauRZWKrh9aE_hVud3nLKwI5i_k",
    authDomain: "kwitter-44011.firebaseapp.com",
    databaseURL: "https://kwitter-44011-default-rtdb.firebaseio.com",
    projectId: "kwitter-44011",
    storageBucket: "kwitter-44011.appspot.com",
    messagingSenderId: "309215219518",
    appId: "1:309215219518:web:8f44413f89f02c9a85a66f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}
//explaination of line - 17 and 18
//firebase - is used to set the reference for adding data to the database.
//database() - means we want to add data to the database.
//ref(“/”) - ref() means the reference, where we want to add a user name in the database. ○ “/” - this means we want to add the user name in the root as the main folder.
//○ child(user_name) - child() function is used to give the name to the main folder. user_name is the name of the main folder.
//update - is the firebase function used to update the database with the values.
//-The main folder, user_name, alone can’t be added, so we need to add some values.
//-purpose is the key word for the value “adding user”. ■ You can give any value you want. As the purpose of this activity was to add users that’s why we have given the value as “adding user”.

