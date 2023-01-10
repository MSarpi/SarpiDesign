/*INICIO-EFECTO DE ESCRITURA*/
const maquina = new Typed('.maquina', {
    strings: [
		'<i class="habilidades">JavaScript</i>',
        '<i class="habilidades">HTML</i>',
		'<i class="habilidades">PHP</i>',
		'<i class="habilidades">Laravel</i>',
		'<i class="habilidades">MySql</i>',
        '<i class="habilidades">CSS</i>',
        '<i class="habilidades">Ilustración</i>',
        '<i class="habilidades">Wordpress</i>',
        '<i class="habilidades">Photoshop</i>',
		'<i class="habilidades">Git</i>',
    ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 45, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
/*FINAL-EFECTO DE ESCRITURA*/