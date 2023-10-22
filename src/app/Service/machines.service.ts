import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { MachinesInterface } from '../interfaces/machines-interface';


@Injectable({
  providedIn: 'root'
})
export class MachinesService {

  private API_URL: string = environment.endpoint + "/machines";

  constructor(
    private http: HttpClient
  ) { }

  getMachinesList(): Observable<MachinesInterface> {
    return this.http.get<MachinesInterface>(`${this.API_URL}`);
  };

  getByIdMachines(): Observable<MachinesInterface> {
    return this.http.get<MachinesInterface>(`${this.API_URL}`);
  }
  
  getByIdMachine(id: number): Observable<MachinesInterface> {
    return this.http.get<MachinesInterface>(`${this.API_URL}/${id}`);
  }
   
  createMachine(request: MachinesInterface): Observable<MachinesInterface> {
    return this.http.post<MachinesInterface>(`${this.API_URL}`,request); 
  }
  //add modifie
  updateMachine(request: MachinesInterface, id: number) : Observable<MachinesInterface> {
    return this.http.put<MachinesInterface>(`${this.API_URL}/${id}`,request);
  }

  deleteMachine(id: number): Observable<MachinesInterface> {
    return this.http.delete<MachinesInterface>(`${this.API_URL}/${id}`);
  }
}
