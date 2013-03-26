steal('jquery/controller', 'jquery/view', 'jquery/view/ejs', function () {

    $.Controller('TaskController', {
        init: function () {
            this.element.html('views/start.ejs', {});
        },

        '.start click': function () {
            this.element.html('views/write.ejs', {name:"Write opening argument"});
        }
    });
});