/**
 * Created by Alessandro cottino on 14/11/18.
 */


//----------------------------------------------------------TEST-----------------------------------------------------------------

//
//
//
window.app = {
    url:{
        // apiServerURL:"//api.cimafoundation.org/api/",
        apiServerURL:"//api.cimafoundation.org/api/", //meteo app
        // pykumaleApi: "//segnalazioni.cimafoundation.org/meteoapp_dev/kumale/kumale/", //kumale nuovo non serve x kumale bower
        baseroot :"//mydewetratest.cimafoundation.org/",
        dewapiURL : "//dds.cimafoundation.org/dewetra2/dewapi/",
        // segnalazioniURL : "//segnalazioni.cimafoundation.org/meteoapp/kumale/kumale/",
        realTimeWebSocketURL : "wss://messages.cimafoundation.org/ddsws",
        rabbitURL : "//130.251.104.41/stomp",
        sentinelURL : "//dds.cimafoundation.org/sentinel/sentinelapi/",
        // printerServerURL : "//apps.cimafoundation.org/dewetra2printservicetest/",//temporeneo
        // modisActiveFiresURL:"//dds.cimafoundation.org/modis_active_fires/",
        // propagatorServerUrl:"//dds.cimafoundation.org/propagator"
    },
    lang:"it_IT",
    acEvent:{
        username:"logger",
        password:"logger4dew",
        queue:'sentinel.2'
    },

    config:{

    },
    declaredApplications : [

        {
            code: 'kumale',
            name: 'Kumale',
            descr: 'Kumale',
            classIcon: '',
            folder: 'kumale',
            //externalUrl: 'http://dewetrabk.cimafoundation.org/webalert2',
            externalUrl: 'apps/kumale/index_mydewetra.html#?skin=3',
//                logo: 'apps/kumale/img/kumale_logo.png',
            logo: 'portals/commons/img/logo/ico_kumale_mini_colorT@2x_mydewetra.png',
            groupName: 'kumale'
        },

        {
            code: 'l!ve',
            name: 'L!ve',
            descr: 'L!VE 2.0',
            classIcon: 'ACROWEB_ico-live',
            folder: 'l!ve',
            externalUrl: 'apps/l!ve/index_mydewetra.html#?skin=3',
            logo: 'apps/l!ve/img/health.svg'
//                logo: 'portals/commons/img/logo/'
        },



        {
            name: 'Admin',
            descr: 'Admin',
            classIcon: 'logo_admin',
            folder: 'admin',
            externalUrl: 'apps/admin/index_mydewetra.html#?skin=3',
            //logo: 'apps/admin/img/ico_admin_white.png',
            logo: 'portals/commons/img/logo/ico_admin_mini_whiteT@2x_mydewetra.png',
            groupName: 'admin'
        }

    ],
    widgets:[
        {id: "W01", new:false, public: false, visible: true, name:"Radar VMI", ord: 1, col: 2, appId:"dewetra2", directive: "last-layer-widget-new", par1:"RADAR_DPC_VMI", par2:"VMI_Z;0", reloadValue:"na"},
        {id: "W02", new:false, public: false, visible: true, name:"Radar SRI", ord: 2, col: 2, appId:"dewetra2", directive: "last-layer-widget-new", par1:"RADAR_DPC_SRI", par2:"SRI;0", reloadValue:"na"},
        {id: "W03", new:false, public: false, visible: true, name:"MSG IR 10.8", ord: 3, col: 2, appId:"dewetra2", directive: "last-layer-widget-new", par1:"MSG_IR108", par2:"", reloadValue:"na"},
        //{id: "W04", new:false, public: false, visible: true, name:"WebAlert", ord: 4, col: 4, appId:"webalert2", directive: "webalert-widget", par1:"", par2:""},
        {id: "W05", new:false, public: false, visible: true, name:"RainMap - last 24hours", ord: 5, col: 2, appId:"dewetra2", directive: "last-layer-widget-new", par1:"RAINMAP_ITALY", par2:"", reloadValue:"na"},
        {id: "W06", new:false, public: false, visible: true, name:"PPF 75% - Municipality", ord: 6, col: 4, appId:"dewetra2", directive: "risico-ppf-perc-widget", par1:"RISICO2015_COSMOI5_AGGR", par2:"RISICO2015-COSMOI5_GEN-PERC75-VPPF", reloadValue:"na"},
        {id: "W07", new:false, public: false, visible: true, name:"PPF Intensità lineare fronte", ord: 7, col: 4, appId:"dewetra2", directive: "risico-ppf-widget", par1:"RISICO2015_COSMOI5", par2:"RISICO2015-COSMOI5_IPPF;0", reloadValue:"na"},
        {id: "W08", new:false, public: false, visible: true, name:"PPF Velocità di propagazione", ord: 8, col: 4, appId:"dewetra2", directive: "risico-ppf-widget", par1:"RISICO2015_COSMOI5", par2:"RISICO2015-COSMOI5_VPPF;0", reloadValue:"na"},
        {id: "W09", new:false, public: false, visible: true, name:"Firealert 2 Bulletin", ord: 9, col: 4, appId:"firealert2", directive: "firealert-widget", par1:"", par2:""},
        {id: "W10", new:false, public: false, visible: true, name:"Webalert 2 Bulletin", ord: 10, col: 4, appId:"webalert2", directive: "webalert2-widget", par1:"", par2:""},
        // {id: "W11", new:false, public: false, visible: true, name:"GSMAP", ord: 11, col: 4, appId:"dewetra2", directive: "last-layer-widget-new", par1:"GSMAP_ADRIARADNET", par2:"hourly_rain_rate;0"},
        {id: "W12", new:false, public: false, visible: true, name:"COAU - FIRE", ord: 12, col: 4, appId:"dewetra2", directive: "coaufires-Widget", par1:"COAU_FIRES", par2:"-1", reloadValue:"na"},
        {id: "W13", new:true, public: false, visible: true, name:"FRP - Last 3 hours", ord: 13, col: 4, appId:"dewetra2", directive: "last-layer-widget-new", par1:"FRP_ITALY", par2:"10800", reloadValue:"na"},
        {id: "W14", new:true, public: false, visible: true, name:"Kumalè", ord: 13, col: 4, appId:"kumale", directive: "kumalewidget", par1:"", par2:""},

        {id: "W15", new:true, public: false, visible: true, name:"Radar HRD", ord: 14, col: 4, appId:"dewetra2", directive: "last-layer-widget-new", par1:"RADAR_DPC_HRD", par2:"", reloadValue:"na"},
        {id: "W16", new:true, public: false, visible: true, name:"Radar SRI - adj", ord: 15, col: 4, appId:"dewetra2", directive: "last-layer-widget-new", par1:"RADAR_DPC_HDF5_SRIADJ_TEST", par2:"SRIadj;-", reloadValue:"na"},
        {id: "W17", new:true, public: false, visible: true, name:"Radar SRT - adj", ord: 16, col: 4, appId:"dewetra2", directive: "last-layer-widget-new", par1:"RADAR_DPC_HDF5_SRTADJ", par2:"SRT1adj;-", reloadValue:"na"},
        {id: "W18", new:true, public: false, visible: true, name:"RainMap - last 3hours", ord: 17, col: 4, appId:"dewetra2", directive: "mapitalyaggr-widget", par1:"RAINMAP_ITALY", par2:"3", reloadValue:"na"},
        {id: "W19", new:true, public: false, visible: true, name:"RainMap - last 6hours", ord: 18, col: 4, appId:"dewetra2", directive: "mapitalyaggr-widget", par1:"RAINMAP_ITALY", par2:"6", reloadValue:"na"},
        {id: "W20", new:true, public: false, visible: true, name:"RainMap - last 12hours", ord: 19, col: 4, appId:"dewetra2", directive: "mapitalyaggr-widget", par1:"RAINMAP_ITALY", par2:"12", reloadValue:"na"},

        {id: "W21", new:true, public: false, visible: true, name:"Temperature - 24hours", ord: 20, col: 4, appId:"dewetra2", directive: "temperaturetaly-widget", par1:"TEMPERATUREMAP_ITALY", par2:"24"}

    ]
};
