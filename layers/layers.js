var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LongTermCycleNetwork_1 = new ol.format.GeoJSON();
var features_LongTermCycleNetwork_1 = format_LongTermCycleNetwork_1.readFeatures(json_LongTermCycleNetwork_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LongTermCycleNetwork_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LongTermCycleNetwork_1.addFeatures(features_LongTermCycleNetwork_1);
var lyr_LongTermCycleNetwork_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LongTermCycleNetwork_1, 
                style: style_LongTermCycleNetwork_1,
                interactive: false,
    title: 'Long-Term Cycle Network<br />\
    <img src="styles/legend/LongTermCycleNetwork_1_0.png" /> Local Route<br />\
    <img src="styles/legend/LongTermCycleNetwork_1_1.png" /> Primary Route<br />\
    <img src="styles/legend/LongTermCycleNetwork_1_2.png" /> Secondary Route<br />\
    <img src="styles/legend/LongTermCycleNetwork_1_3.png" /> Tourist Trail<br />'
        });
var format_SpeedLimit_2 = new ol.format.GeoJSON();
var features_SpeedLimit_2 = format_SpeedLimit_2.readFeatures(json_SpeedLimit_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpeedLimit_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpeedLimit_2.addFeatures(features_SpeedLimit_2);
var lyr_SpeedLimit_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpeedLimit_2, 
                style: style_SpeedLimit_2,
                interactive: false,
    title: 'Speed Limit<br />\
    <img src="styles/legend/SpeedLimit_2_0.png" /> 100km/h<br />\
    <img src="styles/legend/SpeedLimit_2_1.png" /> 10km/h<br />\
    <img src="styles/legend/SpeedLimit_2_2.png" /> 110km/h<br />\
    <img src="styles/legend/SpeedLimit_2_3.png" /> 20km/h<br />\
    <img src="styles/legend/SpeedLimit_2_4.png" /> 30km/h<br />\
    <img src="styles/legend/SpeedLimit_2_5.png" /> 40km/h<br />\
    <img src="styles/legend/SpeedLimit_2_6.png" /> 50km/h<br />\
    <img src="styles/legend/SpeedLimit_2_7.png" /> 60km/h<br />\
    <img src="styles/legend/SpeedLimit_2_8.png" /> 70km/h<br />\
    <img src="styles/legend/SpeedLimit_2_9.png" /> 80km/h<br />\
    <img src="styles/legend/SpeedLimit_2_10.png" /> 90km/h<br />'
        });
var format_2017_3 = new ol.format.GeoJSON();
var features_2017_3 = format_2017_3.readFeatures(json_2017_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2017_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2017_3.addFeatures(features_2017_3);
var lyr_2017_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2017_3, 
                style: style_2017_3,
                interactive: true,
    title: '2017<br />\
    <img src="styles/legend/2017_3_0.png" /> January<br />\
    <img src="styles/legend/2017_3_1.png" /> February<br />\
    <img src="styles/legend/2017_3_2.png" /> March<br />\
    <img src="styles/legend/2017_3_3.png" /> April<br />\
    <img src="styles/legend/2017_3_4.png" /> May<br />\
    <img src="styles/legend/2017_3_5.png" /> June<br />\
    <img src="styles/legend/2017_3_6.png" /> July<br />\
    <img src="styles/legend/2017_3_7.png" /> August<br />\
    <img src="styles/legend/2017_3_8.png" /> September<br />\
    <img src="styles/legend/2017_3_9.png" /> October<br />\
    <img src="styles/legend/2017_3_10.png" /> November<br />\
    <img src="styles/legend/2017_3_11.png" /> December<br />'
        });
var format_2018_4 = new ol.format.GeoJSON();
var features_2018_4 = format_2018_4.readFeatures(json_2018_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2018_4.addFeatures(features_2018_4);
var lyr_2018_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2018_4, 
                style: style_2018_4,
                interactive: true,
    title: '2018<br />\
    <img src="styles/legend/2018_4_0.png" /> January<br />\
    <img src="styles/legend/2018_4_1.png" /> February<br />\
    <img src="styles/legend/2018_4_2.png" /> March<br />\
    <img src="styles/legend/2018_4_3.png" /> April<br />\
    <img src="styles/legend/2018_4_4.png" /> May<br />\
    <img src="styles/legend/2018_4_5.png" /> June<br />\
    <img src="styles/legend/2018_4_6.png" /> July<br />\
    <img src="styles/legend/2018_4_7.png" /> August<br />\
    <img src="styles/legend/2018_4_8.png" /> September<br />\
    <img src="styles/legend/2018_4_9.png" /> October<br />\
    <img src="styles/legend/2018_4_10.png" /> November<br />\
    <img src="styles/legend/2018_4_11.png" /> December<br />'
        });
var format_2019_5 = new ol.format.GeoJSON();
var features_2019_5 = format_2019_5.readFeatures(json_2019_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019_5.addFeatures(features_2019_5);
var lyr_2019_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2019_5, 
                style: style_2019_5,
                interactive: true,
    title: '2019<br />\
    <img src="styles/legend/2019_5_0.png" /> January<br />\
    <img src="styles/legend/2019_5_1.png" /> February<br />\
    <img src="styles/legend/2019_5_2.png" /> March<br />\
    <img src="styles/legend/2019_5_3.png" /> April<br />\
    <img src="styles/legend/2019_5_4.png" /> May<br />\
    <img src="styles/legend/2019_5_5.png" /> June<br />\
    <img src="styles/legend/2019_5_6.png" /> July<br />\
    <img src="styles/legend/2019_5_7.png" /> August<br />\
    <img src="styles/legend/2019_5_8.png" /> September<br />\
    <img src="styles/legend/2019_5_9.png" /> October<br />\
    <img src="styles/legend/2019_5_10.png" /> November<br />\
    <img src="styles/legend/2019_5_11.png" /> December<br />'
        });
var format_2020_6 = new ol.format.GeoJSON();
var features_2020_6 = format_2020_6.readFeatures(json_2020_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_6.addFeatures(features_2020_6);
var lyr_2020_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2020_6, 
                style: style_2020_6,
                interactive: true,
    title: '2020<br />\
    <img src="styles/legend/2020_6_0.png" /> January<br />\
    <img src="styles/legend/2020_6_1.png" /> February<br />\
    <img src="styles/legend/2020_6_2.png" /> March<br />\
    <img src="styles/legend/2020_6_3.png" /> April<br />\
    <img src="styles/legend/2020_6_4.png" /> May<br />\
    <img src="styles/legend/2020_6_5.png" /> June<br />\
    <img src="styles/legend/2020_6_6.png" /> July<br />\
    <img src="styles/legend/2020_6_7.png" /> August<br />\
    <img src="styles/legend/2020_6_8.png" /> September<br />\
    <img src="styles/legend/2020_6_9.png" /> October<br />\
    <img src="styles/legend/2020_6_10.png" /> November<br />\
    <img src="styles/legend/2020_6_11.png" /> December<br />'
        });
var format_2021_7 = new ol.format.GeoJSON();
var features_2021_7 = format_2021_7.readFeatures(json_2021_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_7.addFeatures(features_2021_7);
var lyr_2021_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021_7, 
                style: style_2021_7,
                interactive: true,
    title: '2021<br />\
    <img src="styles/legend/2021_7_0.png" /> January<br />\
    <img src="styles/legend/2021_7_1.png" /> February<br />\
    <img src="styles/legend/2021_7_2.png" /> March<br />\
    <img src="styles/legend/2021_7_3.png" /> April<br />\
    <img src="styles/legend/2021_7_4.png" /> May<br />\
    <img src="styles/legend/2021_7_5.png" /> June<br />\
    <img src="styles/legend/2021_7_6.png" /> July<br />\
    <img src="styles/legend/2021_7_7.png" /> August<br />\
    <img src="styles/legend/2021_7_8.png" /> September<br />\
    <img src="styles/legend/2021_7_9.png" /> October<br />\
    <img src="styles/legend/2021_7_10.png" /> November<br />\
    <img src="styles/legend/2021_7_11.png" /> December<br />'
        });
var format_CrashTimePeriod_8 = new ol.format.GeoJSON();
var features_CrashTimePeriod_8 = format_CrashTimePeriod_8.readFeatures(json_CrashTimePeriod_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CrashTimePeriod_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CrashTimePeriod_8.addFeatures(features_CrashTimePeriod_8);
var lyr_CrashTimePeriod_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CrashTimePeriod_8, 
                style: style_CrashTimePeriod_8,
                interactive: true,
    title: 'Crash Time Period<br />\
    <img src="styles/legend/CrashTimePeriod_8_0.png" /> 12:00AM to 03:59AM<br />\
    <img src="styles/legend/CrashTimePeriod_8_1.png" /> 04:00AM to 07:59AM<br />\
    <img src="styles/legend/CrashTimePeriod_8_2.png" /> 08:00AM to 11:59AM<br />\
    <img src="styles/legend/CrashTimePeriod_8_3.png" /> 12:00PM to 03:59PM<br />\
    <img src="styles/legend/CrashTimePeriod_8_4.png" /> 04:00PM to 07:59PM<br />\
    <img src="styles/legend/CrashTimePeriod_8_5.png" /> 08:00PM to 11:59PM<br />'
        });
var format_IncidentType_9 = new ol.format.GeoJSON();
var features_IncidentType_9 = format_IncidentType_9.readFeatures(json_IncidentType_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IncidentType_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IncidentType_9.addFeatures(features_IncidentType_9);
var lyr_IncidentType_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IncidentType_9, 
                style: style_IncidentType_9,
                interactive: false,
    title: 'Incident Type<br />\
    <img src="styles/legend/IncidentType_9_0.png" /> Bike & Heavy Truck<br />\
    <img src="styles/legend/IncidentType_9_1.png" /> Bike & Motorcycle<br />\
    <img src="styles/legend/IncidentType_9_2.png" /> Bike & Other<br />\
    <img src="styles/legend/IncidentType_9_3.png" /> Bike & Pedestrian<br />\
    <img src="styles/legend/IncidentType_9_4.png" /> Bike & Truck<br />\
    <img src="styles/legend/IncidentType_9_5.png" /> Bike only<br />\
    <img src="styles/legend/IncidentType_9_6.png" /> Bike, Heavy Truck & Other<br />\
    <img src="styles/legend/IncidentType_9_7.png" /> Bike, Heavy Truck & Pedestrian<br />\
    <img src="styles/legend/IncidentType_9_8.png" /> Bike, Motorcycle & Pedestrian<br />\
    <img src="styles/legend/IncidentType_9_9.png" /> Bike, Other & Pedestrian<br />\
    <img src="styles/legend/IncidentType_9_10.png" /> Bike, Truck & Other<br />\
    <img src="styles/legend/IncidentType_9_11.png" /> Bike, Truck, Pedestrian<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_LongTermCycleNetwork_1.setVisible(true);lyr_SpeedLimit_2.setVisible(true);lyr_2017_3.setVisible(true);lyr_2018_4.setVisible(true);lyr_2019_5.setVisible(true);lyr_2020_6.setVisible(true);lyr_2021_7.setVisible(true);lyr_CrashTimePeriod_8.setVisible(true);lyr_IncidentType_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LongTermCycleNetwork_1,lyr_SpeedLimit_2,lyr_2017_3,lyr_2018_4,lyr_2019_5,lyr_2020_6,lyr_2021_7,lyr_CrashTimePeriod_8,lyr_IncidentType_9];
lyr_LongTermCycleNetwork_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Route_ID': 'Route_ID', 'LTCN_Name': 'LTCN_Name', 'LGA_Name': 'LGA_Name', 'Hierarchy': 'Hierarchy', 'Endorsed': 'Endorsed', 'Date_Endor': 'Date_Endor', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', });
lyr_SpeedLimit_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ROAD': 'ROAD', 'ROAD_NAME': 'ROAD_NAME', 'COMMON_USA': 'COMMON_USA', 'START_SLK': 'START_SLK', 'END_SLK': 'END_SLK', 'CWY': 'CWY', 'START_TRUE': 'START_TRUE', 'END_TRUE_D': 'END_TRUE_D', 'NETWORK_TY': 'NETWORK_TY', 'RA_NO': 'RA_NO', 'RA_NAME': 'RA_NAME', 'LG_NO': 'LG_NO', 'LG_NAME': 'LG_NAME', 'SPEED_LIMI': 'SPEED_LIMI', 'ROUTE_NE_I': 'ROUTE_NE_I', 'GEOLOCSTLe': 'GEOLOCSTLe', });
lyr_2017_3.set('fieldAliases', {'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'CRASH_YEAR': 'CRASH_YEAR', 'CRASH_MONTH': 'CRASH_MONTH', 'CRASH_PERIOD': 'CRASH_PERIOD', 'SEVERITY': 'SEVERITY', 'TOTAL_BIKE_INVOLVED': 'TOTAL_BIKE_INVOLVED', 'TOTAL_TRUCK_INVOLVED': 'TOTAL_TRUCK_INVOLVED', 'TOTAL_HEAVY_TRUCK_INVOLVED': 'TOTAL_HEAVY_TRUCK_INVOLVED', 'TOTAL_MOTOR_CYCLE_INVOLVED': 'TOTAL_MOTOR_CYCLE_INVOLVED', 'TOTAL_OTHER_VEHICLES_INVOLVED': 'TOTAL_OTHER_VEHICLES_INVOLVED', 'TOTAL_PEDESTRIANS_INVOLVED': 'TOTAL_PEDESTRIANS_INVOLVED', 'CRASH_TYPE': 'CRASH_TYPE', });
lyr_2018_4.set('fieldAliases', {'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'CRASH_YEAR': 'CRASH_YEAR', 'CRASH_MONTH': 'CRASH_MONTH', 'CRASH_PERIOD': 'CRASH_PERIOD', 'SEVERITY': 'SEVERITY', 'TOTAL_BIKE_INVOLVED': 'TOTAL_BIKE_INVOLVED', 'TOTAL_TRUCK_INVOLVED': 'TOTAL_TRUCK_INVOLVED', 'TOTAL_HEAVY_TRUCK_INVOLVED': 'TOTAL_HEAVY_TRUCK_INVOLVED', 'TOTAL_MOTOR_CYCLE_INVOLVED': 'TOTAL_MOTOR_CYCLE_INVOLVED', 'TOTAL_OTHER_VEHICLES_INVOLVED': 'TOTAL_OTHER_VEHICLES_INVOLVED', 'TOTAL_PEDESTRIANS_INVOLVED': 'TOTAL_PEDESTRIANS_INVOLVED', 'CRASH_TYPE': 'CRASH_TYPE', });
lyr_2019_5.set('fieldAliases', {'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'CRASH_YEAR': 'CRASH_YEAR', 'CRASH_MONTH': 'CRASH_MONTH', 'CRASH_PERIOD': 'CRASH_PERIOD', 'SEVERITY': 'SEVERITY', 'TOTAL_BIKE_INVOLVED': 'TOTAL_BIKE_INVOLVED', 'TOTAL_TRUCK_INVOLVED': 'TOTAL_TRUCK_INVOLVED', 'TOTAL_HEAVY_TRUCK_INVOLVED': 'TOTAL_HEAVY_TRUCK_INVOLVED', 'TOTAL_MOTOR_CYCLE_INVOLVED': 'TOTAL_MOTOR_CYCLE_INVOLVED', 'TOTAL_OTHER_VEHICLES_INVOLVED': 'TOTAL_OTHER_VEHICLES_INVOLVED', 'TOTAL_PEDESTRIANS_INVOLVED': 'TOTAL_PEDESTRIANS_INVOLVED', 'CRASH_TYPE': 'CRASH_TYPE', });
lyr_2020_6.set('fieldAliases', {'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'CRASH_YEAR': 'CRASH_YEAR', 'CRASH_MONTH': 'CRASH_MONTH', 'CRASH_PERIOD': 'CRASH_PERIOD', 'SEVERITY': 'SEVERITY', 'TOTAL_BIKE_INVOLVED': 'TOTAL_BIKE_INVOLVED', 'TOTAL_TRUCK_INVOLVED': 'TOTAL_TRUCK_INVOLVED', 'TOTAL_HEAVY_TRUCK_INVOLVED': 'TOTAL_HEAVY_TRUCK_INVOLVED', 'TOTAL_MOTOR_CYCLE_INVOLVED': 'TOTAL_MOTOR_CYCLE_INVOLVED', 'TOTAL_OTHER_VEHICLES_INVOLVED': 'TOTAL_OTHER_VEHICLES_INVOLVED', 'TOTAL_PEDESTRIANS_INVOLVED': 'TOTAL_PEDESTRIANS_INVOLVED', 'CRASH_TYPE': 'CRASH_TYPE', });
lyr_2021_7.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'CRASH_YEAR': 'CRASH_YEAR', 'CRASH_MONTH': 'CRASH_MONTH', 'CRASH_PERIOD': 'CRASH_PERIOD', 'SEVERITY': 'SEVERITY', 'TOTAL_BIKE_INVOLVED': 'TOTAL_BIKE_INVOLVED', 'TOTAL_TRUCK_INVOLVED': 'TOTAL_TRUCK_INVOLVED', 'TOTAL_HEAVY_TRUCK_INVOLVED': 'TOTAL_HEAVY_TRUCK_INVOLVED', 'TOTAL_MOTOR_CYCLE_INVOLVED': 'TOTAL_MOTOR_CYCLE_INVOLVED', 'TOTAL_OTHER_VEHICLES_INVOLVED': 'TOTAL_OTHER_VEHICLES_INVOLVED', 'TOTAL_PEDESTRIANS_INVOLVED': 'TOTAL_PEDESTRIANS_INVOLVED', 'CRASH_TYPE': 'CRASH_TYPE', });
lyr_CrashTimePeriod_8.set('fieldAliases', {'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'CRASH_YEAR': 'CRASH_YEAR', 'CRASH_MONTH': 'CRASH_MONTH', 'CRASH_PERIOD': 'CRASH_PERIOD', 'SEVERITY': 'SEVERITY', 'TOTAL_BIKE_INVOLVED': 'TOTAL_BIKE_INVOLVED', 'TOTAL_TRUCK_INVOLVED': 'TOTAL_TRUCK_INVOLVED', 'TOTAL_HEAVY_TRUCK_INVOLVED': 'TOTAL_HEAVY_TRUCK_INVOLVED', 'TOTAL_MOTOR_CYCLE_INVOLVED': 'TOTAL_MOTOR_CYCLE_INVOLVED', 'TOTAL_OTHER_VEHICLES_INVOLVED': 'TOTAL_OTHER_VEHICLES_INVOLVED', 'TOTAL_PEDESTRIANS_INVOLVED': 'TOTAL_PEDESTRIANS_INVOLVED', 'CRASH_TYPE': 'CRASH_TYPE', });
lyr_IncidentType_9.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'ROAD_NAME': 'ROAD_NAME', 'COMMON_ROAD_NAME': 'COMMON_ROAD_NAME', 'INTERSECTION_NO': 'INTERSECTION_NO', 'INTERSECTION_DESC': 'INTERSECTION_DESC', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'CRASH_DATE': 'CRASH_DATE', 'CRASH_YEAR': 'CRASH_YEAR', 'CRASH_MONTH': 'CRASH_MONTH', 'CRASH_PERIOD': 'CRASH_PERIOD', 'ACCIDENT_TYPE': 'ACCIDENT_TYPE', 'SEVERITY': 'SEVERITY', 'TOTAL_BIKE_INVOLVED': 'TOTAL_BIKE_INVOLVED', 'TOTAL_TRUCK_INVOLVED': 'TOTAL_TRUCK_INVOLVED', 'TOTAL_HEAVY_TRUCK_INVOLVED': 'TOTAL_HEAVY_TRUCK_INVOLVED', 'TOTAL_MOTOR_CYCLE_INVOLVED': 'TOTAL_MOTOR_CYCLE_INVOLVED', 'TOTAL_OTHER_VEHICLES_INVOLVED': 'TOTAL_OTHER_VEHICLES_INVOLVED', 'TOTAL_PEDESTRIANS_INVOLVED': 'TOTAL_PEDESTRIANS_INVOLVED', 'CRASH_TYPE': 'CRASH_TYPE', });
lyr_LongTermCycleNetwork_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Route_ID': 'Range', 'LTCN_Name': 'TextEdit', 'LGA_Name': 'TextEdit', 'Hierarchy': 'TextEdit', 'Endorsed': 'TextEdit', 'Date_Endor': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_SpeedLimit_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'ROAD': 'TextEdit', 'ROAD_NAME': 'TextEdit', 'COMMON_USA': 'TextEdit', 'START_SLK': 'TextEdit', 'END_SLK': 'TextEdit', 'CWY': 'TextEdit', 'START_TRUE': 'TextEdit', 'END_TRUE_D': 'TextEdit', 'NETWORK_TY': 'TextEdit', 'RA_NO': 'TextEdit', 'RA_NAME': 'TextEdit', 'LG_NO': 'TextEdit', 'LG_NAME': 'TextEdit', 'SPEED_LIMI': 'TextEdit', 'ROUTE_NE_I': 'Range', 'GEOLOCSTLe': 'TextEdit', });
lyr_2017_3.set('fieldImages', {'LONGITUDE': 'Hidden', 'LATITUDE': 'Hidden', 'CRASH_YEAR': 'DateTime', 'CRASH_MONTH': 'TextEdit', 'CRASH_PERIOD': 'TextEdit', 'SEVERITY': 'TextEdit', 'TOTAL_BIKE_INVOLVED': 'Hidden', 'TOTAL_TRUCK_INVOLVED': 'Hidden', 'TOTAL_HEAVY_TRUCK_INVOLVED': 'Hidden', 'TOTAL_MOTOR_CYCLE_INVOLVED': 'Hidden', 'TOTAL_OTHER_VEHICLES_INVOLVED': 'Hidden', 'TOTAL_PEDESTRIANS_INVOLVED': 'Hidden', 'CRASH_TYPE': 'TextEdit', });
lyr_2018_4.set('fieldImages', {'LONGITUDE': 'Hidden', 'LATITUDE': 'Hidden', 'CRASH_YEAR': 'DateTime', 'CRASH_MONTH': 'TextEdit', 'CRASH_PERIOD': 'TextEdit', 'SEVERITY': 'TextEdit', 'TOTAL_BIKE_INVOLVED': 'Hidden', 'TOTAL_TRUCK_INVOLVED': 'Hidden', 'TOTAL_HEAVY_TRUCK_INVOLVED': 'Hidden', 'TOTAL_MOTOR_CYCLE_INVOLVED': 'Hidden', 'TOTAL_OTHER_VEHICLES_INVOLVED': 'Hidden', 'TOTAL_PEDESTRIANS_INVOLVED': 'Hidden', 'CRASH_TYPE': 'TextEdit', });
lyr_2019_5.set('fieldImages', {'LONGITUDE': 'Hidden', 'LATITUDE': 'Hidden', 'CRASH_YEAR': 'DateTime', 'CRASH_MONTH': 'TextEdit', 'CRASH_PERIOD': 'TextEdit', 'SEVERITY': 'TextEdit', 'TOTAL_BIKE_INVOLVED': 'Hidden', 'TOTAL_TRUCK_INVOLVED': 'Hidden', 'TOTAL_HEAVY_TRUCK_INVOLVED': 'Hidden', 'TOTAL_MOTOR_CYCLE_INVOLVED': 'Hidden', 'TOTAL_OTHER_VEHICLES_INVOLVED': 'Hidden', 'TOTAL_PEDESTRIANS_INVOLVED': 'Hidden', 'CRASH_TYPE': 'TextEdit', });
lyr_2020_6.set('fieldImages', {'LONGITUDE': 'Hidden', 'LATITUDE': 'Hidden', 'CRASH_YEAR': 'DateTime', 'CRASH_MONTH': 'TextEdit', 'CRASH_PERIOD': 'TextEdit', 'SEVERITY': 'TextEdit', 'TOTAL_BIKE_INVOLVED': 'Hidden', 'TOTAL_TRUCK_INVOLVED': 'Hidden', 'TOTAL_HEAVY_TRUCK_INVOLVED': 'Hidden', 'TOTAL_MOTOR_CYCLE_INVOLVED': 'Hidden', 'TOTAL_OTHER_VEHICLES_INVOLVED': 'Hidden', 'TOTAL_PEDESTRIANS_INVOLVED': 'Hidden', 'CRASH_TYPE': 'TextEdit', });
lyr_2021_7.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'LONGITUDE': 'Hidden', 'LATITUDE': 'Hidden', 'CRASH_YEAR': 'DateTime', 'CRASH_MONTH': 'TextEdit', 'CRASH_PERIOD': 'TextEdit', 'SEVERITY': 'TextEdit', 'TOTAL_BIKE_INVOLVED': 'Hidden', 'TOTAL_TRUCK_INVOLVED': 'Hidden', 'TOTAL_HEAVY_TRUCK_INVOLVED': 'Hidden', 'TOTAL_MOTOR_CYCLE_INVOLVED': 'Hidden', 'TOTAL_OTHER_VEHICLES_INVOLVED': 'Hidden', 'TOTAL_PEDESTRIANS_INVOLVED': 'Hidden', 'CRASH_TYPE': 'TextEdit', });
lyr_CrashTimePeriod_8.set('fieldImages', {'LONGITUDE': 'Hidden', 'LATITUDE': 'Hidden', 'CRASH_YEAR': 'DateTime', 'CRASH_MONTH': 'TextEdit', 'CRASH_PERIOD': 'TextEdit', 'SEVERITY': 'TextEdit', 'TOTAL_BIKE_INVOLVED': 'Hidden', 'TOTAL_TRUCK_INVOLVED': 'Hidden', 'TOTAL_HEAVY_TRUCK_INVOLVED': 'Hidden', 'TOTAL_MOTOR_CYCLE_INVOLVED': 'Hidden', 'TOTAL_OTHER_VEHICLES_INVOLVED': 'Hidden', 'TOTAL_PEDESTRIANS_INVOLVED': 'Hidden', 'CRASH_TYPE': 'TextEdit', });
lyr_IncidentType_9.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'ROAD_NAME': 'TextEdit', 'COMMON_ROAD_NAME': 'TextEdit', 'INTERSECTION_NO': 'Range', 'INTERSECTION_DESC': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', 'CRASH_DATE': 'TextEdit', 'CRASH_YEAR': 'Range', 'CRASH_MONTH': 'TextEdit', 'CRASH_PERIOD': 'TextEdit', 'ACCIDENT_TYPE': 'TextEdit', 'SEVERITY': 'TextEdit', 'TOTAL_BIKE_INVOLVED': 'Range', 'TOTAL_TRUCK_INVOLVED': 'CheckBox', 'TOTAL_HEAVY_TRUCK_INVOLVED': 'CheckBox', 'TOTAL_MOTOR_CYCLE_INVOLVED': 'CheckBox', 'TOTAL_OTHER_VEHICLES_INVOLVED': 'Range', 'TOTAL_PEDESTRIANS_INVOLVED': 'Range', 'CRASH_TYPE': 'TextEdit', });
lyr_LongTermCycleNetwork_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Route_ID': 'no label', 'LTCN_Name': 'no label', 'LGA_Name': 'no label', 'Hierarchy': 'no label', 'Endorsed': 'no label', 'Date_Endor': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', });
lyr_SpeedLimit_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ROAD': 'no label', 'ROAD_NAME': 'no label', 'COMMON_USA': 'no label', 'START_SLK': 'no label', 'END_SLK': 'no label', 'CWY': 'no label', 'START_TRUE': 'no label', 'END_TRUE_D': 'no label', 'NETWORK_TY': 'no label', 'RA_NO': 'no label', 'RA_NAME': 'no label', 'LG_NO': 'no label', 'LG_NAME': 'no label', 'SPEED_LIMI': 'inline label', 'ROUTE_NE_I': 'no label', 'GEOLOCSTLe': 'no label', });
lyr_2017_3.set('fieldLabels', {'CRASH_YEAR': 'header label', 'CRASH_MONTH': 'header label', 'CRASH_PERIOD': 'header label', 'SEVERITY': 'header label', 'CRASH_TYPE': 'header label', });
lyr_2018_4.set('fieldLabels', {'CRASH_YEAR': 'header label', 'CRASH_MONTH': 'header label', 'CRASH_PERIOD': 'header label', 'SEVERITY': 'header label', 'CRASH_TYPE': 'header label', });
lyr_2019_5.set('fieldLabels', {'CRASH_YEAR': 'header label', 'CRASH_MONTH': 'header label', 'CRASH_PERIOD': 'header label', 'SEVERITY': 'header label', 'CRASH_TYPE': 'header label', });
lyr_2020_6.set('fieldLabels', {'CRASH_YEAR': 'header label', 'CRASH_MONTH': 'header label', 'CRASH_PERIOD': 'header label', 'SEVERITY': 'header label', 'CRASH_TYPE': 'header label', });
lyr_2021_7.set('fieldLabels', {'CRASH_YEAR': 'header label', 'CRASH_MONTH': 'header label', 'CRASH_PERIOD': 'header label', 'SEVERITY': 'header label', 'CRASH_TYPE': 'header label', });
lyr_CrashTimePeriod_8.set('fieldLabels', {'CRASH_YEAR': 'header label', 'CRASH_MONTH': 'header label', 'CRASH_PERIOD': 'header label', 'SEVERITY': 'header label', 'CRASH_TYPE': 'header label', });
lyr_IncidentType_9.set('fieldLabels', {'X': 'header label', 'Y': 'header label', 'ROAD_NAME': 'header label', 'COMMON_ROAD_NAME': 'header label', 'INTERSECTION_NO': 'header label', 'INTERSECTION_DESC': 'header label', 'LONGITUDE': 'header label', 'LATITUDE': 'header label', 'CRASH_DATE': 'header label', 'CRASH_YEAR': 'header label', 'CRASH_MONTH': 'header label', 'CRASH_PERIOD': 'header label', 'ACCIDENT_TYPE': 'header label', 'SEVERITY': 'header label', 'TOTAL_BIKE_INVOLVED': 'header label', 'TOTAL_TRUCK_INVOLVED': 'header label', 'TOTAL_HEAVY_TRUCK_INVOLVED': 'header label', 'TOTAL_MOTOR_CYCLE_INVOLVED': 'header label', 'TOTAL_OTHER_VEHICLES_INVOLVED': 'header label', 'TOTAL_PEDESTRIANS_INVOLVED': 'header label', 'CRASH_TYPE': 'header label', });
lyr_IncidentType_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});