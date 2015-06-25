// vendor imports
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import '../../node_modules/angular-material/angular-material.css';

// app imports
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

let app = angular.module('app', [
    ngMaterial,
    uiRouter,
    Common.name,
    Components.name
]);

app.directive('app', AppComponent);
