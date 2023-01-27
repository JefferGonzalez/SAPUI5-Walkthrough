// eslint-disable-next-line no-undef
sap.ui.define(
  [
    'sap/ui/test/opaQunit',
    './pages/App'
  ],
  function () {
    'use strict'

    // eslint-disable-next-line no-undef
    QUnit.module('Navigation')

    // eslint-disable-next-line no-undef
    opaTest('Should open the Hello dialog', function (Given, When, Then) {
      // Arrangements
      Given.iStartMyUIComponent({
        componentConfig: {
          name: 'sap.ui.webapp'
        }
      })

      // Actions
      When.onTheAppPage.iPressTheSayHelloWithDialogButton()

      // Assertions
      Then.onTheAppPage.iShouldSeeTheHelloDialog()

      // Cleanup
      Then.iTeardownMyApp()
    })
  }
)
