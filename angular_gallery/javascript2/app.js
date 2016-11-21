var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when("/",
        {
            templateUrl: "html/albumList.html",
            controller: "GalleryCtrl"
        })
        .when('/album/:galleryTitle', {
                templateUrl: 'html/album.html',
                controller: 'AlbumCtrl'
        })
        .when('/album/:galleryTitle/photo/:imageTitle', {
                templateUrl: 'html/photo.html',
                controller: 'PhotoCtrl'
        })
        .otherwise({redirectTo: '/'})
    });