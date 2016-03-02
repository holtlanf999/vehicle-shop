(function() {
  'use strict';

  angular
    .module('appClient')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'app/views/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'register'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/views/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('action', {
        url: '/',
        templateUrl: 'app/views/action/action.html',
        controller: 'ActionController',
        controllerAs: 'action'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'app/views/categories/categories.html',
        controller: 'CategoriesController',
        controllerAs: 'categories'
      })
      .state('buy', {
        url: '/buy',
        templateUrl: 'app/views/buy/buy.html',
        controller: 'BuyController',
        controllerAs: 'buy'
      })
      .state('sell', {
        url: '/sell',
        templateUrl: 'app/views/sell/sell.html',
        controller: 'SellController',
        controllerAs: 'sell'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/views/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'profile'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
