var vg_1 = "data/w9hw.vg.json"; 
vegaEmbed("#aus_heat_map", vg_1).then(function (result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

var vg_2 = "data/mean_min.vg.json"; 
vegaEmbed("#mean_min_temp_bar_chart", vg_2).then(function (result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

var vg_3 = "data/mean_max.vg.json"; 
vegaEmbed("#mean_max_temp_bar_chart", vg_2).then(function (result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);