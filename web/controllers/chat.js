steal('jquery/controller', 'jquery/view', 'jquery/view/ejs', function () {

    $.Controller('Chat', {

        init: function () {
            this.element.html('views/chat.ejs', {});
        },

        '.submit_chat click': function (el, ev) {
            ev.preventDefault();
            var chatEl = this.element;
            var postText = chatEl.find('textarea').val();
            chatEl.find('ul').append('<li><strong>Me:</strong> ' + postText + '</li>');
            chatEl.find('textarea').val('');
            setTimeout(function () {
                chatEl.find('ul').append('<li><strong>John:</strong> I agree with you.</li>');
            }, 1000);
        }
    });

});