import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { TreeDataComponent } from "./treeData/tree-data.component";
import 'ag-grid-enterprise';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AgGridModule.withComponents([]) ],
  declarations: [ AppComponent, TreeDataComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
