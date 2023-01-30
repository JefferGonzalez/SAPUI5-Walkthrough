// eslint-disable-next-line no-undef
sap.ui.define(
  ['sap/ui/core/UIComponent', 'sap/ui/model/json/JSONModel', 'sap/ui/Device'],
  function (UIComponent, JSONModel, Device) {
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

        // set device model
        const oDeviceModel = new JSONModel(Device)
        oDeviceModel.setDefaultBindingMode('OneWay')
        this.setModel(oDeviceModel, 'device')

        // create the views based on the url/hash
        this.getRouter().initialize()
      }
    })
  }
)
