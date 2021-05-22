
firebase.initializeApp({
  
     apiKey: "AIzaSyDas9f_JWg4cbwC6oHwnEdTO3nXTj8UTfw",
    authDomain: "micv-1f9c5.firebaseapp.com",
    projectId: "micv-1f9c5",
});
var db = firebase.firestore();
   
 
//Agregar documentos
function guardar(){
     var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    
      var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;
    
    db.collection("pedidos").add({
         email: email,
          nombre: nombre,
          asunto: asunto,
       mensaje: mensaje 
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        prompt("GRACIAS por contactarme, le estarè respondiendo en la brevedad.");
            document.getElementById('nombre').value = '';
            document.getElementById('email').value = ''; 
            document.getElementById('asunto').value = '';
            document.getElementById('mensaje').value = ''; 
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
