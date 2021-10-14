var vg_1 = "data/ausWFdata.vg.json"; 
vegaEmbed("#aus_heat_map", vg_1).then(function (result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

var vg_2 = "data/combine.vg.json"; 
vegaEmbed("#mean_temp_bar_chart", vg_2).then(function (result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

var vg_3 = "data/3rd.vg.json"; 
vegaEmbed("#melbourne_humidity_line", vg_3).then(function (result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

var vg_4 = "data/4th.vg.json"; 
vegaEmbed("#melbourne_windgust", vg_4).then(function (result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);