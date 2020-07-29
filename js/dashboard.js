/**
 * Created by doy on 13/07/15.
 */
//TODO valutare se fare un js dashboard per ogni app
var prevenzione = angular.module("prevenzione", ['acroweb', 'kumale','ngAnimate']);

if (window.skin!='amatori') {
    angular.module('acroweb').requires.push('sentinel');
    angular.module('acroweb').requires.push('appAllertaLiguria');
    angular.module('acroweb').requires.push('eyesWidget');

    angular.module('acroweb').requires.push('prevenzione_msg');
    angular.module('acroweb').requires.push('prevenzione_sri');
    angular.module('acroweb').requires.push('prevenzione_rain_map');
}

//load language translation data for current app
acrowebLoadTranslation(prevenzione, 'dashboard_prevenzione');

prevenzione.controller("dashboardCtrl", function ($scope, $http, $timeout, $rootScope, acHttpSrv) {

// delay item dashboard


    //var delays = [];
    //$scope.random = function(i) {
    //    if(!delays[i]) {
    //        delays[i] = Math.random();
    //    }
    //    return delays[i];
    //};



    // Manuel controllo Intro BOX -- INIZIO
            $scope.bGuestShow = true;
            $scope.alertIntroBoxCSS = "animated delay-020 slideInDown";
            $timeout(function(){$scope.alertIntroBoxLogoCSS = "animated delay-020 slideInLeft MD_alert_intro_logo"}, 500);
            $timeout(function(){$scope.alertIntroBoxTxtCSS = "animated delay-020 slideInRight MD_alert_intro_txt"}, 800);
            $timeout(function(){$scope.alertIntroBoxPanelCSS = "animated delay-020 slideInUp MD_alert_intro_panel"}, 1000);
            $scope.closeIntro = function(){
                $scope.alertIntroBoxCSS = "animated delay-020 slideOutUp";
                $scope.bGuestShow = false;
            };
    // Manuel controllo Intro BOX -- FINE


    //APPLICAZIONI VECCHIO PORTALE
    /*
        $scope.apps_configuration={
            administrator: {id:"admin", name:"Amministrazione", descr:"Amministrazione Utenti", css:"admin"},
            kumale: {id:"kumale", name:"Kumale", descr:"Kumale Microblog", css:"kumale"},
            //datamonitor: {id:"datamonitor", name:"Datamonitor", descr:"Datamonitor", css:"datamonitor"},
            datamonitor: {id:"L!ve", name:"Datamonitor", descr:"L!ve", css:"live"},
            pianoemergenza: {id:"pianoemergenza", name:"Valutazione", descr:"Piano emergenza Quiliano", css:"peq"},
            allerta: {id:"allerta", name:"Allerta Meteo", descr:"Defcon Regione", css:"defcon_reg"},
            sms: {id:"sms", name:"SMS", descr:"Configuratore SMS", css:"sms"},
            //defcon:{id:"defcon",name:"Defcon", descr:"Defcon Comune", css:"defcon_com"},
            defcon:{id:"defcon",name:"Fasi Operative", descr:"Fasi operative", css:"defcon_com"},
            soglie:{id:"sentinel",name:"Sentinel", descr:"Sentinel", css:"sentinel"},
            //mapviewer:{id: "viewer",name:"Mappa",descr:"Mappa",css:"viewer"},
            mapviewer:{id: "viewer",name:"Risorse Cartografiche",descr:"Risorse Cartografiche",css:"viewer"},
            checklist:{id: "checklist",name:"Check list",descr:"Check List",css:"checklist"},
            dewetra:{id: "dewetra",name:"Dewetra",descr:"Dewetra",css:"checklist",externLink: "http://dewetra.cimafoundation.org/"},
            webalert:{id: "webalert",name:"Webalert",descr:"Webalert",css:"checklist",externLink: "http://dewetra3.cimafoundation.org/webalertTEST/"},
            creasy:{id: "creasy",name:"Creasy",descr:"Creasy",css:"creasy"},
            floodcat:{id: "floodcat",name:"FloodCat",descr:"Catalogo Eventi", css:"floodcat"},
            dewetra2:{id: "Dewetra_2",name:"Dewetra 2.0",descr:"Dewetra 2.0", css:"Dewetra_2"},
            howtodoapp:{id:"howtodoapp", name:"how to do...?", descr:"How to Do", css:"howtodo"},
            allertanew: {id: "allerta-new",name:"Allerta", descr:"Allerta",css: "allertanew"},
            comunicator: {id: "comunicator",name:"Comunicator", descr:"Comunicator",css: "comunicator"},
            newtrack:{id:"newtrack", name:"Newtrack", descr:"New Trak", css:"newtrack"},
            scenario:{id:"scenario", name:"scenario", descr:"Piano Emergenza", css:"scenario"},

            coc:{id:"coc", name:"coc", descr:"Centro Operativo Comunale", css:"coc"},
            // omirl:{id:"omirl", name:"omirl?", descr:"Osservatorio Meteo Idrologico della Regione Liguria", css:"omirl"},
            //risorsedocumentali:{id:"risorsedoc", name:"risorsedocumentali", descr:"Risorse Documentali", css:"risorsedoc"},

            emergenza: {id: "emergenza",name: "Piano Emergenza",descr: "Piano emergenza",css: "emergenza"},
            statistiche:{id:"statistiche", name:"statistiche", descr:"Statistiche Accessi", css:"statistiche"},
            intervento: {id: "intervento", name: "Modello di intervento", descr: "Modello di intervento",css:"intervento"},
            attivazioni:{id: "attivazioni",name: "Attivazioni",descr:"Attivazioni",css: "attivazioni"}


        };
    */
    var onAppEvent=function(){
        $scope.$watch(function () {return localStorage.openApps;},function(newVal,oldVal){
            console.log(newVal);
            var apps={}
            if (newVal) apps=JSON.parse(newVal);
            $scope.applications.forEach(function(app){
                app.open=(apps[app.name]==true);
            });
        })
    };

    var init=function(){
        //test dario
        //$http.get(
        //    "http://130.251.104.21/api_test/api/datamonitor/raingauge_native?isWidget=false&acroweb_token=dario.rubado%231548234645340%234387b504-f5cb-40e0-8d2b-b706542ff1c7%3B213")
        //    .success(function(data){
        //        console.log(data);
        //    }).error(function(err){
        //        console.log(err);
        //    });
        $scope.applications = [];
        if (window.skin==undefined) window.skin="";
        $scope.appGroups=["admin","pianificazione","comunicazione","gestione","risorse"];
        if (window.declaredApplications==undefined){
            $.getJSON("apps/prevenzione/js/appsinfo_"+((window.skin=='prevenzione'||window.skin=="")?"pc":window.skin)+".json", function (data) {
                data.forEach(function(itm){
                    if (itm.externalUrl) itm.externalUrl=itm.externalUrl.replace("_skin","_"+window.skin);
                });
                window.declaredApplications = data;
                loadApp();
            });
        }else loadApp();

        onAppEvent();
    };
    var loadApp=function(){
        $rootScope.$watchCollection("[acSession.authenticated,acSession.hat.id]",function(newv,oldv){
            if (newv[0]){
                acHttpSrv.acrowebGet("api/portal/applications/",
                    function (data) {
                        $scope.applications = [];
                       // setApplications(data);
                        var app=[];
                        window.declaredApplications.forEach(function (declaredApp) {
                            var lapp= $.extend({},declaredApp);
                            var searchResult = data.filter(function (a) {
                                    return !lapp.code || a.id == lapp.code
                                });

                            if ((searchResult && searchResult.length>0) || !lapp.code )
                                app.push(lapp)
                               else{
                                    //se l'app non è configurata la disabilito
                                    delete lapp.externalUrl;
                                    delete lapp.folder;
                                    app.push(lapp);
                                }


                        });
                        $scope.applications=app;
                    },
                    function (data) {
                        console.log(data)
                    }
                );
            }
        });
    };


    $scope.getApp=function(idgrp){
        if ($scope.applications.length>0) {
            var apps = $scope.applications.filter(function (itm) {
                return itm.groupName == idgrp
            });
            return apps;
        }
        return [];
    };

    $scope.isApplicationAllowed = function (appId) {
        if (!$scope.applications) return false;
        searchResult = $scope.applications.filter(function (a) {
            return appId == a.code
        });
        return searchResult && searchResult.length>0
    };

    $scope.isAppEnabled=function(app){
        //se non ho externalUrl o folder l'app deve essere diabilitata
        return (app.externalUrl || app.folder);
    };

    $scope.appUrl = function (app) {

        if (app.externalUrl) return app.externalUrl;

        var url = 'apps/' + app.folder + '/index.html';
        return url
    };


    init();
});
