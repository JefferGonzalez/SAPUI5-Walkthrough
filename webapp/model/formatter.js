// eslint-disable-next-line no-undef
sap.ui.define([], function () {
  'use strict'
  return {
    statusText: function (sStatus) {
      const resourceBundle = this.getView().getModel('i18n').getResourceBundle()
      const ACTIONS = {
        A: () => resourceBundle.getText('invoiceStatusA'),
        B: () => resourceBundle.getText('invoiceStatusB'),
        C: () => resourceBundle.getText('invoiceStatusC')
      }

      return ACTIONS[sStatus] ? ACTIONS[sStatus]() : sStatus
    }
  }
})
