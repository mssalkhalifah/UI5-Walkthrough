sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
      },
      /**
       * @override
       */
      init: function () {
        UIComponent.prototype.init.apply(this, arguments);

        var oData = {
          recipient: {
            name: "World",
          },
        };

        var oModel = new JSONModel(oData);
        this.setModel(oModel);
      },
    });
  }
);
