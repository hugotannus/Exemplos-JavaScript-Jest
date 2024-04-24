import { toString } from "./dezena"

describe('Transforme uma dezena em um texto', () => {
    test('Caso seja 0', () => {
        expect(toString(0)).toBe("");
    });
    
    test('Caso seja 1', () => {
        expect(toString(1)).toBe("dez");
    });
    
    test('Caso seja 2', () => {
        expect(toString(2)).toBe("vinte");
    });
    
    test('Caso seja 3', () => {
        expect(toString(3)).toBe("trinta");
    });
    
    test('Caso seja 4', () => {
        expect(toString(4)).toBe("quarenta");
    });
    
    test('Caso seja 5', () => {
        expect(toString(5)).toBe("cinquenta");
    });
    
    test('Caso seja 6', () => {
        expect(toString(6)).toBe("sessenta");
    });
    
    test('Caso seja 7', () => {
        expect(toString(7)).toBe("setenta");
    });
    
    test('Caso seja 8', () => {
        expect(toString(8)).toBe("oitenta");
    });
    
    test('Caso seja "8"', () => {
        expect(toString("8")).toBe("oitenta");
    });
    
    test('Caso seja 9', () => {
        expect(toString(9)).toBe("noventa");
    });
    
    test('Caso seja maior que 9 (10)', () => {
        let x = 10
        expect(toString(x)).toBe(`10 não corresponde a uma dezena.`);
    });
    
    test('Caso seja maior que 9 (11)', () => {
        let x = 11
        expect(toString(x)).toBe(`11 não corresponde a uma dezena.`);
    });
    
    test('Caso seja menor que 0 (-10)', () => {
        let x = -10
        expect(toString(x)).toBe(`-10 não corresponde a uma dezena.`);
    });
    
    test('Caso seja uma string ("ABC")', () => {
        let x = "ABC"
        expect(toString(x)).toBe(`ABC não corresponde a uma dezena.`);
    });
    
    test('Caso seja um booleano (true)', () => {
        let x = true
        expect(toString(x)).toBe(`true não corresponde a uma dezena.`);
    });
    
    test('Caso seja um booleano (false)', () => {
        let x = false
        expect(toString(x)).toBe(`false não corresponde a uma dezena.`);
    });
});