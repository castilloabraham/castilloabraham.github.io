$(document).ready(function () {
    var root = 'https://swapi.co/api/starships/';

    cargarcruceros(root);


    function cargarcruceros(url){



    $.ajax({
        url: root,
        method: 'GET',
        success: function (data) {
            //alert(data);
            console.log(data);
            var cruceros = '';
            for (var i = 0; i < data.results.length; i++) {
                cruceros += '<div class="col-md-6 col-xs-6" id="cruceros">';
                cruceros += '   <img src="img/cruceros/crucero'+ data.results[i].length +'.jpg" class="col-md-12" height="300">'
                cruceros += '   <h3 class="col-md-12 col-xs-6 text-center subtitulo">'+ data.results[i].name +'</h3>';
                cruceros += '</br>';
                cruceros += '  <p><span class="subtitulos">Model: </span>'+ data.results[i].model +'. <br> <span class="subtitulos">Manufacturer: </span>'+ data.results[i].manufacturer +'. <br> <span class="subtitulos">crew: </span>'+ data.results[i].crew +'. <br> <span class="subtitulos">Passengers: </span>'+ data.results[i].passengers +'. <br></p>';
                cruceros += '</br>';
                cruceros += '</br>';
                cruceros += '</div>';
            }
            //console.log(cruceros);
            $("#cruceros").html(cruceros);

                $("#prev").on('click', function(e){
                    e.preventDefault();
                    if(data.previous!= null)
                        cargarcruceros(data.previous);
                });
                $("#next").on('click', function(e){
                    e.preventDefault();
                    if(data.next!= null)
                        cargarcruceros(data.next);
                });
            },
            error: function (e) {
                console.log(e);
            },
        });



    }

});