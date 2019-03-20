import { Component, OnInit, Input } from '@angular/core';
import { TableHeader, Character } from './table.model';

@Component({
  selector: 'lib-talent-table',
  templateUrl: './talent-table.component.html',
  styles: []
})
export class TalentTableComponent implements OnInit {

  @Input() headerData: TableHeader[];
  @Input() tableData: [];

  tableBodyDataRow = [];
  tableBodyData = [];
  constructor() { }

  ngOnInit() {
    console.log('data', this.headerData);
    console.log('content', this.tableData);
    for (let i = 0; i < this.tableData.length; i++) {
      this.tableBodyDataRow = [];
      for (let j = 0; j < this.headerData.length; j++) {
        this.tableBodyDataRow.push(this.tableData[i][this.headerData[j].colKey]);
      }
      this.tableBodyData.push(this.tableBodyDataRow);
    }
    console.log(this.tableBodyData);

  }

}
