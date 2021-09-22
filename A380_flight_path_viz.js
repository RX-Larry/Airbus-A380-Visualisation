var vg_1 = "A380_flight_path_viz.vg.json";
vegaEmbed("#flow_map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);