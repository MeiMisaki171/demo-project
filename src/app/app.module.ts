import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DoanvaoComponent } from './Hos1/Themmo1/doanvao/doanvao.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DoanvaoComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
