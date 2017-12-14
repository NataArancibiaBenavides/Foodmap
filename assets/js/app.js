$().ready(function() {
 	   $("#Titulo").fadeIn(100).fadeOut(5000);
      
 
});

 $(document).ready(function(){
   setInterval(function(){
   	$(".sel").show(500);
   });
   $('.FotosPlatos').hide();
   $('.FotosPlatos:firts').show();
   $('#Vegetariana').click(opcion);
   $('#Vegana').click(opcion2);
   $('#Exotica').click(opcion3);
   $('#Pasteleria').click(opcion4);

   function opcion(){
   	$('#Vegetariana').show();
   	$('#Vegana').hide();
   	$('#Exotica').hide();
   	$('#Pasteleria').hide();
   }
   function opcion1{
   	$('#Vegana').show();
   	$('#Exotica').hide();
   	$('#Pasteleria').hide();
   	$('Vegetariana').hide();

   }
   function opcion2();{
   $('#Exotica').show();
   $('#Pasteleria').hide();
   $('#Vegetariana').hide();
   $('#Vegana').hide();
 }
 function opcion3(){
  $('#Pasteleria').show();
  $('#Vegetariana').hide();
  $('#Vegana').hide();
  $('#Exotica').hide();
}



 }
