(function() {
  'use strict';

  angular
    .module('appClient')
    .controller('productDetailController', productDetailController);

  /** @ngInject */
  function productDetailController() {
    var vm = this;
    vm.images = 
    [
      {
        thumb: "http://i1227.photobucket.com/albums/ee421/boosted833/IMG_72202.jpg", 
        img: "http://i1227.photobucket.com/albums/ee421/boosted833/IMG_72202.jpg", 
        description: "vehicle-image"
      },
      {
        thumb: "http://i1227.photobucket.com/albums/ee421/boosted833/IMG_72222.jpg",
        img: "http://i1227.photobucket.com/albums/ee421/boosted833/IMG_72222.jpg", 
        description: "vehicle-image"
      },
      {
        thumb: "http://i1227.photobucket.com/albums/ee421/boosted833/IMG_724323.jpg",
        img: "http://i1227.photobucket.com/albums/ee421/boosted833/IMG_724323.jpg", 
        description: "vehicle-image"
      },
      {

        
        thumb: "http://i1227.photobucket.com/albums/ee421/boosted833/IMG_72512.jpg",
        img: "http://i1227.photobucket.com/albums/ee421/boosted833/IMG_72512.jpg", 
        description: "car image"
      },
      {
        thumb: "http://i1227.photobucket.com/albums/ee421/boosted833/IMG_72522.jpg",
        img: "http://i1227.photobucket.com/albums/ee421/boosted833/IMG_72522.jpg", 
        description: "vehicle-image"
      }
    ]
  }
})();
