// eslint-disable-next-line no-undef
sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
    '../model/formatter'
  ],
  function (Controller, JSONModel, Filter, FilterOperator, formatter) {
    'use strict'
    return Controller.extend('sap.ui.webapp.controller.InvoiceList', {
      formatter,
      onInit: function () {
        const oViewModel = new JSONModel({
          currency: 'USD'
        })
        this.getView().setModel(oViewModel, 'view')
      },
      onFilterInvoices: function (oEvent) {
        const aFilter = []
        const sQuery = oEvent.getParameter('query')
        if (sQuery) {
          aFilter.push(
            new Filter('ProductName', FilterOperator.Contains, sQuery)
          )
        }
        const oList = this.byId('invoiceList')
        const oBinding = oList.getBinding('items')
        oBinding.filter(aFilter)
      },
      onPress: function (oEvent) {
        const oItem = oEvent.getSource()
        const oRouter = this.getOwnerComponent().getRouter()
        oRouter.navTo('detail', {
          invoicePath: window.encodeURIComponent(oItem.getBindingContext('invoice').getPath().substr(1))
        })
      }
    })
  }
)
