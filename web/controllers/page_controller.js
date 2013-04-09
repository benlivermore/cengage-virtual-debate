steal('jquery/controller', 'jquery/view', 'jquery/view/ejs', 'jquery/dom/route', 'jquery/lang/observe/delegate', 'vdebate/controllers/chat.js', 'clui/simplemodal', function () {

    $.Controller('TabController', {

        '.debateTab click': function () {
            this.element.find('#debate').show();
            this.element.find('#task').hide();
        },
        '.taskTab click': function () {
            this.element.find('#task').show();
            this.element.find('#debate').hide();
        }
    });

    $.Controller('ReviseTabController', {

        '.tab click': function (el, ev) {
            ev.preventDefault();
            $('.tab').removeClass('active');
            $(el).addClass('active');
            var isTab2Hidden = $('.tab2').is(':hidden');
            $('.tabtext').hide();

            if (isTab2Hidden) {
                $('.tab2').show();
            } else {
                $('.tab1').show();
            }
        }
    });
    $.Controller('TaskController', {
        init: function () {
            this.element.html('views/start.ejs', {});
            $(".tabs").hide();
        },

        '{$.route} task change': function (name, ev, param, action, val) {
            this.element.html('views/' + val + '.ejs', VdebateModel);
            if (val != "write" && val!="review") {
            //$(".tabs").show();
            }
            $(window).scrollTop(0);

            if (val === "revise") {
                $('.tabs').revise_tab();
                $('#chat').chat();
                $('#modal').html('views/approve.ejs', VdebateModel);
            }
        },

        '.start click': function (el, ev) {
            ev.preventDefault();
            $.route.attr('task', 'write');
        },

        '.continue click': function (el, ev) {
            ev.preventDefault();
            $.route.attr('task', 'read2');
        },
        '.final click': function (el, ev) {
            ev.preventDefault();
            $.route.attr('task', 'final');
        },

        '.submit click': function (el, ev) {
            ev.preventDefault();
            VdebateModel.openingArgument = this.element.find('textarea').val();
            $.route.attr('task', 'review');
        },

        '.vote click': function (el, ev) {
            ev.preventDefault();
            VdebateModel.votedArgument = el.parent().siblings('.desc').text();
            $('.role').removeClass('chosen');
            $(el).closest('.role').addClass('chosen');
        },

        '.submit_vote click': function (el, ev) {
            ev.preventDefault();
            $.route.attr('task', 'revise');
            
        },
        '.submit_revision click': function () {
            $('#modal').clui_simplemodal();
        },

        '.reject click': function () {
            $('#modal').clui_simplemodal('close');
        },

        '.approve click': function () {
            $('#modal').clui_simplemodal('close');
            $.route.attr('task', 'read');
        },

        '.group_submit click': function () {
            $.route.attr('task', 'write');
        },

        
        '.subpage click': function(){
            $.route.attr('task', 'start');
        },
        '.finalhead click': function(){
            $.route.attr('task', 'start');
        }


    });
});