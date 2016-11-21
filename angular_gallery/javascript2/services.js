//app.factory('galleries', function($http){
//    return {
//        list: function (callback) {
//            $http.get('json/images.json').success(callback);
//
//        },
//        find: function($scope, $http){
//            $http.get('json/images.json').success(function(data) {
//                $scope.galleries = data;
//            });
//        }
        //show: function(title) {
        //    var result;
        //    angular.forEach(galleries, function(value, key){
        //       if(value.title == title) {
        //           result = value;
        //       }
        //    });
        //}
//    }
//
//});
app.factory('ContactsFactory', function() {
    function create(contact) {
        gallery.images.push(contact);
        save();
    }

    return {
        contactsList: contacts,
        get: get,
        add: create
    }
});



