const expect = require('expect');
const utils = require('./utils.js');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
        
            expect(res).toBe(44).toBeA('number');
        });
        
        it('should async add two numbers', (done) => {
            utils.asyncAdd(3, 4, (sum) => {
                expect(sum).toBe(7).toBeA('number')
                done()
            })
        })
    })
    
    describe('#squares', () => {
        it('should square a number', () => {
            var res = utils.square(2)
        
            expect(res).toBe(4).toBeA('number');
        })
        
        it('should asny square a number', (done) => {
            utils.asyncSquare(3, (square) => {
                expect(square).toBe(9).toBeA('number')
                done();
            })
        })
    })
    
    describe('#playground', () => {
        it('should verify names are set', () => {
            var user = utils.setName({age: 33, location: 'Los Angeles'}, 'Dave Sersch')
        
            expect(user).toInclude({firstName: 'Dave', lastName: 'Sersch'});
            expect(user.firstName).toBeA('string');
            expect(user.lastName).toBeA('string');
        })
    })
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