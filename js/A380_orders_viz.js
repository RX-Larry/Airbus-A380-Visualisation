var vg_2 = "json/A380_orders_viz.vg.json";
vegaEmbed("#histogram", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);