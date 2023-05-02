sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
  function (Controller, MessageToast, Fragment) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
      /**
       * Displays a message toast with a personalized greeting.
       * @function
       * @name onShowHello
       * @memberOf sap.ui.demo.walkthrough.controller.HelloPanel
       * */
      onShowHello: function () {
        const oBundle = this.getView().getModel("i18n").getResourceBundle();
        const sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        const sMsg = oBundle.getText("helloMsg", [sRecipient]);

        MessageToast.show(sMsg);
      },

      onOpenDialog: function () {
        if (!this.pDialog) {
          this.pDialog = this.loadFragment({
            name: "sap.ui.demo.walkthrough.view.HelloDialog",
          });
        }

        this.pDialog.then(function (oDialog) {
          oDialog.open();
        });
      },

      onDialogClose: function () {
        this.byId("helloDialog").close();
      },
    });
  }
);
