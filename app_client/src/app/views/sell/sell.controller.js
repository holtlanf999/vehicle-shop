(function() {
  'use strict';

  angular
    .module('appClient')
    .controller('SellController', SellController);

  /** @ngInject */
  function SellController(Upload, cloudinary) {
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
      {value: 'zil'},
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
      {value: 'zundapp'},
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
      {value: 6},
    ];

    vm.driveTrain = [
      {value: 'fwd', name: 'Front Wheel Drive (FWD)'},
      {value: 'rwd', name: 'Rear Wheel Drive (RWD)'},
      {value: 'awd', name: 'All Wheel Drive (AWD)'},
      {value: '4x4', name: 'All Terrain (4X4)'},
      {value: '6x6', name: 'All Terrain (6X6)'},
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

    vm.bodyStyle = [
      {value: 'suv', name: 'SUV'},
      {value: 'truck', name: 'Truck'},
      {value: 'sedan', name: 'Sedan'},
      {value: 'van', name: 'Van'},
      {value: 'coupe', name: 'Coupe'},
      {value: 'wagon', name: 'Wagon'},
      {value: 'convertible', name: 'Convertible'},
      {value: 'sports-car', name: 'Sports Car'},
      {value: 'crossover', name: 'Crossover'},
      {value: 'luxury', name: 'Luxury'},
      {value: 'hatchback', name: 'Hatchback'},
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

    vm.uploadFiles = function ($files, $invalidFiles) {
      console.log(uploadFiles);
    };

    // form manipulation method...
    vm.submitVehicle = function () {

      console.log('submitVehicle');
      
      // vm.cloudObj.data.file = document.querySelector('#img-upload').files[0];

      // var uploadImg = Upload.upload(vm.cloudObj)
      // .progress(function (param) {
      //   var p = Math.round((param.loaded * 100.0) / param.total);
      //   var status = 'Uploading... ' + p + '%';
      //   console.log(status);
      // })
      // .success(function (data, status, headers, config) {
      //   console.log('image URL: ', data.url);
      // })
      // .error(function (data, status, headers, config) {
      //   console.log('error');
      // });
    }
  }
})();
