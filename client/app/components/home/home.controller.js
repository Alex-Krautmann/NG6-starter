class HomeController {
    constructor(NavState) {
        this.name = 'home';
        NavState.setStateTitle('Home');
    }
    getNavStateTitle () {
        return this.NavState.getStateTitle();
    }
}


export default HomeController;
