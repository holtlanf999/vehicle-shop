(function() {
  'use strict';

  angular
    .module('appClient')
    .controller('SellController', SellController);

  /** @ngInject */
  function SellController(Upload, cloudinary) {

    var vm = this;

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


    vm.cloudObj = {
      url: 'https://api.cloudinary.com/v1_1/holtdinary/upload',
      data: {
        upload_preset: 'fdybm3ns',
        tags: 'vehicle-image',
        context: 'photo=test'
      }
    };

    function submitVehicle() {
      console.log(this);
      
      vm.cloudObj.data.file = document.querySelector('#img-upload').files[0];

      var uploadImg = Upload.upload(vm.cloudObj)
      .progress(function (param) {
        var p = Math.round((param.loaded * 100.0) / param.total);
        var status = "Uploading... " + p + "%";
        console.log(status);
      })
      .success(function (data, status, headers, config) {
        console.log(data.url);
      })
      .error(function (data, status, headers, config) {
        console.log('error');
      });
    }

    vm.submitVehicle = submitVehicle;

  }
})();
