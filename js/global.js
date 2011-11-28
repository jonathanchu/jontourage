var App = {
    init: function() {
        var path = window.location.pathname;
        var path_a = path.split('/');
        var mode = path_a[1];

        switch (mode) {
            case '':
                window.setTimeout(App.pageHome, 100);
                break;
            default:
        }
    },

    pageHome: function() {
    },
}

$(document).ready(function() {
    App.init();
});
