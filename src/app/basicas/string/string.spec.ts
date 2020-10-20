import { mensaje } from './string';
describe('Pruebas de strings', () => {

    it('Debe de regresar un string', () => {
        const respuesta = mensaje('Carlos');
        expect(typeof respuesta).toBe('string');
    });
    it('Debe de retornar un saludo con el nombre enviado', () => {
        const nombre = 'Juan';
        const respuesta = mensaje(nombre);
        // expect(respuesta).toBe(`Saludos ${nombre}`);
        expect(respuesta).toContain(nombre);
    });
});
