// eslint-disable-next-line no-undef
sap.ui.define(
  ['sap/ui/core/UIComponent', 'sap/ui/model/json/JSONModel'],
  function (UIComponent, JSONModel) {
    'use strict'
    return UIComponent.extend('sap.ui.webapp.Component', {
      metadata: {
        interfaces: ['sap.ui.core.IAsyncContentCreation'],
        manifest: 'json'
      },
      init: function () {
        UIComponent.prototype.init.apply(this, arguments)

        const oData = {
          recipient: {
            name: 'World'
          }
        }

        const oModel = new JSONModel(oData)
        this.setModel(oModel)
      }
    })
  }
)
