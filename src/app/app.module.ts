import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { SidebarModule, MenuAllModule, TreeViewAllModule} from '@syncfusion/ej2-angular-navigations';
import { RadioButtonModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

@NgModule({ declarations: [ AppComponent, TableComponent ], imports: [ SidebarModule, BrowserModule, RadioButtonModule, MenuAllModule, DropDownListModule, ButtonModule, TreeViewAllModule, ListViewAllModule, ReactiveFormsModule, RouterModule, CommonModule, FormsModule, HttpModule, GridAllModule ], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
