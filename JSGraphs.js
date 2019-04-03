
    var jsonString = JSON.stringify(medianData);
  //var jsonObject = json.parse(parsedString);

  console.log(jsonString);
  // Åre
        var year = []; // en lista skapas 
        for (i=0; i < medianData.length; i++) {
        year.push (medianData[i].Year)
    };
        var  lan = [];
        for (i=0; i < medianData.length; i++) {
        lan.push (medianData[i].Are)
    };  
        var Are = {
        x: year,
        marker: {color: 'rgb(55, 83, 109)'},
        y: lan,
        name: "Åre",
        type: "scatter",
        mode: "markers",
    };

 // Borlänge 
        var year2 = []; // en lista skapas 
        for (i=0; i < medianData.length; i++) {
        year2.push (medianData[i].year)
    };
        var  lan2 = [];
        for (i=0; i < medianData.length; i++) {
        lan2.push (medianData[i].Borlange)
    };  
        var Borlange = {
        x: year,
        marker: {color: 'rgb(255, 134, 0)'},
        y: lan2,
        name: "Borlänge",
        type: "scatter",
        mode: "markers"
    };

// Göteborg 
        var year3 = []; // en lista skapas 
        for (i=0; i < medianData.length; i++) {
        year3.push (medianData[i].year)
        
    };
        var  lan3 = [];
        for (i=0; i < medianData.length; i++) {
        lan3.push (medianData[i].Goteborg)
       
    };  
        var Goteborg = {
        x: year,
        marker: {color: 'rgb(102, 4, 0)'},
        y: lan3,
        name: "Göteborg",
        type: "scatter",
        mode: "markers"
    };

//  Gotland

        var year4 = []; // en lista skapas 
        for (i=0; i < medianData.length; i++) {
        year4.push (medianData[i].year)
    };
        var  lan4 = [];
        for (i=0; i < medianData.length; i++) {
        lan4.push (medianData[i].Gotland)
    };  
        var Gotland = {
        x: year,
        marker: {color: 'rgb(0, 128, 255)'},
        y: lan4,
        name: "Gotland",
        type: "scatter",
        mode: "markers"
    };

// Karlskrona
        var year5 = []; // en lista skapas 
        for (i=0; i < medianData.length; i++) {
        year5.push (medianData[i].year)
    };
        var  lan5 = [];
        for (i=0; i < medianData.length; i++) {
        lan5.push (medianData[i].Karlskrona)
    };  
        var Karlskrona = {
        x: year,
        marker: {color: 'rgb(102, 4, 238)'},
        y: lan5,
        name: "Karlskrona",
        type: "scatter",
        mode: "markers"
    };


        // Karlstad
        var year6 = []; // en lista skapas 
        for (i=0; i < medianData.length; i++) {
        year6.push (medianData[i].year)
    };
        var  lan6 = [];
        for (i=0; i < medianData.length; i++) {
        lan6.push (medianData[i].Karlstad)
    };  
        var Karlstad = {
        x: year,
        marker: {color: 'rgb(102, 207, 238)'},
        y: lan6,
        name: "Karlstad",
        type: "scatter",
        mode: "markers"
    };

        // Kiruna
        var year7 = []; // en lista skapas 
        for (i=0; i < medianData.length; i++) {
        year7.push (medianData[i].year)
    };
        var  lan7 = [];
        for (i=0; i < medianData.length; i++) {
        lan7.push (medianData[i].Kiruna)
    };  
        var Kiruna = {
        x: year,
        marker: {color: 'rgb(252, 207, 238)'},
        y: lan7,
        name: "Kiruna",
        type: "scatter",
        mode: "markers"
    };


        // Lulea
        var year8 = []; // en lista skapas 
        for (i=0; i < medianData.length; i++) {
        year8.push (medianData[i].year)
    };
        var  lan8 = [];
        for (i=0; i < medianData.length; i++) {
        lan8.push (medianData[i].Lulea)
    };  
        var Lulea = {
        x: year,
        marker: {color:"rgb(0, 204, 0)"},
        y: lan8,
        name: "Luleå",
        type: "scatter",
        mode: "markers"
    };

        // Lund
        var year9 = []; // en lista skapas 
        for (i=0; i < medianData.length; i++) {
        year9.push (medianData[i].year)
    };
        var  lan9 = [];
        for (i=0; i < medianData.length; i++) {
        lan9.push (medianData[i].Lund)
    };  
        var Lund = {
        x: year,
        marker: {color:"rgb(204, 0, 0)"},
        y: lan9,
        name: "Lund",
        type: "scatter",
        mode: "markers"
    };

        // Norrkoping
        var year10 = []; // en lista skapas 
        for (i=0; i < medianData.length; i++) {
        year10.push (medianData[i].year)
    };
        var  lan10 = [];
        for (i=0; i < medianData.length; i++) {
        lan10.push (medianData[i].Norrkoping)
    };  
        var Norrkoping = {
        x: year,
        marker: {color:"rgb(204, 204, 0)"},
        y: lan10,
        name: "Norrköping",
        type: "scatter",
        mode: "markers"
    };

        // Norrtalje
        var year11 = []; // en lista skapas 
        for (i=0; i < medianData.length; i++) {
        year11.push (medianData[i].year)
    };
        var  lan11 = [];
        for (i=0; i < medianData.length; i++) {
        lan11.push (medianData[i].Norrtalje)
    };  
        var Norrtalje = {
        x: year,
        marker: {color:"rgb(0, 77, 0)"},
        y: lan11,
        name: "Norrtälje",
        type: "scatter",
        mode: "markers"
    };

        // Ostersund
        var year12 = []; // en lista skapas 
        for (i=0; i < medianData.length; i++) {
        year12.push (medianData[i].year)
    };
        var  lan12 = [];
        for (i=0; i < medianData.length; i++) {
        lan12.push (medianData[i].Ostersund)
    };  
        var Ostersund = {
        x: year,
        marker: {color:"rgb(0, 19, 77)"},
        y: lan12,
        name: "Östersund",
        type: "scatter",
        mode: "markers"
    };

         // Stockholm
         var year13 = []; // en lista skapas 
         for (i=0; i < medianData.length; i++) {
         year13.push (medianData[i].year)
    };
         var  lan13 = [];
         for (i=0; i < medianData.length; i++) {
         lan13.push (medianData[i].Stockholm)
    };  
         var Stockholm = {
         x: year,
         marker: {color:"rgb(128, 128, 128)"},
         y: lan13,
         name: "Stockholm",
         type: "scatter",
         mode: "markers"
    };

         // Stromstad
         var year14 = []; // en lista skapas 
         for (i=0; i < medianData.length; i++) {
         year14.push (medianData[i].year)
    };
         var  lan14 = [];
         for (i=0; i < medianData.length; i++) {
         lan14.push (medianData[i].Stromstad)
    };  
         var Stromstad = {
         x: year,
         marker: {color:"rgb(255, 64, 0)"},
         y: lan14,
         name: "Stromstad",
         type: "scatter",
         mode: "markers"
    };

         // Umea
         var year15 = []; // en lista skapas 
         for (i=0; i < medianData.length; i++) {
         year15.push (medianData[i].year)
    };
         var  lan15 = [];
         for (i=0; i < medianData.length; i++) {
         lan15.push (medianData[i].Umea)
    };  
         var Umea = {
         x: year,
         marker: {color:"rgb(0, 255, 191)"},
         y: lan15,
         name: "Umeå",
         type: "scatter",
        mode: "markers"
    };

         // Vaxjo
         var year16 = []; // en lista skapas 
         for (i=0; i < medianData.length; i++) {
         year16.push (medianData[i].year)
    };
         var  lan16 = [];
         for (i=0; i < medianData.length; i++) {
         lan16.push (medianData[i].Vaxjo)
    };  
         var Vaxjo = {
         x: year,
         marker: {color:"rgb(102, 4, 104)"},
         y: lan16,
         name: "Växjö",
         type: "scatter",
         mode: "markers"
    };
         
         // Sverige
         var year17 = []; // en lista skapas 
         for (i=0; i < medianData.length; i++) {
         year16.push (medianData[i].year)
    };
         var  lan17 = [];
         for (i=0; i < medianData.length; i++) {
         lan17.push (medianData[i].Sverige)
    };  
         var Sverige = {
         x: year,
         marker: {color:"rgb(0, 0, 0)"},
         line: {
            color: 'rgb(0, 0, 0)',
            width: 1,
            opacity: 0.5,
          },
         y: lan17,
         name: "Sverige"};
        


        var data = [Are, Borlange, Goteborg, Gotland, Karlskrona, 
                   Karlstad, Kiruna, Lulea, Lund, Norrkoping,Norrtalje,
                   Ostersund, Stockholm, Stromstad, Umea, Vaxjo, Sverige];

    
        var layout = {
          hivermode:"closest",  
          showlegend: true,
          title: 'Medianinkomst',
          height: 600, width: 1000,
                xaxis: {title: "Year",
                        tickangle: -55,
                        autotick:false,
                        range:[1990, 2018],
                        ticks: 'outside',
                        ticklen: 8,
                       },
                yaxis: {title: "Inkomst",
                        range:[150000, 320000],},                           
        }
    
    Plotly.newPlot('myDiv', data, layout, {responsive: true});