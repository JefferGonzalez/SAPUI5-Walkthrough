// eslint-disable-next-line no-undef
sap.ui.define(
  ['sap/ui/core/ComponentContainer'],
  function (ComponentContainer) {
    'use strict'

    new ComponentContainer({
      name: 'sap.ui.webapp',
      settings: {
        id: 'webapp'
      },
      async: true
    }).placeAt('content')
  }
)
