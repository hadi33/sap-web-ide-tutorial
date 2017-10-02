sap.ui.define([
	"sap/ui/base/Object"
],function(UI5Object){
	"use strict";
	return UI5Object.extend("sap.ui.demo.wt.controller.HelloDialog",{
		contructor:function(oView){
			this._oView = oView;
		},
		
		open:function(){
			var oView = this._oView;
			var oDialog = oView.byId("helloDialog");
			
			//create dialog lazily
			if(!oDialog){
				var oFragmentController = {
						onCloseDialog:function(){
							oDialog.close();
					} 
				};
				//create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getyId(),"sap.ui.demo.view.HelloDialog",oFragmentController);
				// connect dialog to the root view of this component(model,lyfecycle)
				oView.addDependent(oDialog);
				
			}
			oDialog.open();
		}
		
	});
});