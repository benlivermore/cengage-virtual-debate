steal('jquery/controller', 'jquery/view', 'jquery/view/ejs', function () {

    $.Controller('TaskController', {
        init: function () {
            this.element.html('views/start.ejs', {});
        },

        '.show click': function () {
            
            this.element.html('views/start.ejs', {});
        }
    });
});