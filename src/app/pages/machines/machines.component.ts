import { Component } from '@angular/core';
import { MachinesInterface } from 'src/app/interfaces/machines-interface';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent {

  machine: MachinesInterface[] = [];
  machines: MachinesInterface = {
    id_Machines: 0,
    id_Usuario: 0,
    machines_Name: '',
    brand: '',
    serial_Number: '',
    status: false,
    acquisition_Date: '',
    maintenance_Date: '',
    next_Maintenance_Date: '',
    usuario: {},
    top_Aux: 0
  }

  constructor() { }
}
