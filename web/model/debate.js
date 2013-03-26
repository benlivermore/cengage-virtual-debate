steal('jquery/model', 'jquery/dom/fixture', function () {
    $.fixture('GET /service/debate/{id}', 'fixtures/service.debate.get');

    $.Model('Debate', {
        findOne: 'GET /service/debate/{id}'
    }, {});


    $.Model('Post', {
        findOne: 'GET mindapp/service/post'
    }, {});
});