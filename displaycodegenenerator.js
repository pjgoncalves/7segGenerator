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

			$( ".seg" ).click(function() { 
					$(this).toggleClass( "on" );
					var tempid = $(this).attr('id');
					if ($(this).hasClass("on")){ // little help from @hfalucas
						segments[tempid]='1'
					}else segments[tempid]='0' ;
						

					$('#output').replaceWith('<h2 id="output">'+ segments.join().replace(/\,/g,'') + "</h2>");
			});
			
		});
	}
