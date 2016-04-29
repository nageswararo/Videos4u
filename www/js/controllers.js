angular.module('video4u.controllers', [])

.controller('ShortfilmCtrl', function($scope, $http) {

	       $scope.videos = [];

                $scope.youtubeParams = {
                  part: 'id,snippet',
                  playlistId:'PLg_Jr7vZfNvlWoncCb59KNwCuP_YSh7JH',
                  channelId: 'UCJk5iAG6tUhDSF4TtzFQ-JQ',
                  key: 'AIzaSyDZQlfBs7UoLHfzxK0BzjUY2a0EL-8xrv8',
                }

                $http.get('https://www.googleapis.com/youtube/v3/playlistItems', {params:$scope.youtubeParams}).success(function(response){
                     //console.log(response);
                  angular.forEach(response.items, function(child){
                     console.log (child);
                     //console.log(child.snippet.resourceId.videoId);
                     $scope.videos.push(child);

                   });
                });


           $scope.playerVars = {
                rel: 0,
                showinfo: 0,
                modestbranding: 0,
          }


})

.controller('FunvideosCtrl', function($scope, $http) {


                  $scope.videos = [];

                $scope.youtubeParams = {
                  part: 'id,snippet',
                  playlistId:'PLg_Jr7vZfNvk5sdC7Ap0ql4HipYhdWoxB',
                  channelId: 'UCJk5iAG6tUhDSF4TtzFQ-JQ',
                  key: 'AIzaSyDZQlfBs7UoLHfzxK0BzjUY2a0EL-8xrv8',
                }

                $http.get('https://www.googleapis.com/youtube/v3/playlistItems', {params:$scope.youtubeParams}).success(function(response){
                     //console.log(response);
                  angular.forEach(response.items, function(child){
                     console.log (child);
                     //console.log(child.snippet.resourceId.videoId);
                     $scope.videos.push(child);

                   });
                });


           $scope.playerVars = {
                rel: 0,
                showinfo: 0,
                modestbranding: 0,
          }


});