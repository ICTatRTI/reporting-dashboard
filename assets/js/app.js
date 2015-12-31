var CocoManager = new Marionette.Application();

CocoManager.addRegions({
  headerRegion: "#header-region",
  mainRegion: "#main-region",
  drawerRegion: "#drawer-region",	
  dialog: "#dialog-region"
});

CocoManager.navigate = function(route,  options){
  options || (options = {});
  Backbone.history.navigate(route, options);
};

CocoManager.getCurrentRoute = function(){
  return Backbone.history.fragment
};

CocoManager.on("before:start", function(){
  var AppLayoutView = Marionette.LayoutView.extend({
    el: "#app-container",

    regions: {
      headerRegion: "#header-region",
      mainRegion: "#main-region",
      drawerRegion: "#drawer-region",
      dialog: "#dialog-region"
    }
  });
  
CocoManager.regions = new AppLayoutView();

CocoManager.regions.dialog.onShow = function(view){
    var self = this;
    var closeDialog = function(){
      self.stopListening();
      self.empty();
      self.$el.dialog("destroy");
    };

    this.listenTo(view, "dialog:close", closeDialog);

    this.$el.dialog({
      modal: true,
      title: view.title,
      width: "auto",
      close: function(e, ui){
        closeDialog();
      }
    });
  };
});

CocoManager.MainView = Marionette.ItemView.extend({
	className: "page-content",
	template: "#main-template"
});

CocoManager.ReportView = Marionette.ItemView.extend({
	className: "report-content",
	template: "#report-template",
});  
  
CocoManager.HeaderView = Marionette.ItemView.extend({
	template: "#header-template"
});
  
CocoManager.DrawerView = Marionette.ItemView.extend({
	template: "#drawer-template"
});
		
CocoManager.on("start", function(){
/*	
	var headerView = new CocoManager.HeaderView();
	CocoManager.headerRegion.show(headerView);

	var drawerView = new CocoManager.DrawerView();
	CocoManager.drawerRegion.show(drawerView);

	var mainView = new CocoManager.MainView();
	CocoManager.mainRegion.show(mainView);

    $("#report-template").load("report.html", function(){
		var reportView = new CocoManager.ReportView();
		reportView.render();
		CocoManager.mainRegion.show(reportView);
		console.log($("#report-template").html());
    });
*/		
    if(Backbone.history){
      Backbone.history.start();
      CocoManager.Dashboard.Show.Controller.showDashboard();
/*
      if(this.getCurrentRoute() === ""){
        CocoManager.trigger("contacts:list");
      }
*/	  
	}	
	
});
