$(document).ready(function() {

    $("#enero").click(function() {
        const precio_atacama = 31624;
        const precio_tarapaca = 43398;
        const precio_Antofagasta=64515;
        const precio_Atacama= 35417;
        const precio_Coquimbo = 49449;
        const precio_Valparaiso = 74751;
        const precio_Santiago=63815;
        const precio_ohiggins= 44126;
        const precio_Maule= 42144;
        const precio_nuble = 45526;
        const precio_BioBio=39648;
        const precio_Araucania= 58673;
        const precio_losrios = 55554;
        const precio_loslagos = 56379;
        const precio_Aysen=49022;
        const precio_Magallanes=153548;
        
        
        $("#1").mouseover(function(){
            $("#clima").text("T° min y max: 18.7 - 24.6 // viento promedio: 6 nudos // precipitaciones mensuales: 0.6 milimetros // humedad relativa: 68% // nubosidad promedio: poco nuboso (3/8)")
        });
        $("#1").mouseleave(function(){
            $("#clima").text("eliga region");
        });
        $("#2").mouseover(function(){
            $("#clima").text("T° min y max: 18.2 - 24.4 // viento promedio: 7 nudos // precipitaciones mensuales: 0.4 milimetros // humedad relativa: 63% // nubosidad promedio: poco nuboso (2/8")
        });
        $("#2").mouseleave(function(){
            $("#clima").text("eliga region");
        });
        $("#3").mouseover(function(){
            $("#clima").text("T° min y max: 16.3 - 21.5 // viento promedio: 4 nudos // precipitaciones mesulaes: 0.3 milimetros // humedad relativa: 79% // nubosidad promedio: poco nuboso (3/8)")
        });
        $("#3").mouseleave(function(){
            $("#clima").text("eliga region");
        });
        $("#4").mouseover(function(){
            $("#clima").text("T° min y max: 15.3 - 23.3 // viento promedio: 7 nudos // precipitaciones mensuales 0.1 milimetros // humedad relativa: 75% // nubosidad promedio: nuboso (5/8)")
        });
        $("#4").mouseleave(function(){
            $("#clima").text("eliga region");
        });
        $("#5").mouseover(function(){
            $("#clima").text("T° min y max: 13.9 - 20.8 // viento promedio: 4 nudos // precipitaciones mensuales: 0.0 milimetros // humedad relativa: 84% // nubosidad promedio: nuboso (4/8)")
        });
        $("#5").mouseleave(function(){
            $("#clima").text("eliga region");
        });
        $("#6").mouseover(function(){
            $("#clima").text("T° min y max: 12.7 - 21.3 // viento promedio: 4 nudos // precipitaciones mensuales: 0.0 milimetros // humedad relativa: 90% // nubosidad promedio: nuboso (5/8)")
        });
        $("#6").mouseleave(function(){
            $("#clima").text("eliga region");
        });
        $("#7").mouseover(function(){
            $("#clima").text("T° min y max: 13.9 - 31.4 // viento promedio: 5 nudos // precipitaciones mensuales: 0.0 milimetros // humedad relativa: 58% // nubosidad promedio: despejado (1/8)")
        });
        $("#7").mouseleave(function(){
            $("#clima").text("eliga region");
        });
        $("#8").mouseover(function(){
            $("#clima").text("T° min y max: 10.8 - 19.6 // viento promedio: 8 nudos // precipitaciones mensuales: 0.0 milimetros // humedad relativa: 85% // nubosidad promedio: nuboso (4/8)")
        });
        $("#8").mouseleave(function(){
            $("#clima").text("eliga region");
        });
        $("#9").mouseover(function(){
            $("#clima").text("T° min y max: 13.9 - 30.0 // viento promedio: 7 nudos // precipitaciones mensuales: 75.4 milimetros // humedad reltiva: 68% // nubosidad promedio: poco nuboso (3/8)")
        });
        $("#9").mouseleave(function(){
            $("#clima").text("eliga region");
        });
        $("#10").mouseover(function(){
            $("#clima").text("T° min y max: 10.3 - 29.3 // viento promedio: 7 nudos // precipitaciones mensuales: 2.1 milimetros // humedad relativa: 76% // nubosidad promedio: poco nuboso (2/8)")
        });
        $("#10").mouseleave(function(){
            $("#clima").text("eliga region");
        });
        $("#11").mouseover(function(){
            $("#clima").text("T° min y max: 12.5 - 21.5 // viento promedio: 7 nudos // precipitaciones mensuales: 11.6 milimetros // humedad relativa: 81% // nubosidad promedio: nuboso (4/8)")
        });
        $("#11").mouseleave(function(){
            $("#clima").text("eliga region");
        });
        $("#12").mouseover(function(){
            $("#clima").text("T° min y max: 9.0 - 23.9 // viento promedio: 2 nudos // precipitaciones mensuales: 51.6 milimetros // humedad relativa: 91% // nubosidad promedio: muy nuboso (6/8)")
        });
        $("#12").mouseleave(function(){
            $("#clima").text("eliga region");
        });
        $("#13").mouseover(function(){
            $("#clima").text("T° min y max: 9.0 - 24.1 // viento promedio: 8 nudos // precipitaciones mensuales: 37.9 milimetros // humedad relativa: 89% // nubosidad promedio: nuboso (4/8)")
        });
        $("#13").mouseleave(function(){
            $("#clima").text("eliga region");
        });
        $("#14").mouseover(function(){
            $("#clima").text("T° min y max: 9.3 - 20.4 // viento promedio: 9 nudos // precipitaciones mensuales: 77.4 milimetros // humedad relativa: 91% // nubosidad promedio: nuboso (5/8)")
        });
        $("#14").mouseleave(function(){
            $("#clima").text("eliga region");
        });
        $("#15").mouseover(function(){
            $("#clima").text("T° min y max: 8.5 - 21.0 // viento promedio: 8 nudos // precipitaciones mensuales: 55.2 milimetros // humedad relativa: 80% // nubosidad promedio: nuboso (4/8)")
        });
        $("#15").mouseleave(function(){
            $("#clima").text("eliga region");
        });
        $("#16").mouseover(function(){
            $("#clima").text("T° min y max: 7.4 - 14.7 // viento promedio: 9 nudos // precipitaciones mensuales: 56.7 milimetros // humedad relativa: 75% // nubosidad promedio: muy nuboso (6/8)")
        });
        $("#16").mouseleave(function(){
            $("#clima").text("eliga region");
        });
    });

    $("#febrero").click(function() {
        $("#1").mouseover(function(){
            $("#clima").text("ingrese info arica febrero")
        });
        $("#1").mouseleave(function(){
            $("#clima").text("febrero");
        });
    });
    
});
