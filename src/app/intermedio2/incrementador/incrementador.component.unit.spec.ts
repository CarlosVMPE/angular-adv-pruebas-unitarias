import { IncrementadorComponent } from './incrementador.component';

describe('Incrementador Component Unit', () => {
    let component: IncrementadorComponent;

    beforeEach(() => component = new IncrementadorComponent());

    it('Inicar el progreso en 50 e incrementarlo en 5', () => {
        component.progreso = 50;
        component.cambiarValor(5);
        expect(component.progreso).toBe(55);
    });
    it('No debe de pasar de 100 el progreso', () => {
        component.progreso = 100;
        component.cambiarValor(50);
        expect(component.progreso).toBe(100);
    });
    it('El progreso no debe tener un valor menor a 0, en este caso se le debe asignar el valor 0', () => {
        component.progreso = 0;
        component.cambiarValor(-5);
        expect(component.progreso).toBe(0);
    });
});
