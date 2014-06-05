		/* 	
			Pedro Gonçalves 
			ispg2992@ispgaya.pt
			pedro.goncalves2k@gmail.com 
			@pjgoncalves 
		*/

	if (typeof jQuery == 'undefined') {  
	   alert("Para conseguir executar esta página tem de estar connetado à internet, pf verifique a sua conexão e recarregue a página");
	} 
	else {
		jQuery(function(){

			/*	each index represents the value of a segment
				segments  = [a,b,c,d,e,f,g];
			*/
		var segments = ["0", "0", "0", "0", "0", "0", "0"];

			$( ".a, .b, .c, .d, .e, .f, .g" ).click(function() {
					$( this ).toggleClass( "on" );

					if ($('#a').hasClass("on")) {
							segments[0]='1';
					} else segments[0]='0';
					if ($('#b').hasClass("on")) {
							segments[1]='1';
					} else segments[1]='0';;
					if ($('#c').hasClass("on")) {
							segments[2]='1';
					} else segments[2]='0';;
					if ($('#d').hasClass("on")) {
							segments[3]='1';
					} else segments[3]='0';
					if ($('#e').hasClass("on")) {
							segments[4]='1';
					} else segments[4]='0';
					if ($('#f').hasClass("on")) {
							segments[5]='1';
					} else segments[5]='0';
					if ($('#g').hasClass("on")) {
							segments[6]='1';
					} else segments[6]='0';

					$('#output').replaceWith('<h2 id="output">'+ segments.join().replace(/\,/g,'') + "</h2>");
			});
			
		});
	}
