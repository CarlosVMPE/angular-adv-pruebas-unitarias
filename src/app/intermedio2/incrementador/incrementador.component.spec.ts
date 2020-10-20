import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IncrementadorComponent],
            imports: [FormsModule]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('Debe de mostrar la leyenda', () => {
        component.leyenda = 'Progreso de carga';
        fixture.detectChanges(); // Disparar la detección de cambios
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(elem.innerHTML).toContain('Progreso de carga');
    });
    it('Debe de mostrar en el input el valor del progreso', (done) => {
        component.cambiarValor(5);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const input = fixture.debugElement.query(By.css('input'));
            const elem = input.nativeElement;
            expect(elem.value).toBe('55');
            done();
        });
    });
    it('Debe de incrementar/decrementar en 5, con un click en el botón', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);
        botones[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);
    });
    it('En el titulo del componente, debe de mostrar el progreso', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click', null);
        fixture.detectChanges();
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(elem.innerHTML).toContain('45');
    });
    // OnChanges
    it('El valor enviado no debe exceder a 100, entonces asignar 100 al progreso', () => {
        const txtProgress = component.txtProgress;
        let nuevoValor = 0;
        component.cambioValor.subscribe(valor => nuevoValor = valor);
        component.onChanges(150);

        expect(component.progreso).toBe(100);
        expect(txtProgress.nativeElement.value).toBe('100');
        expect(nuevoValor).toBe(100);
    });
    it('El valor enviado no debe ser menor a 0, entonces asignar 0 al progreso', () => {
        const txtProgress = component.txtProgress;
        let nuevoValor = 0;
        component.cambioValor.subscribe(valor => nuevoValor = valor);
        component.onChanges(-150);

        expect(component.progreso).toBe(0);
        expect(txtProgress.nativeElement.value).toBe('0');
        expect(nuevoValor).toBe(0);
    });
    it('El valor enviado es mayor a 0 y menor a 100, asignar el nuevo valor al progreso', () => {
        const txtProgress = component.txtProgress;
        let nuevoValor = 0;
        component.cambioValor.subscribe(valor => nuevoValor = valor);
        component.onChanges(40);

        expect(component.progreso).toBe(40);
        expect(txtProgress.nativeElement.value).toBe('40');
        expect(nuevoValor).toBe(40);
    });
});
