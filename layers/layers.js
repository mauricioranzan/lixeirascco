var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BairrosMUB_3 = new ol.format.GeoJSON();
var features_BairrosMUB_3 = format_BairrosMUB_3.readFeatures(json_BairrosMUB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BairrosMUB_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BairrosMUB_3.addFeatures(features_BairrosMUB_3);
var lyr_BairrosMUB_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BairrosMUB_3, 
                style: style_BairrosMUB_3,
                popuplayertitle: 'Bairros MUB',
                interactive: false,
                title: '<img src="styles/legend/BairrosMUB_3.png" /> Bairros MUB'
            });
var format_Pontos_subterraneas_instalacao_4 = new ol.format.GeoJSON();
var features_Pontos_subterraneas_instalacao_4 = format_Pontos_subterraneas_instalacao_4.readFeatures(json_Pontos_subterraneas_instalacao_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pontos_subterraneas_instalacao_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pontos_subterraneas_instalacao_4.addFeatures(features_Pontos_subterraneas_instalacao_4);
var lyr_Pontos_subterraneas_instalacao_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pontos_subterraneas_instalacao_4, 
                style: style_Pontos_subterraneas_instalacao_4,
                popuplayertitle: 'Pontos_subterraneas_instalacao',
                interactive: true,
    title: 'Pontos_subterraneas_instalacao<br />\
    <img src="styles/legend/Pontos_subterraneas_instalacao_4_0.png" /> Definir<br />\
    <img src="styles/legend/Pontos_subterraneas_instalacao_4_1.png" /> Instalado<br />\
    <img src="styles/legend/Pontos_subterraneas_instalacao_4_2.png" /> Inviável<br />' });
var format_Conteineres_5 = new ol.format.GeoJSON();
var features_Conteineres_5 = format_Conteineres_5.readFeatures(json_Conteineres_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conteineres_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conteineres_5.addFeatures(features_Conteineres_5);
var lyr_Conteineres_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Conteineres_5, 
                style: style_Conteineres_5,
                popuplayertitle: 'Conteineres',
                interactive: true,
    title: 'Conteineres<br />\
    <img src="styles/legend/Conteineres_5_0.png" /> Coleta Mista<br />\
    <img src="styles/legend/Conteineres_5_1.png" /> Monobloco<br />\
    <img src="styles/legend/Conteineres_5_2.png" /> Orgânico<br />\
    <img src="styles/legend/Conteineres_5_3.png" /> Papeleira<br />\
    <img src="styles/legend/Conteineres_5_4.png" /> Reciclável<br />\
    <img src="styles/legend/Conteineres_5_5.png" /> Vidro<br />\
    <img src="styles/legend/Conteineres_5_6.png" /> Vidro - Provável<br />\
    <img src="styles/legend/Conteineres_5_7.png" /> Vidro - Temporário<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_BairrosMUB_3.setVisible(true);lyr_Pontos_subterraneas_instalacao_4.setVisible(true);lyr_Conteineres_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleRoad_1,lyr_OSMStandard_2,lyr_BairrosMUB_3,lyr_Pontos_subterraneas_instalacao_4,lyr_Conteineres_5];
lyr_BairrosMUB_3.set('fieldAliases', {'fid': 'fid', });
lyr_Pontos_subterraneas_instalacao_4.set('fieldAliases', {'id': 'id', 'End.': 'End.', 'Status': 'Status', 'Referencia': 'Referencia', 'Data': 'Data', });
lyr_Conteineres_5.set('fieldAliases', {'id': 'id', 'Num': 'Num', 'Vol_mcub': 'Vol_mcub', 'Tipo': 'Tipo', 'Verif': 'Verif', });
lyr_BairrosMUB_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_Pontos_subterraneas_instalacao_4.set('fieldImages', {'id': '', 'End.': '', 'Status': '', 'Referencia': '', 'Data': '', });
lyr_Conteineres_5.set('fieldImages', {'id': '', 'Num': '', 'Vol_mcub': '', 'Tipo': '', 'Verif': '', });
lyr_BairrosMUB_3.set('fieldLabels', {'fid': 'no label', });
lyr_Pontos_subterraneas_instalacao_4.set('fieldLabels', {'id': 'no label', 'End.': 'header label - visible with data', 'Status': 'header label - visible with data', 'Referencia': 'header label - visible with data', 'Data': 'header label - visible with data', });
lyr_Conteineres_5.set('fieldLabels', {'id': 'no label', 'Num': 'header label - visible with data', 'Vol_mcub': 'header label - visible with data', 'Tipo': 'header label - visible with data', 'Verif': 'header label - visible with data', });
lyr_Conteineres_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});