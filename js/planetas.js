$(document).ready(function(){
    var root = 'https://swapi.co/api/planets/';

    cargarplanetas(root);


    function cargarplanetas(url){

        $.ajax({
            url: url,
            method: 'GET',
            success: function(data){
                console.log(data);
                var listadoplanetas = '';
                for(var i=0; i<data.results.length; i++){
                    listadoplanetas +='       <div class="col-md-10 col-xs-12 text-center mb-4">';
                    listadoplanetas +='         <img class="fotoplanetas img-fluid d-block mx-auto" src="img/planetas/planeta'+ data.results[i].diameter+'.jpg" alt="">';
                    listadoplanetas +='       </div>';
                    listadoplanetas +='       <div class="col-md-2 col-xs-12 mb-4 text-center">';
                    listadoplanetas +='         <h3>'+ data.results[i].name +'</h3>';
                    listadoplanetas +='         <p><span class="subtitulos">Diameter: </span>'+ data.results[i].diameter +' <br> <span class="subtitulos">Climate: </span>'+ data.results[i].climate +' <br> <span class="subtitulos">Terrain: </span>'+ data.results[i].terrain +' <br> <span class="subtitulos">Surface water: </span>'+ data.results[i].surface_water +' <br> <span class="subtitulos">Population: </span>'+ data.results[i].population +' </p>';                  
                    listadoplanetas +='       </div>';
                    listadoplanetas +='        <br>';

                }
                console.log(listadoplanetas);
                $("#planetas").html(listadoplanetas);

            $("#prev").on('click', function(e){
                    e.preventDefault();
                    if(data.previous!= null)
                        cargarplanetas(data.previous);
                });
                $("#next").on('click', function(e){
                    e.preventDefault();
                    if(data.next!= null)
                        cargarplanetas(data.next);
                });
            },
            error: function (e) {
                console.log(e);
            },
        });



    }
});