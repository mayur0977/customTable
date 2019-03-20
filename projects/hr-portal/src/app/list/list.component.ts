import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { AppService } from '../app.service';
import { TableHeader } from './table.model';

export class Character {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'one-talent-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit, AfterViewChecked {

  charcterData: Character[] = [];

  tableHeader: TableHeader[] = [];

  headerTitleArray = ['Id', 'Myname', 'Age'];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getData().subscribe((data: Character[]) => {
      this.charcterData = data;
      const keys = Object.keys(data[0]);
      for (let index = 0; index < keys.length; index++) {
        this.tableHeader.push({ 'colName': this.headerTitleArray[index], 'colKey': keys[index] });
        // this.tableHeader.push(this.singleObj);
      }

    });
  }

  ngAfterViewInit(): void {
    // console.log('caleddd');
  }

  ngAfterViewChecked(): void {
    // console.log('caleddd check');
  }

}
