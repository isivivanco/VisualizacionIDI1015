$(document).ready(function() {
    $("#enero").click(function() {
        var lista = [31624,43398,64515,35417,49449,74751,
            63815,44126,42144,45526,39648,58673,55554,56379,49022,153548];
        
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
     });  
  });


