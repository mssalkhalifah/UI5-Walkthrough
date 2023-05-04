sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
      /**
       * @override
       */
      onInit: function () {
        var oViewModel = new JSONModel({
          currency: "SAR",
        });

        this.getView().setModel(oViewModel, "view");
      },
    });
  }
);
