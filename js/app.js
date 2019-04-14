$(document).ready(function() {


  function cambioTitulo() {

      var color = ($('#titulo').css("color"));
      if(color=='rgb(220, 255, 14)'){

        $('#titulo').css("color","white");
      }else{
        $('#titulo').css("color","#DCFF0E");
      }
    }

  setInterval(cambioTitulo, 1500);


  function llenar(){
    for(var i= 0 ; i <= 6 ; i++ ){
      var columna = ".col-"+(i+1);
      for(var j=0; j<=6; j++){
        var numero = Math.floor((Math.random()*4)+1);
        var imagen = '<img src="image/'+numero+'.png" id='+i + numero+' height="95" width="95" />';
        $(columna).append(imagen);
        $( columna ).sortable();

      }
    }

  }

  $("#tablero").find("img").click(function(){
    var id = $(this).attr('id');
    console.log(id);
  });

/*  function controlar(){
    for(var i= 0 ; i <= 6 ; i++ ){
      for(var j=0; j<=6; j++){
        if(j=0){
          var numero = Math.floor((Math.random()*4)+1);
        }
        var id="#"+i + numero;
        var idSiguiente=i.toString()+ numero.toString();
        var idSiguiente = parseInt(idSiguiente)+10;
        var idAnterior = parseInt(idSiguiente)-10;
        var idSiguientedelSiguiente = idSiguiente+10;
        var idSiguiente = "#"+idSiguiente.toString();
        var idAnterior = "#"+idAnterior.toString();
        var idSiguientedelSiguiente = "#"+idSiguientedelSiguiente.toString();
        if($(id).attr('src')==$(idSiguiente).attr('src')==$(idAnterior).attr('src') ||
        $(id).attr('src')==$(idAnterior).attr('src')==$(idSiguiente).attr('src')||
      $(id).attr('src')==$(idSiguiente).attr('src')==$(idSiguientedelSiguiente).attr('src')){
        console.log("Son iguales");
      }
      }
    }*/












  $(".btn-reinicio").click(function(){
    llenar();
    //controlar();

  });



});
