$(document).ready(function () {
    var root = 'https://swapi.co/api/vehicles/';


    cargarvehiculos(root);


    function cargarvehiculos(url){


    $.ajax({
        url: root,
        method: 'GET',
        success: function (data) {
            //alert(data);
            console.log(data);
            var vehiculos = '';
            for (var i = 0; i < data.results.length; i++) {
                vehiculos += '<div class="col-md-3 col-xs-6"';
                vehiculos += '          <a href="#">';
                vehiculos += '                    <img class="img-fluid rounded mb-3 mb-md-0 vehiculos" src="img/vehiculos/vehiculo'+ data.results[i].length +'.jpg" alt="">';
                vehiculos += '          </a>';
                vehiculos += '<br>';
                vehiculos += '<br>';                                
                vehiculos += '</div>';
				vehiculos += '<div class="col-md-3 col-xs-6">';
				vehiculos += '	<h3 class="subtitulos">'+ data.results[i].name +'</h3>';
				vehiculos += '	<p><span class="subtitulos">Model: </span>'+ data.results[i].model +'. <br> <span class="subtitulos">Length: </span>'+ data.results[i].length +'. <br> <span class="subtitulos">Crew: </span>'+ data.results[i].crew +'. <br> <span class="subtitulos">Passengers: </span>'+ data.results[i].passengers +'. <br> <span class="subtitulos">Vehicle class: </span>'+ data.results[i].vehicle_class +'. </p>';
				vehiculos += '</div>';                                       
            }
            //console.log(vehiculos);
            $("#vehiculos").html(vehiculos);

         $("#prev").on('click', function(e){
                    e.preventDefault();
                    if(data.previous!= null)
                        cargarvehiculos(data.previous);
                });
                $("#next").on('click', function(e){
                    e.preventDefault();
                    if(data.next!= null)
                        cargarvehiculos(data.next);
                });
            },
            error: function (e) {
                console.log(e);
            },
        });



    }
});