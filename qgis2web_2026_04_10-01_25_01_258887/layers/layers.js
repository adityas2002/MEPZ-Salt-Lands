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
var format_PortArea_5 = new ol.format.GeoJSON();
var features_PortArea_5 = format_PortArea_5.readFeatures(json_PortArea_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PortArea_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortArea_5.addFeatures(features_PortArea_5);
var lyr_PortArea_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PortArea_5, 
                style: style_PortArea_5,
                popuplayertitle: 'Port Area',
                interactive: false,
                title: '<img src="styles/legend/PortArea_5.png" /> Port Area'
            });
var format_SeaPorts_6 = new ol.format.GeoJSON();
var features_SeaPorts_6 = format_SeaPorts_6.readFeatures(json_SeaPorts_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SeaPorts_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeaPorts_6.addFeatures(features_SeaPorts_6);
var lyr_SeaPorts_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SeaPorts_6, 
                style: style_SeaPorts_6,
                popuplayertitle: 'Sea Ports',
                interactive: false,
                title: '<img src="styles/legend/SeaPorts_6.png" /> Sea Ports'
            });
var format_Airport_7 = new ol.format.GeoJSON();
var features_Airport_7 = format_Airport_7.readFeatures(json_Airport_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Airport_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airport_7.addFeatures(features_Airport_7);
var lyr_Airport_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Airport_7, 
                style: style_Airport_7,
                popuplayertitle: 'Airport',
                interactive: false,
                title: '<img src="styles/legend/Airport_7.png" /> Airport'
            });
var format_Roads_8 = new ol.format.GeoJSON();
var features_Roads_8 = format_Roads_8.readFeatures(json_Roads_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_8.addFeatures(features_Roads_8);
var lyr_Roads_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_8, 
                style: style_Roads_8,
                popuplayertitle: 'Roads',
                interactive: false,
    title: 'Roads<br />\
    <img src="styles/legend/Roads_8_0.png" /> Approach Road<br />\
    <img src="styles/legend/Roads_8_1.png" /> Approach Road 2<br />\
    <img src="styles/legend/Roads_8_2.png" /> Chennai Peripheral Ring Road (Upcoming)<br />\
    <img src="styles/legend/Roads_8_3.png" /> Minjur Road<br />\
    <img src="styles/legend/Roads_8_4.png" /> SH 107<br />\
    <img src="styles/legend/Roads_8_5.png" /> Chennai ORR Link<br />\
    <img src="styles/legend/Roads_8_6.png" /> NH 16<br />\
    <img src="styles/legend/Roads_8_7.png" /> <br />' });
var format_ProposedHeavyEngineeringHubTIDCO_9 = new ol.format.GeoJSON();
var features_ProposedHeavyEngineeringHubTIDCO_9 = format_ProposedHeavyEngineeringHubTIDCO_9.readFeatures(json_ProposedHeavyEngineeringHubTIDCO_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProposedHeavyEngineeringHubTIDCO_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProposedHeavyEngineeringHubTIDCO_9.addFeatures(features_ProposedHeavyEngineeringHubTIDCO_9);
var lyr_ProposedHeavyEngineeringHubTIDCO_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProposedHeavyEngineeringHubTIDCO_9, 
                style: style_ProposedHeavyEngineeringHubTIDCO_9,
                popuplayertitle: 'Proposed Heavy Engineering Hub (TIDCO)',
                interactive: false,
                title: '<img src="styles/legend/ProposedHeavyEngineeringHubTIDCO_9.png" /> Proposed Heavy Engineering Hub (TIDCO)'
            });
var format_AllotedLandTIDCO_10 = new ol.format.GeoJSON();
var features_AllotedLandTIDCO_10 = format_AllotedLandTIDCO_10.readFeatures(json_AllotedLandTIDCO_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllotedLandTIDCO_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllotedLandTIDCO_10.addFeatures(features_AllotedLandTIDCO_10);
var lyr_AllotedLandTIDCO_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllotedLandTIDCO_10, 
                style: style_AllotedLandTIDCO_10,
                popuplayertitle: 'Alloted Land - TIDCO',
                interactive: false,
                title: '<img src="styles/legend/AllotedLandTIDCO_10.png" /> Alloted Land - TIDCO'
            });
var format_MEPZApplication_11 = new ol.format.GeoJSON();
var features_MEPZApplication_11 = format_MEPZApplication_11.readFeatures(json_MEPZApplication_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MEPZApplication_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MEPZApplication_11.addFeatures(features_MEPZApplication_11);
var lyr_MEPZApplication_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MEPZApplication_11, 
                style: style_MEPZApplication_11,
                popuplayertitle: 'MEPZ Application',
                interactive: false,
                title: '<img src="styles/legend/MEPZApplication_11.png" /> MEPZ Application'
            });
var format_MoPSWApplication_12 = new ol.format.GeoJSON();
var features_MoPSWApplication_12 = format_MoPSWApplication_12.readFeatures(json_MoPSWApplication_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MoPSWApplication_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoPSWApplication_12.addFeatures(features_MoPSWApplication_12);
var lyr_MoPSWApplication_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoPSWApplication_12, 
                style: style_MoPSWApplication_12,
                popuplayertitle: 'MoPSW Application',
                interactive: false,
                title: '<img src="styles/legend/MoPSWApplication_12.png" /> MoPSW Application'
            });
var format_TIDCOApplication_13 = new ol.format.GeoJSON();
var features_TIDCOApplication_13 = format_TIDCOApplication_13.readFeatures(json_TIDCOApplication_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TIDCOApplication_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIDCOApplication_13.addFeatures(features_TIDCOApplication_13);
var lyr_TIDCOApplication_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIDCOApplication_13, 
                style: style_TIDCOApplication_13,
                popuplayertitle: 'TIDCO Application',
                interactive: false,
                title: '<img src="styles/legend/TIDCOApplication_13.png" /> TIDCO Application'
            });
var format_SEZsLocations49_14 = new ol.format.GeoJSON();
var features_SEZsLocations49_14 = format_SEZsLocations49_14.readFeatures(json_SEZsLocations49_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEZsLocations49_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEZsLocations49_14.addFeatures(features_SEZsLocations49_14);
cluster_SEZsLocations49_14 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_SEZsLocations49_14
});
var lyr_SEZsLocations49_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_SEZsLocations49_14, 
                style: style_SEZsLocations49_14,
                popuplayertitle: 'SEZs Locations (49)',
                interactive: false,
                title: '<img src="styles/legend/SEZsLocations49_14.png" /> SEZs Locations (49)'
            });
var format_SaltLandsAreaMerged_15 = new ol.format.GeoJSON();
var features_SaltLandsAreaMerged_15 = format_SaltLandsAreaMerged_15.readFeatures(json_SaltLandsAreaMerged_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaltLandsAreaMerged_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaltLandsAreaMerged_15.addFeatures(features_SaltLandsAreaMerged_15);
var lyr_SaltLandsAreaMerged_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaltLandsAreaMerged_15, 
                style: style_SaltLandsAreaMerged_15,
                popuplayertitle: 'Salt Lands Area Merged',
                interactive: true,
                title: '<img src="styles/legend/SaltLandsAreaMerged_15.png" /> Salt Lands Area Merged'
            });
var format_SaltLandLocations9_16 = new ol.format.GeoJSON();
var features_SaltLandLocations9_16 = format_SaltLandLocations9_16.readFeatures(json_SaltLandLocations9_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaltLandLocations9_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaltLandLocations9_16.addFeatures(features_SaltLandLocations9_16);
var lyr_SaltLandLocations9_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaltLandLocations9_16, 
                style: style_SaltLandLocations9_16,
                popuplayertitle: 'Salt Land Locations (9)',
                interactive: false,
                title: '<img src="styles/legend/SaltLandLocations9_16.png" /> Salt Land Locations (9)'
            });

lyr_GoogleMap_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr_TamilnaduDistricts_3.setVisible(true);lyr_SEZsArea_4.setVisible(true);lyr_PortArea_5.setVisible(true);lyr_SeaPorts_6.setVisible(true);lyr_Airport_7.setVisible(false);lyr_Roads_8.setVisible(true);lyr_ProposedHeavyEngineeringHubTIDCO_9.setVisible(false);lyr_AllotedLandTIDCO_10.setVisible(false);lyr_MEPZApplication_11.setVisible(true);lyr_MoPSWApplication_12.setVisible(false);lyr_TIDCOApplication_13.setVisible(false);lyr_SEZsLocations49_14.setVisible(true);lyr_SaltLandsAreaMerged_15.setVisible(false);lyr_SaltLandLocations9_16.setVisible(true);
var layersList = [lyr_GoogleMap_0,lyr_OpenStreetMap_1,lyr_GoogleSatellite_2,lyr_TamilnaduDistricts_3,lyr_SEZsArea_4,lyr_PortArea_5,lyr_SeaPorts_6,lyr_Airport_7,lyr_Roads_8,lyr_ProposedHeavyEngineeringHubTIDCO_9,lyr_AllotedLandTIDCO_10,lyr_MEPZApplication_11,lyr_MoPSWApplication_12,lyr_TIDCOApplication_13,lyr_SEZsLocations49_14,lyr_SaltLandsAreaMerged_15,lyr_SaltLandLocations9_16];
lyr_TamilnaduDistricts_3.set('fieldAliases', {'District_n': 'District_n', 'ed_distric': 'ed_distric', 'lgd_coed': 'lgd_coed', 'rd_lgd_cod': 'rd_lgd_cod', 'dis_tamil': 'dis_tamil', });
lyr_SEZsArea_4.set('fieldAliases', {'SEZ Name': 'SEZ Name', '🚢': '🚢', '🛧': '🛧', '🚆': '🚆', 'FY Year': 'FY Year', 'District': 'District', 'Type': 'Type', 'Status': 'Status', 'Number of Operational Units': 'Number of Operational Units', 'Export (Crore [INR])': 'Export (Crore [INR])', 'Employment': 'Employment', 'Investment (Crore[INR])': 'Investment (Crore[INR])', 'FDI Investment (Crore[INR])': 'FDI Investment (Crore[INR])', 'Total Land Area (Hectares)': 'Total Land Area (Hectares)', 'Land Area Available (Hectares)': 'Land Area Available (Hectares)', 'Total Builtup Area (Square Meters)': 'Total Builtup Area (Square Meters)', 'Builtup Area Available (Square Meters)': 'Builtup Area Available (Square Meters)', });
lyr_PortArea_5.set('fieldAliases', {'Name': 'Name', });
lyr_SeaPorts_6.set('fieldAliases', {'Port Name': 'Port Name', });
lyr_Airport_7.set('fieldAliases', {'Name': 'Name', });
lyr_Roads_8.set('fieldAliases', {'Name': 'Name', });
lyr_ProposedHeavyEngineeringHubTIDCO_9.set('fieldAliases', {'Name': 'Name', });
lyr_AllotedLandTIDCO_10.set('fieldAliases', {'Name': 'Name', });
lyr_MEPZApplication_11.set('fieldAliases', {'Name': 'Name', });
lyr_MoPSWApplication_12.set('fieldAliases', {'Name': 'Name', });
lyr_TIDCOApplication_13.set('fieldAliases', {'Name': 'Name', });
lyr_SEZsLocations49_14.set('fieldAliases', {'SEZ Name': 'SEZ Name', });
lyr_SaltLandsAreaMerged_15.set('fieldAliases', {'Name': 'Name', });
lyr_SaltLandLocations9_16.set('fieldAliases', {'Name': 'Name', });
lyr_TamilnaduDistricts_3.set('fieldImages', {'District_n': 'TextEdit', 'ed_distric': 'TextEdit', 'lgd_coed': 'TextEdit', 'rd_lgd_cod': 'TextEdit', 'dis_tamil': 'TextEdit', });
lyr_SEZsArea_4.set('fieldImages', {'SEZ Name': 'TextEdit', '🚢': 'TextEdit', '🛧': 'TextEdit', '🚆': 'TextEdit', 'FY Year': 'TextEdit', 'District': 'TextEdit', 'Type': 'TextEdit', 'Status': 'TextEdit', 'Number of Operational Units': 'Range', 'Export (Crore [INR])': 'TextEdit', 'Employment': 'Range', 'Investment (Crore[INR])': 'TextEdit', 'FDI Investment (Crore[INR])': 'TextEdit', 'Total Land Area (Hectares)': 'TextEdit', 'Land Area Available (Hectares)': 'TextEdit', 'Total Builtup Area (Square Meters)': 'TextEdit', 'Builtup Area Available (Square Meters)': 'TextEdit', });
lyr_PortArea_5.set('fieldImages', {'Name': 'TextEdit', });
lyr_SeaPorts_6.set('fieldImages', {'Port Name': 'TextEdit', });
lyr_Airport_7.set('fieldImages', {'Name': 'TextEdit', });
lyr_Roads_8.set('fieldImages', {'Name': 'TextEdit', });
lyr_ProposedHeavyEngineeringHubTIDCO_9.set('fieldImages', {'Name': '', });
lyr_AllotedLandTIDCO_10.set('fieldImages', {'Name': 'TextEdit', });
lyr_MEPZApplication_11.set('fieldImages', {'Name': 'TextEdit', });
lyr_MoPSWApplication_12.set('fieldImages', {'Name': 'TextEdit', });
lyr_TIDCOApplication_13.set('fieldImages', {'Name': 'TextEdit', });
lyr_SEZsLocations49_14.set('fieldImages', {'SEZ Name': 'TextEdit', });
lyr_SaltLandsAreaMerged_15.set('fieldImages', {'Name': 'TextEdit', });
lyr_SaltLandLocations9_16.set('fieldImages', {'Name': 'TextEdit', });
lyr_TamilnaduDistricts_3.set('fieldLabels', {'District_n': 'inline label - always visible', 'ed_distric': 'hidden field', 'lgd_coed': 'hidden field', 'rd_lgd_cod': 'hidden field', 'dis_tamil': 'hidden field', });
lyr_SEZsArea_4.set('fieldLabels', {'SEZ Name': 'inline label - visible with data', '🚢': 'inline label - always visible', '🛧': 'inline label - always visible', '🚆': 'inline label - always visible', 'FY Year': 'inline label - always visible', 'District': 'inline label - always visible', 'Type': 'inline label - always visible', 'Status': 'inline label - always visible', 'Number of Operational Units': 'inline label - always visible', 'Export (Crore [INR])': 'inline label - always visible', 'Employment': 'inline label - always visible', 'Investment (Crore[INR])': 'inline label - always visible', 'FDI Investment (Crore[INR])': 'inline label - always visible', 'Total Land Area (Hectares)': 'inline label - always visible', 'Land Area Available (Hectares)': 'inline label - always visible', 'Total Builtup Area (Square Meters)': 'inline label - always visible', 'Builtup Area Available (Square Meters)': 'inline label - always visible', });
lyr_PortArea_5.set('fieldLabels', {'Name': 'no label', });
lyr_SeaPorts_6.set('fieldLabels', {'Port Name': 'no label', });
lyr_Airport_7.set('fieldLabels', {'Name': 'no label', });
lyr_Roads_8.set('fieldLabels', {'Name': 'no label', });
lyr_ProposedHeavyEngineeringHubTIDCO_9.set('fieldLabels', {'Name': 'no label', });
lyr_AllotedLandTIDCO_10.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_MEPZApplication_11.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_MoPSWApplication_12.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_TIDCOApplication_13.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_SEZsLocations49_14.set('fieldLabels', {'SEZ Name': 'no label', });
lyr_SaltLandsAreaMerged_15.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_SaltLandLocations9_16.set('fieldLabels', {'Name': 'no label', });
lyr_SaltLandLocations9_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});