import angular from 'angular';
import Toolbar from './toolbar/toolbar'

let commonModule = angular.module('app.common', [
  Toolbar.name
]);

export default commonModule;
