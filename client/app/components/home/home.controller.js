class HomeController {

  name = 'home';

  static $inject = ['$rootScope'];
  constructor($rootScope) {
    this.$rootScope = $rootScope;
  }

  toggleSplitterSide = ()=> {
    this.$rootScope.appSplitter.left.toggle();
  }
  
}

export default HomeController;
