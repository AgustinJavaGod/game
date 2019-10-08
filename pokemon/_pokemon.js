
var pokemones,nombre,tipo,imagen,sprite,w,h;

$(function(){

pokemones = $('#pokemones');
nombre = $('#nombre');
tipo = $('#tipo');
imagen = $('#imagen');
sprite = $('#sprite');
w=500;
h=w

var getting = $.get( 'pokemon.php');

function cargapokemones(){
	pokemones.empty();
	
	// propiedades css globales al cargar página
	$("body").css('background-repeat','no-repeat');
	$("body").css('backgroundPosition', '20px 120px');
	$("body").css("background-size", w + "px " + h + "px");
	
	getting.done(function( data ) {
		if(data!='y'){
			var arrayValores = JSON.parse(data);
			$.each(arrayValores, function( index, valor ) {
				var option = $('<option value=\"'+valor.id+'\" id=\"'+valor.type+'\">'+valor.name.english+'</option>');
				option.appendTo( pokemones );
			});
		}else{
			console.log('data	'+data);
		}
		if (imagen.src!=""){
			imagen.attr('src','http://pm1.narvii.com/6401/61c75e3c02ebf7178cff4c6bf96168096e6ffaaf_00.jpg');
		}
	});
	getting.fail(function(error){			console.log('data	'+error);
	});
}
cargapokemones();

  pokemones.change(function(){
    var name = $('#pokemones option[value='+pokemones.val()+']').text();
    var type = $('#pokemones option[value='+pokemones.val()+']').attr('id');
    nombre.val(name);
    tipo.val(type)
	
	var nom = $(this).children(":selected").text();
	var num = $(this).children(":selected").val();
	var id = $(this).children(":selected").attr("id");
	
	if (id==','){ //Si elige primer option vacío es missingno
		imagen.attr('src','http://pm1.narvii.com/6401/61c75e3c02ebf7178cff4c6bf96168096e6ffaaf_00.jpg');
		$("body").css("background-image", 'url(http://mouse.latercera.com/wp-content/uploads/2017/08/missingnoportada.jpg)');
		sprite.hide();
		tipo.val('');
	}else{ //cualquier otro option
		sprite.show();
		if (num==29){
			imagen.attr('src','https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoran-f.png');
			$("body").css("background-image", 'url(https://img.pokemondb.net/artwork/large/nidoran-f.jpg)');
			sprite.attr('src','https://img.pokemondb.net/sprites/sun-moon/icon/nidoran-f.png');
		}else if(num==32){
			imagen.attr('src','https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoran-m.png');
			$("body").css("background-image", 'url(https://img.pokemondb.net/artwork/large/nidoran-m.jpg)');
			sprite.attr('src','https://img.pokemondb.net/sprites/sun-moon/icon/nidoran-m.png');
		}else if(nom=='Farfetch\'d'){
			imagen.attr('src','https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/farfetchd.png');
			$("body").css("background-image", 'url(https://img.pokemondb.net/artwork/large/farfetchd.jpg)');
			sprite.attr('src','https://img.pokemondb.net/sprites/sun-moon/icon/farfetchd.png');
		}else if(nom=='Mr. Mime'){
			imagen.attr('src','https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mr-mime.png');
			$("body").css("background-image", 'url(https://img.pokemondb.net/artwork/large/mr-mime.jpg)');
			sprite.attr('src','https://img.pokemondb.net/sprites/sun-moon/icon/mr-mime.png');
		}else if(nom=='Mime Jr.'){
			imagen.attr('src','https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mime-jr.png');
			$("body").css("background-image", 'url(https://img.pokemondb.net/artwork/large/mime-jr.jpg)');
			sprite.attr('src','https://img.pokemondb.net/sprites/sun-moon/icon/mime-jr.png');
		}else if(nom=='Shaymin'){
			imagen.attr('src','https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shaymin-land.png');
			$("body").css("background-image", 'url(https://img.pokemondb.net/artwork/large/shaymin-land.jpg)');
			sprite.attr('src','https://img.pokemondb.net/sprites/sun-moon/icon/shaymin-land.png');
		}else if(num==669){
			imagen.attr('src','https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/flabebe.png');
			$("body").css("background-image", 'url(https://img.pokemondb.net/artwork/large/flabebe.jpg)');
			sprite.attr('src','https://img.pokemondb.net/sprites/sun-moon/icon/flabebe.png');
		}else{
			if (num>=722){
				imagen.hide();
				$("body").css("background-image", 'url(https://img.pokemondb.net/artwork/large/'+name.replace(/\s+/g, '-').toLowerCase()+'.jpg)');
				sprite.attr('src','https://img.pokemondb.net/sprites/sun-moon/icon/'+name.replace(/\s+/g, '-').toLowerCase()+'.png');
				
				if (num==741){
					$("body").css("background-image", 'url(https://img.pokemondb.net/artwork/large/'+name.toLowerCase()+'-baile.jpg)');
					sprite.attr('src','https://img.pokemondb.net/sprites/sun-moon/icon/'+name.toLowerCase()+'.png');
				}
				if (num==745){
					$("body").css("background-image", 'url(https://img.pokemondb.net/artwork/large/'+name.toLowerCase()+'-midday.jpg)');
					sprite.attr('src','https://img.pokemondb.net/sprites/sun-moon/icon/'+name.toLowerCase()+'.png');
				}
				if (num==746){
					$("body").css("background-image", 'url(https://img.pokemondb.net/artwork/large/'+name.toLowerCase()+'-solo.jpg)');
					sprite.attr('src','https://img.pokemondb.net/sprites/sun-moon/icon/'+name.toLowerCase()+'.png');
				}
				if (num==772){
					$("body").css("background-image", 'url(https://img.pokemondb.net/artwork/large/type-null.jpg)');
					sprite.attr('src','https://img.pokemondb.net/sprites/sun-moon/icon/type-null.png');
				}
			}else{
			imagen.show();
			imagen.attr('src','https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/'+name.toLowerCase()+'.png');
			$("body").css("background-image", 'url(https://img.pokemondb.net/artwork/large/'+name.toLowerCase()+'.jpg)');
			sprite.attr('src','https://img.pokemondb.net/sprites/sun-moon/icon/'+name.toLowerCase()+'.png');
			}
		}
	}
  })
})
