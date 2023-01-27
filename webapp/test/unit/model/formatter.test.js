// eslint-disable-next-line no-undef
sap.ui.define(
  ['sap/ui/webapp/model/formatter', 'sap/ui/model/resource/ResourceModel'],
  function (formatter, ResourceModel) {
    'use strict'
    // eslint-disable-next-line no-undef
    QUnit.module('Formatting functions', {
      beforeEach: function () {
        this._oResourceModel = new ResourceModel({
          bundleUrl:
            // eslint-disable-next-line no-undef
            sap.ui.require.toUrl('sap/ui/webapp') + '/i18n/i18n.properties'
        })
      },
      afterEach: function () {
        this._oResourceModel.destroy()
      }
    })
    // eslint-disable-next-line no-undef
    QUnit.test('Should return the translated texts', function (assert) {
      const oModel = this.stub()
      oModel.withArgs('i18n').returns(this._oResourceModel)
      const oViewStub = {
        getModel: oModel
      }
      const oControllerStub = {
        getView: this.stub().returns(oViewStub)
      }

      const fnIsolatedFormatter = formatter.statusText.bind(oControllerStub)

      assert.strictEqual(
        fnIsolatedFormatter('A'),
        'New',
        'The long text for status A is correct'
      )

      assert.strictEqual(
        fnIsolatedFormatter('B'),
        'In Progress',
        'The long text for status B is correct'
      )

      assert.strictEqual(
        fnIsolatedFormatter('C'),
        'Done',
        'The long text for status C is correct'
      )

      assert.strictEqual(
        fnIsolatedFormatter('Foo'),
        'Foo',
        'The long text for status Foo is correct'
      )
    })
  }
)
