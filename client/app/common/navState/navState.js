import angular from 'angular';
import NavStateFactory from './navState.factory';

let navStateModule = angular.module('common.navState', []);

navStateModule.factory('NavState', NavStateFactory);

export default navStateModule;
