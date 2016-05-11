import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

angular.module('app', [
    uiRouter,
    Common.name,
    Components.name
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .component('app', AppComponent);

// Bootsraps application after requiring onsenui
window.ons = require('onsenui/js/onsenui');
let docEl = angular.element(document);
docEl.ready(function() {
  require('onsenui/js/angular-onsenui');
  angular.bootstrap(docEl.find('body')[0], ['app'], {strictDi: true});
});
