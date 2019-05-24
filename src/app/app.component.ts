import { Component } from '@angular/core';
import { Model } from './model';
import { GridOptions} from 'ag-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnDefs = [
  ];

  rowData = [];

  private defaultColDef;


  ngOnInit() {



    let model = new Model();
    let gridModel = model.grid;
    console.log(gridModel);
    let colChainArr = gridModel["columnChainArray"];
    let colCellArray = gridModel["columnCellArrays"];
    let rowArray = gridModel["rowArray"];

    var tempObj = {};


    for (let i = 0; i < colChainArr.length; i++) {
      console.log(i);
      let colName = colChainArr[i].columnName;
      //console.log(colName);
      this.columnDefs.push({
        headerName: colName, field: colName, editable: true , checkboxSelection: false
      });
    }
    this.defaultColDef = { resizable: true };

    for (let i = 0; i < rowArray.length; i++) {
      for (let n = 0; n < colCellArray.length; n++) {

        let colName = colChainArr[n].columnName;
        //console.log(colCellArray[n].cellValues[i]);
        let cellValue = colCellArray[n].cellValues[i];

        tempObj[colName] = cellValue;
      }
      this.rowData.push(tempObj);
      tempObj = {};
    }
    console.log(this.rowData);
  }

}












