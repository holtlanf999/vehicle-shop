(function() {
  'use strict';

  angular
    .module('appClient')
    .controller('BuyController', ['carService','bikeService', BuyController]);

  /** @ngInject */
  function BuyController(carService, bikeService, lodash) {
    var vm = this;

    vm.category = [
      {value: 'car'},
      {value: 'motorcycle'}
    ];

    vm.condition = [
      {value: 'new'},
      {value: 'used'},
      {value: 'wrecked'}
    ];

    vm.carBrand = [
      {value: 'abarth'},
      {value: 'ac'},
      {value: 'alfa-romeo'},
      {value: 'alpine'},
      {value: 'aston-martin'},
      {value: 'audi'},
      {value: 'austin'},
      {value: 'autobianchi'},
      {value: 'avanti'},
      {value: 'beijing'},
      {value: 'bentley'},
      {value: 'bitter'},
      {value: 'bmw'},
      {value: 'bristol'},
      {value: 'buick'},
      {value: 'cadillac'},
      {value: 'caterham'},
      {value: 'chevrolet'},
      {value: 'chrysler'},
      {value: 'citroen'},
      {value: 'daewoo'},
      {value: 'daihatsu'},
      {value: 'de-tomaso'},
      {value: 'dodge'},
      {value: 'donkervoort'},
      {value: 'ferrari'},
      {value: 'fiat'},
      {value: 'ford'},
      {value: 'gaz'},
      {value: 'gmc'},
      {value: 'holden'},
      {value: 'honda'},
      {value: 'hyundai'},
      {value: 'innocenti'},
      {value: 'isuzu'},
      {value: 'jaguar'},
      {value: 'jeep'},
      {value: 'jensen'},
      {value: 'lada'},
      {value: 'lamborghini'},
      {value: 'lancia'},
      {value: 'lincoln'},
      {value: 'lotus'},
      {value: 'maserati'},
      {value: 'mazda'},
      {value: 'mclaren'},
      {value: 'mercedes-benz'},
      {value: 'mercury'},
      {value: 'mg'},
      {value: 'mini'},
      {value: 'mitsubishi'},
      {value: 'monteverdi'},
      {value: 'morgan'},
      {value: 'nissan'},
      {value: 'oldsmobile'},
      {value: 'opel'},
      {value: 'peugeot'},
      {value: 'plymouth'},
      {value: 'pontiac'},
      {value: 'porsche'},
      {value: 'proton'},
      {value: 'reliant'},
      {value: 'renault'},
      {value: 'rolls-royce'},
      {value: 'saab'},
      {value: 'seat'},
      {value: 'skoda'},
      {value: 'subaru'},
      {value: 'suzuki'},
      {value: 'talbot'},
      {value: 'tatra'},
      {value: 'toyota'},
      {value: 'tvr'},
      {value: 'vauxhall'},
      {value: 'venturi'},
      {value: 'volkswagen'},
      {value: 'volvo'},
      {value: 'westfield'},
      {value: 'zastava'},
      {value: 'zil'}
    ];

    vm.motoBrand = [
      {value: 'ahm'},
      {value: 'akt'},
      {value: 'aprilia'},
      {value: 'argo'},
      {value: 'articcatArtic'},
      {value: 'bmw'},
      {value: 'bsa'},
      {value: 'bajaj'},
      {value: 'benelli'},
      {value: 'bombardier'},
      {value: 'buell'},
      {value: 'bultaco'},
      {value: 'canam'},
      {value: 'cfmoto'},
      {value: 'cagiva'},
      {value: 'cobra'},
      {value: 'daelim'},
      {value: 'dinly'},
      {value: 'ducati'},
      {value: 'electrobike'},
      {value: 'formula'},
      {value: 'freedom'},
      {value: 'gasgas'},
      {value: 'geeley'},
      {value: 'genesis'},
      {value: 'haojue'},
      {value: 'harley-davidson'},
      {value: 'hero'},
      {value: 'honda'},
      {value: 'husaberg'},
      {value: 'husqvarna'},
      {value: 'hyosung'},
      {value: 'jawa'},
      {value: 'jialing'},
      {value: 'ktm'},
      {value: 'katana'},
      {value: 'kawasaki'},
      {value: 'keeway'},
      {value: 'kinetic'},
      {value: 'kymco'},
      {value: 'lml'},
      {value: 'lifan'},
      {value: 'loncin'},
      {value: 'mv-augusta'},
      {value: 'mz'},
      {value: 'montesa'},
      {value: 'motocruiser'},
      {value: 'motoguzzi'},
      {value: 'mototek'},
      {value: 'motoped'},
      {value: 'nsu'},
      {value: 'osaka'},
      {value: 'ossa'},
      {value: 'peugeot'},
      {value: 'piaggio'},
      {value: 'pitster'},
      {value: 'polaris'},
      {value: 'qingqui'},
      {value: 'rokk'},
      {value: 'ssr'},
      {value: 'sym'},
      {value: 'sachs'},
      {value: 'sangyang'},
      {value: 'senke'},
      {value: 'serpento'},
      {value: 'sherco'},
      {value: 'sinski'},
      {value: 'spazzio'},
      {value: 'sukida'},
      {value: 'suzuki'},
      {value: 'tgb'},
      {value: 'tvs'},
      {value: 'triumph'},
      {value: 'um'},
      {value: 'ybico'},
      {value: 'vento'},
      {value: 'vespa'},
      {value: 'victory'},
      {value: 'yamaha'},
      {value: 'yumbo'},
      {value: 'zongshen'},
      {value: 'zundapp'}
    ];

    vm.bodyStyle = [
      {value: 'suv', name: 'suv'},
      {value: 'truck', name: 'truck'},
      {value: 'sedan', name: 'sedan'},
      {value: 'van', name: 'van'},
      {value: 'coupe', name: 'coupe'},
      {value: 'wagon', name: 'wagon'},
      {value: 'convertible', name: 'convertible'},
      {value: 'sports-car', name: 'sports Car'},
      {value: 'crossover', name: 'crossover'},
      {value: 'luxury', name: 'luxury'},
      {value: 'hatchback', name: 'hatchback'}
    ];

    function init() {
      carService.async().then(function (data) {
        vm.car = data;

        var cars = _(data).forEach(function(value) {
          vm.cars = {};
          vm.cars.brand = value.brand;
          vm.cars.model = value.brandModel;
          vm.cars.image = value.images[0];
          vm.cars.price = value.price;
          vm.cars.year = value.year;
        });
      });

      bikeService.async().then(function (data) {
        vm.bike = data;

        var bikes = _(data).forEach(function(value) {

          vm.bikes = {};
          vm.bikes.brand = value.brand;
          vm.bikes.model = value.brandModel;
          vm.bikes.image = value.images[0];
          vm.bikes.price = value.price;
          vm.bikes.year = value.year;
        });
      });
    }
    init(); 
  }
})();

