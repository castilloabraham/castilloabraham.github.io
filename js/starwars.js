$(document).ready(function () {
    var root = 'https://swapi.co/api/films/';

    // Metodo 1
    /*
    $.ajax({
        url: root,
        method: 'GET',
    }).then(function (data) {
        //alert(data);
        console.log(data);
        var tarjeta = '';
        for (var i = 0; i < data.results.length; i++) {
            tarjeta += '<div class="col-md-4">';
            tarjeta += '    <h1>' + data.results[i].title + '</h1>';
            tarjeta += '</div>';
        }
        console.log(tarjeta);
        $("#peliculas").html(tarjeta);
    });
    */
    // Metodo 2
    $.ajax({
        url: root,
        method: 'GET',
        success: function (data) {
            //alert(data);
            console.log(data);
            var peliculas = '';
            var personajes = '';
            for (var i = 0; i < data.results.length; i++) {
                peliculas += '<div class="row" id="'+ data.results[i].title +'">';
				peliculas += '<div class="col-md-4 col-xs-12">';
				peliculas += '			<a href="#">';
            	peliculas += '                    <img class="img-fluid rounded mb-3 mb-md-0 caratula" src="img/caratulas/caratula'+ data.results[i].episode_id +'.jpg" alt="">';
				peliculas += '			</a>';
				peliculas += '</div>';
				peliculas += '<div class="col-md-8 col-xs-12">';
				peliculas += '	<h3 class="subtitulos" id="episodiotitulo">'+ data.results[i].episode_id +'. '+ data.results[i].title +'...</h3>';
				peliculas += '	<p>'+ data.results[i].opening_crawl +'</p>';
				peliculas += '	<p><span class="subtitulos">Director: </span>'+ data.results[i].director +'. <br> <span class="subtitulos">Producer: </span>'+ data.results[i].producer +'. <br> <span class="subtitulos">Release date: </span>'+ data.results[i].release_date +'. </p>';
                peliculas += '  <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#mimodalejemplo'+i+'">Characters</button>';
                peliculas += '</div>';
                peliculas += '<div class="modal fade" id="mimodalejemplo'+i+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
                peliculas += '        <div class="modal-dialog" role="document">';
                peliculas += '          <div class="modal-content">';
                peliculas += '            <div class="modal-header">';
                peliculas += '              <h4 class="modal-title" id="myModalLabel">'+ data.results[i].episode_id +'. '+ data.results[i].title +'...</h4>';
                peliculas += '             </div>';
                peliculas += '             <div class="modal-body" id="textopeliculas">';
                for (var j = 0; j < data.results[i].characters.length; j++){
                 personajes = mostarpersonajes(data.results[i].characters[j]) +',';
                 peliculas += personajes + '.' ;
                }
                peliculas += '             </div>';
                peliculas += '             <div class="modal-footer">';
                peliculas += '              <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>';
                peliculas += '             </div>';
                peliculas += '           </div>';
                peliculas += '         </div>';
                peliculas += '       </div>';
				peliculas += '</div>';
				peliculas += '<hr>';
            }
            //console.log(peliculas);
            $("#peliculas").html(peliculas);
        },
        error: function (e) {
            console.log(e);
        },
    });


    $('#exampleModal').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
    });


function mostarpersonajes(url){
        var personajes = '';


        $.ajax({
            url: url,
            method: 'GET',
            async: false,
            success: function(data){
               personajes  = data.name;
            }
        });


        return personajes;
    }



});
