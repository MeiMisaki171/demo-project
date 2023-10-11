import { Component } from '@angular/core';

@Component({
  selector: 'app-doanvao',
  templateUrl: './doanvao.component.html',
  styleUrls: ['./doanvao.component.css']
})
export class DoanvaoComponent {
  rows1: any[] = [];
  rows2: any[] = [];
  showEditable: boolean = false;
  editRowId: any;

  constructor() {
    this.rows1 = [{ id: 1, name: '' }];
    this.rows2 = [{id: 1, name: '' }];
  }

  addRow1() {
    let indexForId = this.rows1.length + 1
    this.rows1.push({
      id: indexForId,
      name: ''
    })
  }

  addRow2() {
    let indexForId = this.rows2.length + 1
    this.rows2.push({
      id: indexForId,
      name: ''
    })
  }
}
