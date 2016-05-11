import angular from 'angular';
import uiRouter from 'angular-ui-router';
import heroComponent from './hero.component';

let heroModule = angular.module('app.common.hero', [
  uiRouter
])

.component('appCommonHero', heroComponent);

export default heroModule;
