import { Jugador } from './clase';
describe('Pruebas de clase', () => {
    let jugador = new Jugador();
    // beforeAll(); // Antes de todo
    // beforeEach(); // Antes de cada prueba
    // afterAll(); // Despues de todo
    // afterEach(); // Después de cada prueba
    beforeAll( () => {});
    beforeEach( () => {
        jugador = new Jugador();
    });
    afterAll( () => {});
    afterEach( () => {});


    it('Debe de retornar 80 de hp, si recibe 20 de daño', () => {
        const res = jugador.recibeDanio(20);
        expect(res).toBe(80);
    });
    it('Debe de retornar 50 de hp, si recibe 50 de daño', () => {
        const res = jugador.recibeDanio(50);
        expect(res).toBe(50);
    });
    it('Debe de retornar 0 de hp, si recibe 100 de daño o más', () => {
        const res = jugador.recibeDanio(100);
        expect(res).toBe(0);
    });
});
