sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
	// "sap/ui/model/resource/ResourceModel"
], function(UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.wt.Component", {

		metadata: {
			// rootView: "sap.ui.demo.wt.view.App"
			manifest:"json"
		},
		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			// this.setModel(models.createDeviceModel(), "device");

			// set data model
			var oData = {
				recipient: {
					name: "World"
				}
			};

			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			// set i18n model
			// var i18nModel = new ResourceModel({
			// 	bundleName: "sap.ui.demo.wt.i18n.i18n"
			// });

			// this.setModel(i18nModel, "i18n");

		}
	});
});