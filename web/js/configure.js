steal('jquery', 'clui', 'jquery/controller', 'jquery/controller/view', 'jquery/view/ejs', 'jquery/lang/observe/delegate', 'clui/activity',  function() {

	 $.Controller('Vdebate.Configure', /** @Prototype */ {

        init: {
        },

        '.saveButton {Clui.support.activateEvent}': function() {
        	Clui.activity.add( {
		        name: 'Civil War Debate',
		        activityType: 2,
		        gradable: true,
		        scorable : true,
		        editable : false,
		        maxScore: 100,
		        maxTakes: 1,
		        scoreStrategy: 1,
		        manuallyGraded: true,
		        appActivityName: "Cengage.VirtualDebate/activities/vdebate",
		        viewURI: "/index.html"
		    });
        }
    });

	$.ready(function(){$('#virtualdebateconfigure').vdebate_configure()});
});