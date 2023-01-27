// eslint-disable-next-line no-undef
QUnit.config.autostart = false

// eslint-disable-next-line no-undef
sap.ui.getCore().attachInit(function () {
  'use strict'

  // eslint-disable-next-line no-undef
  sap.ui.require(['sap/ui/webapp/test/unit/model/formatter.test'], function () {
    // eslint-disable-next-line no-undef
    QUnit.start()
  })
})
