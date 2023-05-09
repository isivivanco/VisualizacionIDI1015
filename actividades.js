$(document).ready(function() {
    $("#boton_actividades").hide()
    $("#enero").click(function() {
        var lista = [31624,43398,64515,35417,49449,74751,
            63815,44126,42144,45526,39648,58673,55554,56379,49022,153548];
        var actividades=["parapente","trekking","kayak","montana","actividad_5","actividad_6",
        "actividad_7","actividad_8","actividad_9","actividad_10","actividad_11","actividad_12","actividad_13","actividad_14","actividad_15","actividad_16"];
        var regiones=["Arica","Tarapaca","Antofagasta","Atacama","Valparaiso","Metropolitana","Ohiggins","Maule","Ñuble","Bio-Bio","Araucania","Rios","Lagos","Aysen","Magallanes"]
            for (let i=0;i<15;i++){
                $("#"+i).show();
            }
            let input=document.getElementById("precio").value;
            console.log(input)
            for (let i = 0; i<15;i++){
                console.log(i)
             if (input <= lista[i]){
                $("#"+i).hide();
          };
        };
          $("#1").click(function(){
            for (let i=0;i<15;i++){
                $("#"+i).show()
                $("#"+i).text(actividades[i])
                $("#clima").hide();
            }  
            $("#boton_actividades").show();
           
        });
        $("#boton_actividades").click(function(){
            for (let i=0;i<15;i++){
                var id = i+1
                $("#"+id).text(regiones[i])
                $("#"+id).show();
                console.log(document.getElementById(""+id))
            }
            let input=document.getElementById("precio").value;
            console.log(input)
            for (let i = 0; i<15;i++){
                console.log(i)
             if (input <= lista[i]){
                var id= i+1
                $("#"+ id ).hide();
          };
        };
        $("#boton_actividades").hide();
        $("#clima").show();
      });         
    });  
  });
