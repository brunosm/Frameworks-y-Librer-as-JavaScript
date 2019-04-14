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
});
