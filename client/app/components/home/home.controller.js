class HomeController {
  static $inject = ['$rootScope'];
  name = 'home';
  constructor($rootScope) {
    this.$rootScope = $rootScope;
  }
  toggleMenu = ()=> {
    this.$rootScope.appMenu.toggleMenu();
  };
}

export default HomeController;
