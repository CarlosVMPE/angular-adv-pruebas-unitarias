import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { from } from 'rxjs';
import { MedicoService } from './medico.service';

describe('Medico Component', () => {
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;
    let servicio: MedicoService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
            providers: [MedicoService],
            imports: [HttpClientModule]
        });

        fixture = TestBed.createComponent(MedicoComponent);
        component = fixture.componentInstance;
        servicio = component.medicoService;
    });

    it('Debe de crearse el componente', () => {
        expect(component).toBeTruthy();
    });
    it('Debe de retornar el nombre del médico', () => {
        const nombre = 'Carlos';
        const res = component.saludarMedico(nombre);
        expect(res).toContain(nombre);
    });
    it('Debe de cargar los médicos', () => {
        const medicos = ['medico1', 'medico2', 'medico3'];
        spyOn(servicio, 'getMedicos').and.callFake(() => {
            return from([medicos]);
        });
        component.obtenerMedicos();
        expect(component.medicos.length).toBeGreaterThan(0);
    });
});
