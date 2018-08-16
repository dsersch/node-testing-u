const expect = require('expect');
const utils = require('./utils.js');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
    var res = utils.square(2)

    expect(res).toBe(4).toBeA('number');
})

it('should verify names are set', () => {
    var user = utils.setName({age: 33, location: 'Los Angeles'}, 'Dave Sersch')

    expect(user).toInclude({firstName: 'Dave', lastName: 'Sersch'});
    expect(user.firstName).toBeA('string');
    expect(user.lastName).toBeA('string');
})

// it('should expect some values', () => {
//     //expect(12).toNotBe(11);
//     //expect({name: 'dave'}).toEqual({name: 'dave'});
//     expect([2, 3, 4, 5]).toInclude(5)
//     expect({
//         name: 'Dave',
//         age: 33,
//         location: "my location"
//     }).toExclude({age: 31})
// })