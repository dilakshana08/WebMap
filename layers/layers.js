var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Study_Region_1 = new ol.format.GeoJSON();
var features_Study_Region_1 = format_Study_Region_1.readFeatures(json_Study_Region_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Study_Region_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Study_Region_1.addFeatures(features_Study_Region_1);
var lyr_Study_Region_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Study_Region_1, 
                style: style_Study_Region_1,
                popuplayertitle: 'Study_Region',
                interactive: true,
                title: '<img src="styles/legend/Study_Region_1.png" /> Study_Region'
            });
var lyr_Flouride_Level_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Flouride_Level<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Flouride_Level_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8804709.517608, 584146.468928, 9242849.837001, 1161925.310522]
        })
    });
var lyr_Nitrate_level_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nitrate_level<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Nitrate_level_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8804709.517594, 584146.468945, 9242849.836966, 1161925.310524]
        })
    });
var lyr_PH_Level_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PH_Level<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PH_Level_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8804709.517594, 584146.468945, 9242849.836966, 1161925.310524]
        })
    });
var lyr_TDS_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TDS<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TDS_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8804709.517594, 584146.468945, 9242849.836966, 1161925.310524]
        })
    });
var lyr_Total_Hardness_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Total_Hardness<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Total_Hardness_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8804709.517608, 584146.468928, 9242849.837001, 1161925.310522]
        })
    });
var format_RO_location_7 = new ol.format.GeoJSON();
var features_RO_location_7 = format_RO_location_7.readFeatures(json_RO_location_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RO_location_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RO_location_7.addFeatures(features_RO_location_7);
cluster_RO_location_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_RO_location_7
});
var lyr_RO_location_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RO_location_7, 
                style: style_RO_location_7,
                popuplayertitle: 'RO_location',
                interactive: true,
                title: '<img src="styles/legend/RO_location_7.png" /> RO_location'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Study_Region_1.setVisible(true);lyr_Flouride_Level_2.setVisible(true);lyr_Nitrate_level_3.setVisible(true);lyr_PH_Level_4.setVisible(true);lyr_TDS_5.setVisible(true);lyr_Total_Hardness_6.setVisible(true);lyr_RO_location_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Study_Region_1,lyr_Flouride_Level_2,lyr_Nitrate_level_3,lyr_PH_Level_4,lyr_TDS_5,lyr_Total_Hardness_6,lyr_RO_location_7];
lyr_Study_Region_1.set('fieldAliases', {'PROVINCE_N': 'Province Name', 'DISTRICT_N': 'District Name', 'DSD_N': 'DSD Name', 'GND_N': 'GND Name', });
lyr_RO_location_7.set('fieldAliases', {'PROVINCE_N': 'Province Name', 'DISTRICT_N': 'District Name', 'DSD_N': 'DSD Name', 'GND_N': 'GND Name', 'TOT_POP': 'GND Population', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'RO_plant_data_Capacity (L/day)': 'Capacity (L/day)', 'RO_plant_data_Operational Status': 'Operational Status', 'RO_plant_data_pH': 'pH', 'RO_plant_data_TDS (mg/L)': 'TDS (mg/L)', 'RO_plant_data_Fluoride (mg/L)': 'Fluoride (mg/L)', 'RO_plant_data_Nitrate (mg/L)': 'Nitrate (mg/L)', });
lyr_Study_Region_1.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DSD_N': 'TextEdit', 'GND_N': 'TextEdit', });
lyr_RO_location_7.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DSD_N': 'TextEdit', 'GND_N': 'TextEdit', 'TOT_POP': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'RO_plant_data_Capacity (L/day)': 'Range', 'RO_plant_data_Operational Status': 'TextEdit', 'RO_plant_data_pH': 'TextEdit', 'RO_plant_data_TDS (mg/L)': 'Range', 'RO_plant_data_Fluoride (mg/L)': 'TextEdit', 'RO_plant_data_Nitrate (mg/L)': 'Range', });
lyr_Study_Region_1.set('fieldLabels', {'PROVINCE_N': 'inline label - always visible', 'DISTRICT_N': 'inline label - always visible', 'DSD_N': 'inline label - always visible', 'GND_N': 'inline label - always visible', });
lyr_RO_location_7.set('fieldLabels', {'PROVINCE_N': 'hidden field', 'DISTRICT_N': 'hidden field', 'DSD_N': 'hidden field', 'GND_N': 'hidden field', 'TOT_POP': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'RO_plant_data_Capacity (L/day)': 'inline label - always visible', 'RO_plant_data_Operational Status': 'inline label - always visible', 'RO_plant_data_pH': 'inline label - always visible', 'RO_plant_data_TDS (mg/L)': 'inline label - always visible', 'RO_plant_data_Fluoride (mg/L)': 'inline label - always visible', 'RO_plant_data_Nitrate (mg/L)': 'inline label - always visible', });
lyr_RO_location_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});