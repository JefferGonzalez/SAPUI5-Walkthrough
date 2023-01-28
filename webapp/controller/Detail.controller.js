// eslint-disable-next-line no-undef
sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict'
  return Controller.extend('sap.ui.webapp.controller.Detail', {
    onInit: function () {
      const oRouter = this.getOwnerComponent().getRouter()
      oRouter
        .getRoute('detail')
        .attachPatternMatched(this._onObjectMatched, this)
    },
    _onObjectMatched: function (oEvent) {
      this.getView().bindElement({
        path:
          '/' +
          window.decodeURIComponent(
            oEvent.getParameter('arguments').invoicePath
          ),
        model: 'invoice'
      })
    }
  })
})
