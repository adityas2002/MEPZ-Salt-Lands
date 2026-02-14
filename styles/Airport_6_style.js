var size = 0;
var placement = 'point';

var style_Airport_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Segoe UI Black\', sans-serif";
    var labelFill = "#ff9900";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Name") !== null) {
        labelText = String(feature.get("Name"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [256, 256],
                  scale: 0.22265625,
                  anchor: [128.0, 128.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/airplane-svgrepo-com (1) - Copy.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
