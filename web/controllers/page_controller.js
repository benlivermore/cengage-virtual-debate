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

        '.start click': function (el, ev) {
            ev.preventDefault();
            this.element.html('views/write.ejs', {name:"Write opening argument"});
        },

        '.submit click': function (el, ev) {
            ev.preventDefault();
            this.element.html('views/reviews.ejs', {});
        },

        '.vote click': function (el, ev) {
            ev.preventDefault();
            $('.role').removeClass('chosen');
            $(el).closest('.role').addClass('chosen');
        },

        '.submit_vote': function (el, ev) {
            ev.preventDefault();
            this.element.html('views/revise.ejs', {});
        }
    });
});