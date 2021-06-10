function PrecioMetroCuadrado() {
	var lugarvivienda=document.getElementById("lugar");
	/*if (document.getElementById("ciudad").checked){
		document.getElementById("vivienda").innerText ="El precio por metro cuadrado es de 23€";
	}
	else if (document.getElementById("hortaleza").checked){
		document.getElementById("vivienda").innerText ="El precio por metro cuadrado es de 25€";
	}
	else if (document.getElementById("retiro").checked){
		document.getElementById("vivienda").innerText ="El precio por metro cuadrado es de 30€";
	}
	else {
		document.getElementById("vivienda").innerText ="El precio por metro cuadrado es de 20€";
	}*/
	document.getElementById("vivienda").innerText ="El precio por metro cuadrado es de "+ lugarvivienda.value + "€"; 
	PrecioAlquiler();
	
}

function PrecioAlquiler() {
	var lugarvivienda=document.getElementById("lugar");
	var precio;
	if (document.getElementById("50metros").checked){
		precio = 50*lugarvivienda.value;
	}
	else if (document.getElementById("70metros").checked){
		precio = 70*lugarvivienda.value;
	}
	else {
		precio = 100*lugarvivienda.value;
	}

	document.getElementById("alquiler").innerText ="El precio del alquiler es de "+ precio + "€";
	SubidaMejoras(precio);
}

function SubidaMejoras(precio) {
	var mejoravivienda=document.getElementById("mejora");
	var lugarvivienda=document.getElementById("lugar");
	var aumentos = 0;
	if (document.getElementById("mejora1").checked){
		aumentos = aumentos + 0.03;
	}
	if (document.getElementById("mejora2").checked){
		aumentos = aumentos + 0.03;
	}

	if (document.getElementById("mejora3").checked){
		aumentos = aumentos + 0.03;
	}
	document.getElementById("aumento").innerText ="El aumento de precio por las mejoras es de "+ precio*aumentos + "€";
	PrecioTotal(precio, aumentos);
}

function PrecioTotal(precio, aumentos){
	document.getElementById("total").innerText ="El precio total de la vivienda es de "+ ((precio*aumentos)+precio) + "€";
}

function FotoVivienda() {
	var fotovivienda = document.getElementById("lugar").value;
  	var miImagen = document.getElementById("imagen");
  	miImagen.src="imagenes/"+fotovivienda+".jpg";
}
