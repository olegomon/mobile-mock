(function ($) {

    var config = {
        app: 'http://jquerymobile.com/demos/1.2.0/docs/pages/popup'
    };

    var orientation = {
        landscape: 'landscape',
        portrait: 'portrait'
    };

    function toggleOrientation() {
		// TODO use .toggle()
        var $container = $('#mock-container');
        var $content = $('#mock-content');

        if($container.hasClass(orientation.landscape)) {
            $container.addClass(orientation.portrait);
            $content.addClass(orientation.portrait);

            $container.removeClass(orientation.landscape);
            $content.removeClass(orientation.landscape);

        } else if($container.hasClass(orientation.portrait)) {
            $container.removeClass(orientation.portrait);
            $content.removeClass(orientation.portrait);

            $container.addClass(orientation.landscape);
            $content.addClass(orientation.landscape);
        }
    }

    function showAppPage() {
        window.location.replace(config.app)
    }

    function loadPage() {
        var appContainer = $('#mock-content');
        appContainer.attr('src', config.app);
    }

    function init(){
        $('#reload').click(function() {
            loadPage();
        });

        $('#change-orientation').click(function() {
            toggleOrientation();
        });

        $('#change-view').click(function() {
            showAppPage();
        });

        var $container = $('#mock-container');
        var $content = $('#mock-content');
        $container.addClass(orientation.portrait);
        $content.addClass(orientation.portrait);
    }


    init();
    toggleOrientation();
    loadPage();
})(Zepto);

