angular.module('DollarTrackerApp', ['ionic'])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            //            DSCacheFactory("leagueDataCache", {
            //                storageMode: "localStorage",
            //                maxAge: 360000,
            //                deleteOnExpire: "aggressive"
            //            });
            //            DSCacheFactory("leaguesCache", {
            //                storageMode: "localStorage",
            //                maxAge: 360000,
            //                deleteOnExpire: "aggressive"
            //            });
            //            DSCacheFactory("myTeamsCache", {
            //                storageMode: "localStorage"
            //            });
            //            DSCacheFactory("staticCache", {
            //                storageMode: "localStorage"
            //            });
        });
    })

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
            //             abstract: true,
            url: "/app",
            templateUrl: "app/layout/menu-layout.html"
        })
        .state('login', {
            url: "/login",
            templateUrl: "app/login/login.html"
        })
        .state('home', {
            url: "/home",
            templateUrl: "app/home/home.html"
        })
        .state('account', {
            url: "/account",
            templateUrl: "app/account/account.html"
        })


    $urlRouterProvider.otherwise('home');
})