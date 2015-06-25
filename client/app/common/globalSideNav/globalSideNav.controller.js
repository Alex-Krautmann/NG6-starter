class GlobalSideNavController {
    constructor ($mdMedia, $mdSidenav) {

        this.name = 'globalSideNav';
        this.$mdMedia = $mdMedia;
        this.$mdSidenav = $mdSidenav;
        this.sideNavComponentId = 'left'; //todo: move to const file

        this.sections = [
            {name: 'Home', sref: 'home'},
            {name: 'About', sref: 'about'}
        ];
    }

    isNavLocked () {
        return this.$mdMedia('gt-md');
    }

    closeNav () {
        this.$mdSidenav(this.sideNavComponentId).close();
    }
}


export default GlobalSideNavController;
