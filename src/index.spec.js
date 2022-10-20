import { checkInn } from '.';

describe('Check if inn is correct', () => {
    it('inn has no spaces', () => {
        expect(checkInn(' 0000000000')).toBe(false)
        expect(checkInn('0000 000000')).toBe(false)
        expect(checkInn('0000000000 ')).toBe(false)
    })
    it('inn has length of 10', () => {
        const inn = '00000000001111'
        expect(checkInn(inn)).toBe(false)
    })
    it('inn has length of 12', () => {
        const inn = '00000000001111'
        expect(checkInn(inn)).toBe(false)
    })
    it('inn has only digits', () => {
        const inn = '123456789a'
        expect(checkInn(inn)).toBe(false)
    })
    it('inn with 10 digits wrong control sum', () => {
        const inn = '1234567890'
        expect(checkInn(inn)).toBe(false)
    })
    it('inn with 10 digits right control sum', () => {
        const inn = '7704113772'
        expect(checkInn(inn)).toBe(true)
    })
    it('inn with 12 digits wrong control sum', () => {
        const inn = '123456789012'
        expect(checkInn(inn)).toBe(false)
    })
    it('inn with 12 digits right control sum', () => {
        const inn = '500100732259'
        expect(checkInn(inn)).toBe(true)
    })
});

