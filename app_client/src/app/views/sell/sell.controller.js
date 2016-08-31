(function() {
  'use strict';

  angular
    .module('appClient')
    .controller('SellController', SellController);

  /** @ngInject */
  function SellController(Upload, cloudinary, $http, $log) {
    var vm = this;

    // form options content objects...
    vm.category = [
      {value: 'car'},
      {value: 'motorcycle'}
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

    vm.condition = [
      {value: 'new'},
      {value: 'used'},
      {value: 'wrecked'}
    ];

    vm.doors = [
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4},
      {value: 5},
      {value: 6}
    ];

    vm.driveTrain = [
      {value: 'fwd', name: 'front Wheel Drive (FWD)'},
      {value: 'rwd', name: 'rear Wheel Drive (RWD)'},
      {value: 'awd', name: 'all Wheel Drive (AWD)'},
      {value: '4x4', name: 'all Terrain (4X4)'},
      {value: '6x6', name: 'all Terrain (6X6)'}
    ];

    vm.transmition = [
      {value: 'auto', name: 'automatic transmition'},
      {value: 'manual', name: 'manual transmition'}
    ];

    vm.fuelType = [
      {value: 'gasoline'},
      {value: 'diesel'},
      {value: 'electric'},
      {value: 'hybrid'}
    ];

    vm.bodyType = [
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

    vm.rebuild = [
      {value: 'false', name: 'yes'},
      {value: 'true', name: 'no'}
    ];

    vm.year = [
      {value: '2016'},
      {value: '2015'},
      {value: '2014'},
      {value: '2013'},
      {value: '2012'},
      {value: '2011'},
      {value: '2010'},
      {value: '2009'},
      {value: '2008'},
      {value: '2007'},
      {value: '2006'},
      {value: '2005'},
      {value: '2004'},
      {value: '2003'},
      {value: '2002'},
      {value: '2001'},
      {value: '2000'},
      {value: '1999'},
      {value: '1998'},
      {value: '1997'},
      {value: '1996'},
      {value: '1995'},
      {value: '1994'},
      {value: '1993'},
      {value: '1992'},
      {value: '1991'},
      {value: '1990'},
      {value: '1989'},
      {value: '1988'},
      {value: '1987'},
      {value: '1986'},
      {value: '1985'},
      {value: '1984'},
      {value: '1983'},
      {value: '1982'},
      {value: '1981'},
      {value: '1980'},
      {value: '1979'},
      {value: '1978'},
      {value: '1977'},
      {value: '1976'},
      {value: '1975'},
      {value: '1974'},
      {value: '1973'},
      {value: '1972'},
      {value: '1971'},
      {value: '1970'},
      {value: '1969'},
      {value: '1968'},
      {value: '1967'},
      {value: '1966'},
      {value: '1965'},
      {value: '1964'},
      {value: '1963'},
      {value: '1962'},
      {value: '1961'},
      {value: '1960'},
      {value: '1959'},
      {value: '1958'},
      {value: '1957'},
      {value: '1956'},
      {value: '1955'},
      {value: '1954'},
      {value: '1953'},
      {value: '1952'},
      {value: '1951'},
      {value: '1950'},
      {value: '1949'},
      {value: '1948'},
      {value: '1947'},
      {value: '1946'},
      {value: '1945'},
      {value: '1944'},
      {value: '1943'},
      {value: '1942'},
      {value: '1941'},
      {value: '1940'}
    ];

    // cloudinary image upload boject...
    vm.cloudObj = {
      url: 'https://api.cloudinary.com/v1_1/holtdinary/upload',
      data: {
        upload_preset: 'fdybm3ns',
        tags: 'vehicle-image',
        context: 'photo=test'
      }
    };

    // form manipulation method...
    vm.submitVehicle = function () {

      var vehicle = {};

      vm.cloudObj.data.file = document.querySelector('#img-upload').files[0];
      Upload.upload(vm.cloudObj)
      .progress(function (param) {
        var p = Math.round((param.loaded * 100.0) / param.total);
        var status = 'Uploading... ' + p + '%';
        $log.log(status);
      })
      .success(function (data) {
        $log.debug('image URL: ', data.url);
        $log.log('vehicle category: ' + vehicle.category);
        vehicle.images = [data.url]; /*its an array to match the mongo model when uploaded to db*/

        if (vehicle.category == 'car') {
          $http.post('http://localhost:4000/main/car/', vehicle)
          .success(function (data, status, headers, config) {
            postDone(data, status, config);            
          })
          .error(function (data, status) {
            postErr(data, status);            
          })
        } else if (vehicle.category == 'motorcycle') {
          $http.post('http://localhost:4000/main/bike/', vehicle)
          .success(function (data, status, headers, config) {
            postDone(data, status, config);
          })
          .error(function (data, status) {
            postErr(data, status);
          })
        }

        var postDone = function (data, status, body) {
          $log.log('req-body: ', body);
          $log.log('success: ' + status);
          $log.log('response: ' + data);
        }

        var postErr = function (data, status) {
          $log.error('error: ' + status);
          $log.log('response: ' + data);
        }

      })
      .error(function (data) {
        $log.error('error: ', data);
      });

      vehicle.category = vm.categorySelect,
      vehicle.carBrand = vm.carBrandSelect,
      vehicle.motoBrand = vm.motoBrandSelect,
      vehicle.brandModel = vm.model,
      vehicle.color = vm.color,
      vehicle.comments = vm.comment,
      vehicle.condition = vm.conditionSelect,
      vehicle.doors = vm.doorsSelect,
      vehicle.driveType = vm.driveType,
      vehicle.engineType = vm.engineType,
      vehicle.engineDisplacement = vm.displacement,
      vehicle.transmition = vm.trans,
      vehicle.fuelType = vm.fuelTypeSelect,
      vehicle.bodyType = vm.bodyStyleSelect,
      vehicle.mileage = vm.milleage,
      vehicle.modifications = vm.mods,
      vehicle.plate = vm.plate,
      vehicle.powerOutput = vm.power,
      vehicle.price = vm.price,
      vehicle.rebuilt = vm.rebuilt,
      vehicle.year = vm.yearSelect,
      vehicle.extras = {};
      /*extras properties*/
      vehicle.extras.powerSteering = vm.pwrSteering,
      vehicle.extras.tintedGlass = vm.glass,
      vehicle.extras.powerMirrors = vm.pwrMirrors,
      vehicle.extras.ac = vm.ac,
      vehicle.extras.luxuryRims = vm.rims,
      vehicle.extras.halogenLights = vm.halogen,
      vehicle.extras.cruiseControl = vm.cruise,
      vehicle.extras.esc = vm.esc,
      vehicle.extras.reverseCamera = vm.reverseCam,
      vehicle.extras.steeringWheelControls = vm.wheelCtrls,
      vehicle.extras.memorySeats = vm.memSeats,
      vehicle.extras.travelComputer = vm.travelCpu,
      vehicle.extras.rainSensor = vm.rainSensor,
      vehicle.extras.airbags = vm.airbags,
      vehicle.extras.alarm = vm.alarm,
      vehicle.extras.defroster = vm.defroster,
      vehicle.extras.turbo = vm.turbo,
      vehicle.extras.reverseSensors = vm.reverseSensors,
      vehicle.extras.startButton = vm.startBtn,
      vehicle.extras.smartKey = vm.smartKey,
      vehicle.extras.adjustableSteering = vm.adjSteering,
      vehicle.extras.powreSeats = vm.pwrSeats,
      vehicle.extras.powerWindows = vm.pwrWindows,
      vehicle.extras.absBreaks = vm.abs,
      vehicle.extras.sunroof = vm.sunroof,
      vehicle.extras.panoramicRoof = vm.panRoof,
      vehicle.extras.usbAuxRadio = vm.radioUsbAux,
      vehicle.extras.lcdScreen = vm.lcdScreen;
    }
  }
})();
