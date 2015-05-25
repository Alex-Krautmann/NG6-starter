import angular from 'angular';
import UserFactory from './user.factory';

let userModule = angular.module('user', []);

userModule.factory('User', UserFactory);

export default userModule; 