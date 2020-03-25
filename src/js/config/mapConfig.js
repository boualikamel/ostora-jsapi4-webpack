
define([
    "./nls/local",
    "esri/Map",
    "esri/views/MapView",
    "esri/Basemap",
    "esri/layers/WebTileLayer"

], function (i18n, Map, MapView, Basemap, WebTileLayer) {

    //create a div with id=mapDiv where the map will be displayed
    $('<div/>', {
        id: 'mapDiv',
    }).appendTo('#main');

    // set your default basemap
    var defaultBasemap = new Basemap({
        baseLayers: [new WebTileLayer({
            urlTemplate: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{level}/{row}/{col}.png"
        })],
        title: i18n.root.streets,
        id: "streets",
        thumbnailUrl: "https://stamen-tiles.a.ssl.fastly.net/terrain/10/177/410.png"
    });
    return {

        _mapView: null,
        _basemaps: [],

        initMapView() {

            this._mapView = new MapView({
                container: "mapDiv", // Reference to the map div 
                map: new Map({
                    basemap: defaultBasemap
                }), // Reference to the map object created before the scene
                zoom: 6, // Sets zoom level based on level of detail (LOD)            
                center: [3.262939, 36.618283], // Sets center point of view using longitude,latitude
                ui: {
                    components: ["zoom", "compass"]
                }

            });
            return this._mapView;

        },
        initBasemaps() {
            // a list of basemaps that will be used in basemap gallery
            this._basemaps = [
                defaultBasemap,
                new Basemap({
                    baseLayers: [new WebTileLayer({
                        urlTemplate: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{level}/{row}/{col}.png"
                    })],
                    title: i18n.root.satellite,
                    id: "satellite",
                    thumbnailUrl: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/4/5/4"
                }),
                new Basemap({
                    baseLayers: [new WebTileLayer({
                        urlTemplate: "https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",
                        subDomains: ["a", "b", "c"]
                    })],
                    title: i18n.root.osm,
                    id: "osm",
                    thumbnailUrl: "https://a.tile.openstreetmap.org/6/31/25.png"
                })
            ];
            return this._basemaps;
        },
        getMapView() {
            return this._mapView;
        },

        getBasemaps() {
            return this._basemaps;
        }

    }
});