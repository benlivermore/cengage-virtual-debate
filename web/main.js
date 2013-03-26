steal('model/debate.js', function () {
    Debate.findOne({}, function (data) {
        console.log(data);
    }, function () {
        console.log("error");
    });

});