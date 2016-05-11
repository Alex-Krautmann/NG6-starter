import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';

let navbarModule = angular.module('app.commmon.navbar', [
  uiRouter
])

.component('appCommonNavbar', navbarComponent);

export default navbarModule;
