const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    }

    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy()
        spy('dave', 33);
        expect(spy).toHaveBeenCalledWith('dave', 33)
    })

    it('should call saveUser with user object', () => {
        var email = "someemail@mail.com"
        var password = "password"

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    })
})