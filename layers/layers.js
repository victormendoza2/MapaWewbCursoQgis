var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Industrias_1 = new ol.format.GeoJSON();
var features_Industrias_1 = format_Industrias_1.readFeatures(json_Industrias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industrias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industrias_1.addFeatures(features_Industrias_1);
var lyr_Industrias_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Industrias_1, 
                style: style_Industrias_1,
                interactive: true,
                title: '<img src="styles/legend/Industrias_1.png" /> Industrias'
            });
var format_buffer_2 = new ol.format.GeoJSON();
var features_buffer_2 = format_buffer_2.readFeatures(json_buffer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_2.addFeatures(features_buffer_2);
var lyr_buffer_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buffer_2, 
                style: style_buffer_2,
                interactive: true,
                title: '<img src="styles/legend/buffer_2.png" /> buffer'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Industrias_1.setVisible(true);lyr_buffer_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Industrias_1,lyr_buffer_2];
lyr_Industrias_1.set('fieldAliases', {'Id': 'Id', 'Tipo': 'Tipo', 'Contaminac': 'Contaminac', 'Nombre': 'Nombre', });
lyr_buffer_2.set('fieldAliases', {'Id': 'Id', 'Tipo': 'Tipo', 'Contaminac': 'Contaminac', 'Nombre': 'Nombre', });
lyr_Industrias_1.set('fieldImages', {'Id': '', 'Tipo': '', 'Contaminac': '', 'Nombre': '', });
lyr_buffer_2.set('fieldImages', {'Id': 'Range', 'Tipo': 'TextEdit', 'Contaminac': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Industrias_1.set('fieldLabels', {'Id': 'no label', 'Tipo': 'no label', 'Contaminac': 'no label', 'Nombre': 'header label', });
lyr_buffer_2.set('fieldLabels', {'Id': 'no label', 'Tipo': 'no label', 'Contaminac': 'no label', 'Nombre': 'no label', });
lyr_buffer_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});