//var jsonString = JSON.stringify(AverageAge);

//console.lof(jsonString)
//line chart

let populationAge = [];

for (let i = 0; i < AverageAge.length; i++) 
    {
    let population =  [
    AverageAge[i]['1998'], 
    AverageAge[i]['1999'], AverageAge[i]['2000'], AverageAge[i]['2001'], AverageAge[i]['2002'], 
    AverageAge[i]['2003'], AverageAge[i]['2004'], AverageAge[i]['2005'], AverageAge[i]['2006'],
    AverageAge[i]['2007'], AverageAge[i]['2008'], AverageAge[i]['2009'], AverageAge[i]['2010'], 
    AverageAge[i]['2011'], AverageAge[i]['2012'], AverageAge[i]['2013'], AverageAge[i]['2014'], 
    AverageAge[i]['2015'], AverageAge[i]['2016'], AverageAge[i]['2017'], AverageAge[i]['2018']];

    let years = [1998,1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 
                  2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
    
    populationAge.push(
      {
        x: years,
        y: population,
        mode: 'markers',
        type: 'scatter',
        name:AverageAge[i]["Kommun"]
      }
    )
}
    console.log("text", JSON.stringify(populationAge));

var layoutforscatter = {
  autosize: false,
  width: 800,
  height: 600,
  
  title: {
    text: "Average Age of kommunal Population",
    font: {
      family: "Courier New, monospace",
      size: 20,
      color: 'blue',
      etxtalign:'center',
    },
    xref: "paper",
    x: 0.05,
  },

  xaxis: {
    title: "Year",
    tickangle: -55,
    autotick: false,
    range: [1998, 2018],
    ticks: 'outside',
    ticklen: 8,
  },
  //yaxis: {
    //title: "Poplulation Density",
    //range: [0, 5500],
  //}
  
      yaxis: {
        title: "Average Age of the Local Population",
        tickangle: -25,
        autotick: true,
        range: [10, 50],
        ticks: {
          beginAtZero: true,
          min: 10,
          max: 50,
          stepSize: 10,
        }
      }
    
  
}
  
Plotly.newPlot('scatterline', populationAge, layoutforscatter);

  