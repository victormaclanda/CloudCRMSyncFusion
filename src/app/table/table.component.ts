import { Component, OnInit, ViewChild } from '@angular/core';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { SelectionService } from '@syncfusion/ej2-angular-grids';

const SERVICE_URI: string = 'https://ej2services.syncfusion.com/production/web-services/';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [SelectionService]
})
export class TableComponent implements OnInit {
  public data: DataManager;
  public pageSettings: Object;
  public selectOptions: Object;
  public editSettings: Object;
  public toolbar: string[];

  ngOnInit(): void {
    this.data = new DataManager({ url: SERVICE_URI + 'api/Orders', adaptor: new WebApiAdaptor() });
    this.pageSettings = { pageCount: 3 };
    this.selectOptions = { persistSelection: true };
    this.editSettings = { allowDeleting: true };
    this.toolbar = ['Delete'];
  }
}
