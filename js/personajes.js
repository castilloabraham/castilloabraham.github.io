$(document).ready(function(){
    var root = 'https://swapi.co/api/people/';

    cargarPersonajes(root);


    function cargarPersonajes(url){

        $.ajax({
            url: url,
            method: 'GET',
            success: function(data){
                console.log(data);
                $('#listado-personajes').empty();
                var listadopersonajes = '';
                var filmes = '';
                for(var i=0; i<data.results.length; i++){
                    listadopersonajes +='       <div class="col-lg-4 col-xs-6 text-center mb-4">';
                    listadopersonajes +='           <img class="rounded-circle img-fluid d-block mx-auto perfil" src="img/personajes/personaje'+ data.results[i].height +'.jpg" alt="">';
                    listadopersonajes +='           <h3>'+ data.results[i].name +'</h3>';
                    listadopersonajes +='           <p><span class="subtitulos">Species: </span>'+ mostrarEspecie(data.results[i].species) +' <br> <span class="subtitulos">Planet: </span>'+ mostrarPlaneta(data.results[i].homeworld) +' <br> </p>';
                    listadopersonajes +='           <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#mimodalejemplo'+i+'">Films</button>';
                    listadopersonajes +='     <div class="modal fade" id="mimodalejemplo'+i+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
                    listadopersonajes +='         <div class="modal-dialog" role="document">';
                    listadopersonajes +='           <div class="modal-content">';
                    listadopersonajes +='             <div class="modal-header">';
                    listadopersonajes +='               <h4 class="modal-title" id="myModalLabel"> '+ data.results[i].name +'</h4>';
                    listadopersonajes +='              </div>';
                    listadopersonajes +='              <div class="modal-body" id="textopeliculas"> ';
                        
                    for (var j = 0; j < data.results[i].films.length; j++){
                        filmes = mostarfilmes(data.results[i].films[j]) +', ';
                        listadopersonajes += filmes;
                    }

                    
                    listadopersonajes +='              </div>';
                    listadopersonajes +='              <div class="modal-footer">';
                    listadopersonajes +='               <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>';
                    listadopersonajes +='              </div>';
                    listadopersonajes +='            </div>';
                    listadopersonajes +='          </div>';
                    listadopersonajes +='        </div>';
                    listadopersonajes +='       </div>';
                    listadopersonajes +='        <br>';
                }
                console.log(listadopersonajes);
                $("#personajes").html(listadopersonajes);


                $("#prev").on('click', function(e){
                    e.preventDefault();
                    if(data.previous!= null)
                        cargarPersonajes(data.previous);
                });
                $("#next").on('click', function(e){
                    e.preventDefault();
                    if(data.next!= null)
                        cargarPersonajes(data.next);
                });
            },
            error: function (e) {
                console.log(e);
            },
        });

    }


    function mostrarPlaneta(url){
        var planeta = '';


        $.ajax({
            url: url,
            method: 'GET',
            async: false,
            success: function(data){
                planeta = data.name;
            }
        });

        return planeta;
    }

    function mostrarEspecie(url){
        var especie = '';


        $.ajax({
            url: url,
            method: 'GET',
            async: false,
            success: function(data){
                especie = data.name;
            }
        });

        return especie;
    }

    function mostarfilmes(url){
        var filmes = '';


        $.ajax({
            url: url,
            method: 'GET',
            async: false,
            success: function(data){
                filmes = data.title;
            }
        });

        return filmes;
    }


});