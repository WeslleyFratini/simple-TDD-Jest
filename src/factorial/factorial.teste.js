import getFactorial from './factorial'; 

describe('Happy Path', () =>{
    
    teste('getFactorial should be a function', () => {    
        expect(getFactorial).toBeInstanceOf(Function)
    })
    
    test('getFactorial(3) should return 6', () =>{
        const actual = getFactorial(3)
        const expected = 6
    
        expect(actual).toBe(expected)
    })
    
    test('getFactorial(3) should return 24', () =>{
        const actual = getFactorial(4)
        const expected = 24
    
        expect(actual).toBe(expected)
    })
})

describe('Unhappy Path', () => {
    test('getFactorial() should throw a TypeError', () =>{
        try{
            getFactorial()
        }catch(error){
            expect(error.name).toBe('TypeError')
        }
    })
})
