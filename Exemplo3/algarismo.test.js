import { toString } from "./algarismo"

describe('Transforme um algarismo em um texto', () => {
    test('Caso seja 0', () => {
        expect(toString(0)).toBe("zero");
    });
    
    test('Caso seja 1', () => {
        expect(toString(1)).toBe("um");
    });
    
    test('Caso seja 2', () => {
        expect(toString(2)).toBe("dois");
    });
    
    test('Caso seja 3', () => {
        expect(toString(3)).toBe("três");
    });
    
    test('Caso seja 4', () => {
        expect(toString(4)).toBe("quatro");
    });
    
    test('Caso seja 5', () => {
        expect(toString(5)).toBe("cinco");
    });
    
    test('Caso seja 6', () => {
        expect(toString(6)).toBe("seis");
    });
    
    test('Caso seja 7', () => {
        expect(toString(7)).toBe("sete");
    });
    
    test('Caso seja 8', () => {
        expect(toString(8)).toBe("oito");
    });
    
    test('Caso seja "8"', () => {
        expect(toString("8")).toBe("oito");
    });
    
    test('Caso seja 9', () => {
        expect(toString(9)).toBe("nove");
    });
    
    test('Caso seja maior que 9 (10)', () => {
        let x = 10
        expect(toString(x)).toBe(`10 não corresponde a um algarismo.`);
    });
    
    test('Caso seja maior que 9 (11)', () => {
        let x = 11
        expect(toString(x)).toBe(`11 não corresponde a um algarismo.`);
    });
    
    test('Caso seja menor que 0 (-10)', () => {
        let x = -10
        expect(toString(x)).toBe(`-10 não corresponde a um algarismo.`);
    });
    
    test('Caso seja uma string ("ABC")', () => {
        let x = "ABC"
        expect(toString(x)).toBe(`ABC não corresponde a um algarismo.`);
    });
    
    test('Caso seja um booleano (true)', () => {
        let x = true
        expect(toString(x)).toBe(`true não corresponde a um algarismo.`);
    });
    
    test('Caso seja um booleano (false)', () => {
        let x = false
        expect(toString(x)).toBe(`false não corresponde a um algarismo.`);
    });
});