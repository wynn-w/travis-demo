const assert = require('chai').assert
const app = require('../index')
describe("App", function () {
    it('app should return hello world', function () {
        assert.equal(app(), 'hello world')
    })
})
