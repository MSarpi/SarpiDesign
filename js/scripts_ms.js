function formulario(){
	var gmail = document.getElementById('email').value;
	var nom = document.getElementById('name').value;
	var text = document.getElementById('textarea').value;
	var val = 0;
	var error = "";

	if (gmail == "") {
		val = 1;
		error += '<p style="margin: 0 0 0 5rem"><i style="color:red; margin-right: 10px;" class="fas fa-times"></i>Ingrese su <span style="color: #ff9065;">correo</span></p>';
	}

	if (nom == "") {
		val = 1;
		error += '<p style="margin: 0 0 0 5rem"><i style="color:red; margin-right: 10px;" class="fas fa-times"></i>Ingrese su <span style="color: #ff9065;">nombre</span> o <span style="color: #ff9065;">empresa</span></p>';
	}

	if (text == "") {
		val = 1;
		error += '<p style="margin: 0 0 0 5rem"><i style="color:red; margin-right: 10px;" class="fas fa-times"></i>Ingrese su <span style="color: #ff9065;">texto</span></p>';
	}

	if (val == 0) {
		alert("funciono");
		$('#titulo_modal_header').html('<h5>Mensaje Enviado</h5>');
		$('#body_modal_header').html('<p>Me pondre en contacto contigo de 24 a 48h!, muchas gracias.</p>');
		$('#exampleModal').modal('show');
		// $.ajax({
		// 	type: "POST",
		// 	url: "/enviar.php",
		// 	data: formData,
		// 	cache: false,
		// 	processData: false,
		// 	contentType: false,
		// 	success: function (res) {
		// 		alert("funciono");
		// 	},
		// 	error:function (erro) {
		// 		alert(JSON.stringify(erro));
		// 	}
		// });
	}else{
		alert(JSON.stringify(error));
		$('#titulo_modal_header').html('<h5>Falta Rellenar Campos</h5>');
		$('#body_modal_header').html('<p>'+error+'</p>');
		$('#exampleModal').modal('show');
	}
}