/**
 * Created by Manuel on 14/01/2016.
 */

var startindex = angular.module("startindex", ['acroweb',  'appAllertaLiguria', 'ngRoute', 'ngSanitize','eyesWidget']);

//load language translation data for current app
acrowebLoadTranslation(startindex, 'startindex_prevenzione');

startindex.controller("startindexCtrl", function ($rootScope, $scope, $window) {

    /***************************************/
    /* Language Detect */
    /***************************************/
    //var lang = $window.navigator.language || $window.navigator.userLanguage;
    //alert(lang);

    /***************************************/
    /* Impostare la lingua di default */
    /***************************************/
    $rootScope.appDefaultLangId = "it_IT";

    /***************************************/
    /* Accedi click */
    /***************************************/
    $scope.cssAccediBox = "box_display_none";
    $scope.accediClick = function(){

        if($scope.cssAccediBox == "fadeInDown delay-050")
        {
            $scope.cssAccediBox = "fadeOutUp delay-050";

        } else
        {
            $scope.cssAccediBox = "fadeInDown delay-050";
        }

        //togliere quando funziona acSessionChangedEvent
        //$window.location.replace("apps/mydewetra/dashboard.html?skin=3");

    }; // end accediClick

    $rootScope.$watch("acSession.authenticated", function () {

        $scope.cssAccediBox = "box_display_none";

        if ($window.location.href.indexOf("registrazione")>0){
            $window.location.replace("http://prevenzionecomune.cimafoundation.org/portale/#/"+$window.location.href.substring($window.location.href.indexOf("registrazione")))
            return
        }

        if($rootScope.acSession.authenticated)
        {
            //$window.location.replace("apps/prevenzione/dashboard_prevenzione.html?skin=4");
           // $window.location.replace("http://prevenzionecomune.cimafoundation.org/index.html");
            $window.location.replace("http://prevenzionecomune.cimafoundation.org/portale/#/");
        }
    })

});