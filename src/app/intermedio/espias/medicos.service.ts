import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MedicosService {

  constructor(public http: HttpClient) { }

  getMedicos() {
    return this.http.get('...')
      .pipe(map(resp => resp['medicos']));
  }

  agregarMedico(medico: any) {
    return this.http.post('...', medico)
      .pipe(map(resp => resp['medico']));
  }

  borrarMedico(id: string) {
    return this.http.delete('...')
      .pipe(map(resp => resp['medico']));
  }

  getDataCustomer(documentType: string, documentNumber: number) {
    const body: any = {
      documentType,
      documentNumber,
    };
    console.log(body);
    return this.http.get('./assets/json/customer-data.mock.json').pipe();
  }

  login(username: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(
        'https://blacksonic.eu.auth0.com.auth0.com/usernamepassword/login',
        { username, password, client_id: 'YOUR_CLIENT_ID' },
        { headers }
      );
  }

}
