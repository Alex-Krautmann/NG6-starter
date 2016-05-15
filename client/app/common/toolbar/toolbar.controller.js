class ToolbarController {
  name = 'app.common.toolbar';

  static $inject = ['$rootScope'];
  constructor($rootScope) {
    this.$rootScope = $rootScope;
  }
  openAppSplitterSide() {
    this.$rootScope.appSplitter.left.open();
  }
}

export default ToolbarController;
