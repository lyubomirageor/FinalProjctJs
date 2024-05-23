require(["esri/config", "esri/WebMap", "esri/views/MapView", "esri/widgets/Home", "esri/widgets/LayerList", "esri/widgets/BasemapGallery", "esri/widgets/Directions", "esri/layers/RouteLayer", "esri/widgets/Search", "esri/widgets/ScaleBar"],
    function (esriConfig, WebMap, MapView, Home, LayerList, BasemapGallery, Directions, RouteLayer, Search, ScaleBar) {

        esriConfig.apiKey = "AAPKfd648ea562964d168e3c24aa60b09114rjgbhvYT_hHEyS4z8w28nr2qpHAhQJOvUlgnWq0OT2MfajtPyBuiG0k0Hslv4x5a";

        const routeLayer = new RouteLayer();

        const webmap = new WebMap({
            portalItem: {
                id: "232b4d297d054b2a831a3ce629ac8495"
            }
        });
        webmap.layers.add(routeLayer);

        const view = new MapView({
            container: "viewDiv",
            map: webmap
        });


        const directionswidget = new Directions({
            layer: routeLayer,
            apiKey: esriConfig.apiKey,
            view
        });
        
        view.ui.add(directionswidget, {position: "bottom-left"});

        const homeBtn = new Home({
            view 
        });

        view.ui.add(homeBtn, "top-left");

        const searchWidget = new Search({
            view
        });

        view.ui.add(searchWidget, "top-left")

        const layerList = new LayerList({
            view
        });

        const scaleBar = new ScaleBar({
            view
        });

        view.ui.add(scaleBar, "bottom-right")

        view.ui.add("layer-list-btn", "top-right");
        view.ui.add(layerList, "top-right");
        view.ui.add("basemap-gallery-btn", "top-right")
        view.ui.add("directions-btn","bottom-left" )
        view.ui.add("search-btn", "top-left")


        const basemapGallery = new BasemapGallery({
            view
        });

        view.ui.add(basemapGallery, "top-right");
        
        document.getElementById("layer-list-btn").addEventListener("click", function(){
            toggleButton("layerList");

        });

        document.getElementById("basemap-gallery-btn").addEventListener("click", function(){
            toggleButton("gallery");
        });

        document.getElementById("directions-btn").addEventListener("click", function(){
            toggleButton("directionswidget")
        })

        document.getElementById("search-btn").addEventListener("click", function(){
            toggleButton("searchWidget")
        })

        function toggleButton(element){
            if(element == "layerList") {
                const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
                const currentProp = layerListEl.style.getPropertyValue("display");
                layerListEl.style.setProperty("display", currentProp == "none"? "block" : "none");
            } else if(element == "gallery"){
                const galleryEl = document.getElementsByClassName("esri-basemap-gallery")[0];
                currentPropGallery = galleryEl.style.getPropertyValue("display");
                galleryEl.style.setProperty("display", currentPropGallery == "none"? "block" : "none");
            }  else if(element == "directionswidget"){
                const directionEl = document.getElementsByClassName("esri-directions")[0];
                currentPropDirections = directionEl.style.getPropertyValue("display");
                directionEl.style.setProperty("display", currentPropDirections == "none"? "block" : "none");
            } else if(element == "searchWidget"){
                const searchEl = document.getElementsByClassName("esri-search")[0];
                currentPropSearch = searchEl.style.getPropertyValue("display");
                searchEl.style.setProperty("display", currentPropSearch == "none"? "block" : "none");
            }

        }
 });
