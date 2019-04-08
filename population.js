//var jsonString = JSON.stringify(PopulationDensity);

//console.lof(jsonString)
//line chart

    let populationdata = [];

for (let i = 0; i < PopulationDensity.length; i++) 
    {
    let population =  [
    PopulationDensity[i]['1991'], PopulationDensity[i]['1992'], PopulationDensity[i]['1993'], PopulationDensity[i]['1994'], 
    PopulationDensity[i]['1995'], PopulationDensity[i]['1996'], PopulationDensity[i]['1997'], PopulationDensity[i]['1998'], 
    PopulationDensity[i]['1999'], PopulationDensity[i]['2000'], PopulationDensity[i]['2001'], PopulationDensity[i]['2002'], 
    PopulationDensity[i]['2003'], PopulationDensity[i]['2004'], PopulationDensity[i]['2005'], PopulationDensity[i]['2006'],
    PopulationDensity[i]['2007'], PopulationDensity[i]['2008'], PopulationDensity[i]['2009'], PopulationDensity[i]['2010'], 
    PopulationDensity[i]['2011'], PopulationDensity[i]['2012'], PopulationDensity[i]['2013'], PopulationDensity[i]['2014'], 
    PopulationDensity[i]['2015'], PopulationDensity[i]['2016'], PopulationDensity[i]['2017'], PopulationDensity[i]['2018']];

    let years = [1991, 1992, 1993, 1994, 1995, 1996, 1997,1998,1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 
                  2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
    
    populationdata.push(
      {
        x: years,
        y: population,
        mode: 'lines+markers',
        type: 'scatter',
        name:PopulationDensity[i]["Kommun"]
      }
    )
}
    console.log("text", JSON.stringify(populationdata));

var layoutforscatter = {
  autosize: false,
  width: 1200,
  height: 800,
  
  title: {
    text: "Population Density Per Sqr km",
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
    range: [1991, 2018],
    ticks: 'outside',
    ticklen: 8,
  },
  //yaxis: {
    //title: "Poplulation Density",
    //range: [0, 5500],
  //}
  
      yaxis: {
        title: "Population Density",
        tickangle: -25,
        autotick: true,
        range: [0, 5500],
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 5500,
          stepSize: 500,
        }
      }
    
  
}
  
Plotly.newPlot('scatter', populationdata, layoutforscatter);