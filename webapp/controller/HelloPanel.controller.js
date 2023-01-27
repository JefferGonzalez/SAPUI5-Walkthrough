// eslint-disable-next-line no-undef
sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast', 'sap/ui/core/Fragment'],
  function (Controller, MessageToast, _Fragment) {
    'use strict'

    return Controller.extend('sap.ui.webapp.controller.HelloPanel', {
      onShowHello: function () {
        // read message from i18n model
        const oBundle = this.getView().getModel('i18n').getResourceBundle()
        const sRecipient = this.getView()
          .getModel()
          .getProperty('/recipient/name')
        const sMesagge = oBundle.getText('helloMessage', [sRecipient])
        // show message
        MessageToast.show(sMesagge, {
          duration: 5000
        })
      },
      onOpenDialog: function () {
        if (!this.pDialog) {
          this.pDialog = this.loadFragment({
            name: 'sap.ui.webapp.view.fragments.HelloDialog'
          })
        }
        this.pDialog.then((oDialog) => {
          oDialog.open()
        })
      },
      onClose: function () {
        this.pDialog.then((oDialog) => {
          oDialog.close()
        })
      }
    })
  }
)
