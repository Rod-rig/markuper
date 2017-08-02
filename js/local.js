import $ from 'jquery';
require('../postcss/styles.css');

$(document).ready(function () {
    let app = {
        vars: {
            timeAnimation: 200,
            window: $(window)
        }
    };

    let initApp = () => {
        for (let method in app) {
            if ((typeof app[method] === 'function') && app.hasOwnProperty(method)) {
                app[method]();
            }
        }
    };

    initApp();
});