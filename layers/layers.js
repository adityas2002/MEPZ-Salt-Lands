var wms_layers = [];


        var lyr_GoogleMap_0 = new ol.layer.Tile({
            'title': 'Google Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'Open Street Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_TamilnaduDistricts_3 = new ol.format.GeoJSON();
var features_TamilnaduDistricts_3 = format_TamilnaduDistricts_3.readFeatures(json_TamilnaduDistricts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TamilnaduDistricts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TamilnaduDistricts_3.addFeatures(features_TamilnaduDistricts_3);
var lyr_TamilnaduDistricts_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TamilnaduDistricts_3, 
                style: style_TamilnaduDistricts_3,
                popuplayertitle: 'Tamilnadu Districts',
                interactive: false,
                title: '<img src="styles/legend/TamilnaduDistricts_3.png" /> Tamilnadu Districts'
            });
var format_SEZsArea_4 = new ol.format.GeoJSON();
var features_SEZsArea_4 = format_SEZsArea_4.readFeatures(json_SEZsArea_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEZsArea_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEZsArea_4.addFeatures(features_SEZsArea_4);
var lyr_SEZsArea_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEZsArea_4, 
                style: style_SEZsArea_4,
                popuplayertitle: 'SEZs Area',
                interactive: true,
                title: '<img src="styles/legend/SEZsArea_4.png" /> SEZs Area'
            });
var format_SeaPorts_5 = new ol.format.GeoJSON();
var features_SeaPorts_5 = format_SeaPorts_5.readFeatures(json_SeaPorts_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SeaPorts_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeaPorts_5.addFeatures(features_SeaPorts_5);
var lyr_SeaPorts_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SeaPorts_5, 
                style: style_SeaPorts_5,
                popuplayertitle: 'Sea Ports',
                interactive: false,
                title: '<img src="styles/legend/SeaPorts_5.png" /> Sea Ports'
            });
var format_Airport_6 = new ol.format.GeoJSON();
var features_Airport_6 = format_Airport_6.readFeatures(json_Airport_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Airport_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airport_6.addFeatures(features_Airport_6);
var lyr_Airport_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Airport_6, 
                style: style_Airport_6,
                popuplayertitle: 'Airport',
                interactive: false,
                title: '<img src="styles/legend/Airport_6.png" /> Airport'
            });
var format_SEZsLocations49_7 = new ol.format.GeoJSON();
var features_SEZsLocations49_7 = format_SEZsLocations49_7.readFeatures(json_SEZsLocations49_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEZsLocations49_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEZsLocations49_7.addFeatures(features_SEZsLocations49_7);
var lyr_SEZsLocations49_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEZsLocations49_7, 
                style: style_SEZsLocations49_7,
                popuplayertitle: 'SEZs Locations (49)',
                interactive: false,
                title: '<img src="styles/legend/SEZsLocations49_7.png" /> SEZs Locations (49)'
            });
var format_SaltLandsAreaSplit_8 = new ol.format.GeoJSON();
var features_SaltLandsAreaSplit_8 = format_SaltLandsAreaSplit_8.readFeatures(json_SaltLandsAreaSplit_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaltLandsAreaSplit_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaltLandsAreaSplit_8.addFeatures(features_SaltLandsAreaSplit_8);
var lyr_SaltLandsAreaSplit_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaltLandsAreaSplit_8, 
                style: style_SaltLandsAreaSplit_8,
                popuplayertitle: 'Salt Lands Area Split',
                interactive: true,
                title: '<img src="styles/legend/SaltLandsAreaSplit_8.png" /> Salt Lands Area Split'
            });
var format_SaltLandsAreaMerged_9 = new ol.format.GeoJSON();
var features_SaltLandsAreaMerged_9 = format_SaltLandsAreaMerged_9.readFeatures(json_SaltLandsAreaMerged_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaltLandsAreaMerged_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaltLandsAreaMerged_9.addFeatures(features_SaltLandsAreaMerged_9);
var lyr_SaltLandsAreaMerged_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaltLandsAreaMerged_9, 
                style: style_SaltLandsAreaMerged_9,
                popuplayertitle: 'Salt Lands Area Merged',
                interactive: true,
                title: '<img src="styles/legend/SaltLandsAreaMerged_9.png" /> Salt Lands Area Merged'
            });
var format_SaltLandLocations9_10 = new ol.format.GeoJSON();
var features_SaltLandLocations9_10 = format_SaltLandLocations9_10.readFeatures(json_SaltLandLocations9_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaltLandLocations9_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaltLandLocations9_10.addFeatures(features_SaltLandLocations9_10);
var lyr_SaltLandLocations9_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaltLandLocations9_10, 
                style: style_SaltLandLocations9_10,
                popuplayertitle: 'Salt Land Locations (9)',
                interactive: false,
                title: '<img src="styles/legend/SaltLandLocations9_10.png" /> Salt Land Locations (9)'
            });

lyr_GoogleMap_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(false);lyr_TamilnaduDistricts_3.setVisible(true);lyr_SEZsArea_4.setVisible(false);lyr_SeaPorts_5.setVisible(false);lyr_Airport_6.setVisible(false);lyr_SEZsLocations49_7.setVisible(false);lyr_SaltLandsAreaSplit_8.setVisible(false);lyr_SaltLandsAreaMerged_9.setVisible(true);lyr_SaltLandLocations9_10.setVisible(true);
var layersList = [lyr_GoogleMap_0,lyr_OpenStreetMap_1,lyr_GoogleSatellite_2,lyr_TamilnaduDistricts_3,lyr_SEZsArea_4,lyr_SeaPorts_5,lyr_Airport_6,lyr_SEZsLocations49_7,lyr_SaltLandsAreaSplit_8,lyr_SaltLandsAreaMerged_9,lyr_SaltLandLocations9_10];
lyr_TamilnaduDistricts_3.set('fieldAliases', {'District_n': 'District_n', 'ed_distric': 'ed_distric', 'lgd_coed': 'lgd_coed', 'rd_lgd_cod': 'rd_lgd_cod', 'dis_tamil': 'dis_tamil', });
lyr_SEZsArea_4.set('fieldAliases', {'SEZ Name': 'SEZ Name', '🚢': '🚢', '🛧': '🛧', '🚆': '🚆', 'FY Year': 'FY Year', 'District': 'District', 'Type': 'Type', 'Status': 'Status', 'Number of Operational Units': 'Number of Operational Units', 'Export (Crore [INR])': 'Export (Crore [INR])', 'Employment': 'Employment', 'Investment (Crore[INR])': 'Investment (Crore[INR])', 'FDI Investment (Crore[INR])': 'FDI Investment (Crore[INR])', 'Total Land Area (Hectares)': 'Total Land Area (Hectares)', 'Land Area Available (Hectares)': 'Land Area Available (Hectares)', 'Total Builtup Area (Square Meters)': 'Total Builtup Area (Square Meters)', 'Builtup Area Available (Square Meters)': 'Builtup Area Available (Square Meters)', });
lyr_SeaPorts_5.set('fieldAliases', {'Port Name': 'Port Name', });
lyr_Airport_6.set('fieldAliases', {'Name': 'Name', });
lyr_SEZsLocations49_7.set('fieldAliases', {'SEZ Name': 'SEZ Name', });
lyr_SaltLandsAreaSplit_8.set('fieldAliases', {'Name': 'Name', 'Acres': 'Acres', 'Description': 'Description', });
lyr_SaltLandsAreaMerged_9.set('fieldAliases', {'Name': 'Name', 'Acres': 'Acres', 'Description': 'Description', });
lyr_SaltLandLocations9_10.set('fieldAliases', {'Name': 'Name', });
lyr_TamilnaduDistricts_3.set('fieldImages', {'District_n': 'TextEdit', 'ed_distric': 'TextEdit', 'lgd_coed': 'TextEdit', 'rd_lgd_cod': 'TextEdit', 'dis_tamil': 'TextEdit', });
lyr_SEZsArea_4.set('fieldImages', {'SEZ Name': 'TextEdit', '🚢': 'TextEdit', '🛧': 'TextEdit', '🚆': 'TextEdit', 'FY Year': 'TextEdit', 'District': 'TextEdit', 'Type': 'TextEdit', 'Status': 'TextEdit', 'Number of Operational Units': 'Range', 'Export (Crore [INR])': 'TextEdit', 'Employment': 'Range', 'Investment (Crore[INR])': 'TextEdit', 'FDI Investment (Crore[INR])': 'TextEdit', 'Total Land Area (Hectares)': 'TextEdit', 'Land Area Available (Hectares)': 'TextEdit', 'Total Builtup Area (Square Meters)': 'TextEdit', 'Builtup Area Available (Square Meters)': 'TextEdit', });
lyr_SeaPorts_5.set('fieldImages', {'Port Name': 'TextEdit', });
lyr_Airport_6.set('fieldImages', {'Name': 'TextEdit', });
lyr_SEZsLocations49_7.set('fieldImages', {'SEZ Name': 'TextEdit', });
lyr_SaltLandsAreaSplit_8.set('fieldImages', {'Name': 'TextEdit', 'Acres': 'TextEdit', 'Description': 'TextEdit', });
lyr_SaltLandsAreaMerged_9.set('fieldImages', {'Name': 'TextEdit', 'Acres': 'TextEdit', 'Description': 'TextEdit', });
lyr_SaltLandLocations9_10.set('fieldImages', {'Name': 'TextEdit', });
lyr_TamilnaduDistricts_3.set('fieldLabels', {'District_n': 'inline label - always visible', 'ed_distric': 'hidden field', 'lgd_coed': 'hidden field', 'rd_lgd_cod': 'hidden field', 'dis_tamil': 'hidden field', });
lyr_SEZsArea_4.set('fieldLabels', {'SEZ Name': 'inline label - always visible', '🚢': 'inline label - always visible', '🛧': 'inline label - always visible', '🚆': 'inline label - always visible', 'FY Year': 'inline label - always visible', 'District': 'inline label - always visible', 'Type': 'inline label - always visible', 'Status': 'inline label - always visible', 'Number of Operational Units': 'inline label - always visible', 'Export (Crore [INR])': 'inline label - always visible', 'Employment': 'inline label - always visible', 'Investment (Crore[INR])': 'inline label - always visible', 'FDI Investment (Crore[INR])': 'inline label - always visible', 'Total Land Area (Hectares)': 'inline label - always visible', 'Land Area Available (Hectares)': 'inline label - always visible', 'Total Builtup Area (Square Meters)': 'inline label - always visible', 'Builtup Area Available (Square Meters)': 'inline label - always visible', });
lyr_SeaPorts_5.set('fieldLabels', {'Port Name': 'no label', });
lyr_Airport_6.set('fieldLabels', {'Name': 'no label', });
lyr_SEZsLocations49_7.set('fieldLabels', {'SEZ Name': 'no label', });
lyr_SaltLandsAreaSplit_8.set('fieldLabels', {'Name': 'inline label - always visible', 'Acres': 'inline label - always visible', 'Description': 'inline label - always visible', });
lyr_SaltLandsAreaMerged_9.set('fieldLabels', {'Name': 'inline label - always visible', 'Acres': 'inline label - always visible', 'Description': 'inline label - always visible', });
lyr_SaltLandLocations9_10.set('fieldLabels', {'Name': 'no label', });
lyr_SaltLandLocations9_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});