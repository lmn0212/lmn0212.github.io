

app.controller('GalleryCtrl', function ($scope, $http) {
    $scope.json = $http.get('json/images.json').success(function (data) {
        $scope.galleries = data;
    });
});

app.controller('AlbumCtrl', function ($scope, $http, $routeParams) {
    $scope.galleryTitle = $routeParams['galleryTitle'];
    $scope.json = $http.get('json/images.json').success(function (data) {
        angular.forEach(data, function(value, key) {
            if (value.title == $scope.galleryTitle) $scope.gallery = value;
        })
    });
});

app.controller('PhotoCtrl', function ($scope, $http, $routeParams) {
    $scope.galleryTitle = $routeParams['galleryTitle'];
    $scope.image = $routeParams['imageTitle'];
    $scope.json = $http.get('json/images.json').success(function (data) {
        angular.forEach(data, function(value, key) {
            if (value.title == $scope.galleryTitle) $scope.album = value.images;
        });
        angular.forEach($scope.album, function(value, key) {
            if (value.title == $scope.image) $scope.photo = value;
        })
    });
});

