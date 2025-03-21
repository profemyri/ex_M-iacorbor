let precioTotal= 0;


  document.getElementById("cambiar-fondo").onclick = function() {
    document.body.classList.toggle("oscuro");
};

document.getElementById("ia").oninput = function(){
    document.getElementById("cuenta").textContent = this.value.length;
};

document.getElementById("formulario").onsubmit = function(event) { 
    if(document.getElementById("nombre").value == ""){
        alert("Algunos campos son incorrectos o estan incompletos.");
        event.preventDefault();
        return;
    }
    if(document.getElementById("email").value == ""){
        alert("Algunos campos son incorrectos o estan incompletos.");
        event.preventDefault();
        return;
    }
    if(document.getElementById("telefono").value == ""){
        alert("Algunos campos son incorrectos o estan incompletos.");
        event.preventDefault();
        return;
    }
    if(document.getElementById("direccion").value == "" || document.getElementById("direccion").value <=18){
        alert("Algunos campos son incorrectos o estan incompletos.");
        event.preventDefault();
        return;
    }
    if (!confirm("Confirmar")) {
        alert("¿Seguro que quieres confirmar y enviar tu pedido ahora?");
        event.preventDefault();
        return;
    }
    alert("¡Pedido enviado!"); 
};

document.getElementById("calamar").onchange = function(){
    if(document.getElementById("calamar").checked){
        precioTotal += document.getElementById("calamar").value;
    document.getElementById("precio").textContent = precioTotal;
    }}
document.getElementById("adobo").onchange = function(){
    if(document.getElementById("adobo").checked){
        precioTotal += document.getElementById("adobo").value;
    document.getElementById("precio").textContent = precioTotal;
}} 
document.getElementById("pescado").onchange = function(){
    if(document.getElementById("pescado").checked){
        precioTotal += document.getElementById("pescado").value;
    document.getElementById("precio").textContent = precioTotal;
}}  






