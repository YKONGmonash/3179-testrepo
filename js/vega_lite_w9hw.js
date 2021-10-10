var vg_1 = "data/w9hw.vg.json"; 
vegaEmbed("#aus_heat_map", vg_1).then(function (result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

var vg_2 = "data/w10hw.vg.json"; 
vegaEmbed("#min_max_temp_bar_chart", vg_2).then(function (result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);