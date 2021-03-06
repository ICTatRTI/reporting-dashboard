CocoManager.module("ActivityApp.Show", function(Show, CocoManager, Backbone, Marionette, $, _){
  Show.Controller = {
	showActivity: function(activity_title){
		var report_name = activity_title == null ? "" : activity_title+".html";
		// Loading mockup html pages
		$("#activity-template").load(CocoManager.config.templates + report_name, function(){			  
			Marionette.TemplateCache.clear("#activity-template","activity-options-template");
	  	    var activityHeadView = new Show.ActivityOptionsView();			
			var activityView = new Show.ActivityView()

		    CocoManager.dashboard.dashHeaderRegion.show(activityHeadView);
		    CocoManager.dashboard.dashMainRegion.show(activityView);
		});		
	  }  
	}	
});