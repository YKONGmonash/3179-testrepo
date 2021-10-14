var vg_1 = "data/ausWFdata.vg.json"; 
vegaEmbed("#aus_heat_map", vg_1).then(function (result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

var vg_2 = "data/combine.vg.json"; 
vegaEmbed("#mean_temp_bar_chart", vg_2).then(function (result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

var vg_3 = "data/mean_max.vg.json"; 
vegaEmbed("#mean_max_temp_bar_chart", vg_3.then(function (result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error));
