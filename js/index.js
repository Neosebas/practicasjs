let registro = prompt ("¿Estas Registrado?, contesta si o no");
let mayorEdad = parseInt (prompt ("¿Que edad tienes?"));

if (registro === "si" && mayorEdad >= 18) {
    alert ("Bienvenido");
} else {
    alert ("Anda pa alla bobo");
}