sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.HelloPanel", {

		onShowHello: function() {
			// read message from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			// show message
			MessageToast.show(sMsg);
		},

		onOpenDialog: function() {
			// var oView = this.getView();
			// var oDialog = oView.byId("helloDialog");
			// // create dialog lazily
			// if (!oDialog) {
			// 	//create dialog via fragment factory
			// 	oDialog = sap.ui.xmlfragment(oView.getId(), "sap.ui.demo.wt.view.HelloDialog",this);
			// 	// connect dialog to view (models,lifecycle)
			// 	oView.addDependent(oDialog);
			// }

			// oDialog.open();
			
			this.getOwnerComponent().openHelloDialog();
			
		}
		
		// onCloseDialog:function(){
		// 	this.getView().byId("helloDialog").close();
		// }

	});

});