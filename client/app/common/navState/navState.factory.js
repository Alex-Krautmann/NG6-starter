let navStateFactory = function () {
    const state = {
        title: ''
    };

    const APP_NAME = 'Material NG6 Starter';

    let getStateTitle = ()=> {
        return state.title;
    };

    let setStateTitle = (title)=> {
        state.title = title;
    };

    return {getStateTitle, setStateTitle, APP_NAME};
};

export default navStateFactory;
