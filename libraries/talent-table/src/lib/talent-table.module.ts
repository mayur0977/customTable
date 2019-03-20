import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalentTableComponent } from './talent-table.component';

@NgModule({
  declarations: [TalentTableComponent],
  imports: [
    CommonModule
  ],
  exports: [TalentTableComponent]
})
export class TalentTableModule { }
