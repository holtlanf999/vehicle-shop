(function() {
  'use strict';

  angular
    .module('appClient')
    .controller('productDetailController', ['userService','carService', 'bikeService', productDetailController]);

  /** @ngInject */
  function productDetailController(userService, carService, bikeService) {
    var vm = this;

    // console.log('userService: ', userService);
    console.log('carService: ', carService.car);
    console.log('bikeService: ', bikeService);
    
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
    /* vm.category = ,
    vm.model = ,
    vm.color = ,
    vm.carBrand = ,
    vm.comment = , 
    vm.condition = ,
    vm.motoBrand = ,
    vm.doors = ,
    vm.driveTrain = , 
    vm.engine = ,
    vm.displacement = , 
    vm.trans = ,
    vm.fuelType = ,
    vm.bodyStyle = ,
    vm.milleage = ,
    vm.mods = ,
    vm.plate = ,
    vm.power = ,
    vm.price = ,
    vm.rebuilt = ,
    vm.year = ,
    vm.images =*/ 
  }

})();
