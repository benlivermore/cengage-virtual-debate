steal('jquery/controller', 'jquery/view', 'jquery/view/ejs', function () {

    $.Controller('TabController', {
        init: function () {
            
        },

        '.debateTab click': function () {
            this.element.find('#debate').show();
            this.element.find('#task').hide();
        },

        '.taskTab click': function () {
            this.element.find('#task').show();
            this.element.find('#debate').hide();
        }
    });

    $.Controller('TaskController', {
        init: function () {
            this.element.html('views/start.ejs', {});
        },

        '.start click': function () {
            this.element.html('views/write.ejs', {name:"Write opening argument"});
        }
    });
});