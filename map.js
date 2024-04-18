require(["esri/config", "esri/WebMap", "esri/views/MapView"],
    function (esriConfig, WebMap, MapView) {

        esriConfig.apiKey = "AAPKfd648ea562964d168e3c24aa60b09114rjgbhvYT_hHEyS4z8w28nr2qpHAhQJOvUlgnWq0OT2MfajtPyBuiG0k0Hslv4x5a";

        const webmap = new WebMap({
            portalItem: {
                id: "232b4d297d054b2a831a3ce629ac8495"
            }
        });

        const view = new MapView({
            container: "viewDiv",
            map: webmap
        })

    })
