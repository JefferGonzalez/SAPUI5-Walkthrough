// eslint-disable-next-line no-undef
sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
  ],
  (Controller, JSONModel, Filter, FilterOperator) => {
    'use strict'
    return Controller.extend('sap.ui.webapp.controller.App', {
      onInit: function () {
        const oModel = new JSONModel()
        fetch('https://rickandmortyapi.com/api/character')
          .then((response) => response.json())
          .then(({ results }) => oModel.setData(results))

        this.getView().setModel(oModel, 'characters')
      },
      onFilter: function (oEvent) {
        const aFilter = []
        const sQuery = oEvent.getParameter('query')
        if (sQuery) {
          aFilter.push(new Filter('name', FilterOperator.Contains, sQuery))
        }
        const oList = this.byId('list')
        const oBinding = oList.getBinding('items')
        oBinding.filter(aFilter)
      }
    })
  }
)
