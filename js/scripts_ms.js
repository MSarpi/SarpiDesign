function formulario(){
	var screen = $('#loading-screen');
    configureLoadingScreen(screen);

	var gmail = document.getElementById('email').value;
	var nom = document.getElementById('name').value;
	var text = document.getElementById('textarea').value;
	var val = 0;
	var error = "";

	if (gmail == "") {
		val = 1;
		error += '<p style="margin: 0 0 0 5rem"><i style="color:red; margin-right: 10px;" class="fas fa-times"></i>Ingrese su <span style="color: #ff9065;">Correo</span></p>';
	}

	if (nom == "") {
		val = 1;
		error += '<p style="margin: 0 0 0 5rem"><i style="color:red; margin-right: 10px;" class="fas fa-times"></i>Ingrese su <span style="color: #ff9065;">Nombre</span> o <span style="color: #ff9065;">Empresa</span></p>';
	}

	if (text == "") {
		val = 1;
		error += '<p style="margin: 0 0 0 5rem"><i style="color:red; margin-right: 10px;" class="fas fa-times"></i>Ingrese un <span style="color: #ff9065;">Mensaje</span></p>';
	}

	if (val == 0) {
		var gmail = document.getElementById('email').value;
		var nom = document.getElementById('name').value;
		var text = document.getElementById('textarea').value;

		$.ajax({
			type: "POST",
			url: "https://formsubmit.io/send/670d39ef-8b75-43db-9fe1-e39e7a75f9d4",
			dataType: 'json',
			accepts: 'application/json',
			data: {
				Nombre: nom,
				Gmail: gmail,
				Informacion: text
			},
			success: function (res) {
				
			},
			error:function (erro) {
				$('#titulo_modal').html('<h5>Mensaje Enviado con exito</h5>');
				$('#body_modal').html('<p>Me pondre en contacto contigo en 24 a 48h!, muchas gracias.</p>');
				$('#modal_exito').modal('show');
			}
		});
	}else{
		//alert(JSON.stringify(error));
		$('#titulo_modal_header').html('<h5>Falta Rellenar Campos</h5>');
		$('#body_modal_header').html('<p>'+error+'</p>');
		$('#exampleModal').modal('show');
	}
}

function configureLoadingScreen(screen){
    $(document)
        .ajaxStart(function () {
            screen.fadeIn();
        })
        .ajaxStop(function () {
            screen.fadeOut();
        });
}

function reload(){
	location.reload(true);
}

$(document).ready(function(){
	$('#up').hide();
	$(window).scroll(function(){
		if ($(this).scrollTop()>100) {
			$('.up').fadeIn('1000');
		}else{
			$('.up').fadeOut('1000');
		}
	});

	$('.up').click(function () { 
		$('body, html').animate({
			scrollTop: 0
		})
		
	});
});