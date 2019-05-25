import { Component } from '@angular/core';
import { Model } from './model';
import { HttpClient } from "@angular/common/http";
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

  private gridApi;
  private gridColumnApi;

  private defaultColDef;
  private rowSelection;

  private paginationPageSize;
  private paginationNumberFormatter;

  constructor() {



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
      if(i==0){
        this.columnDefs.push({
          headerName: colName, field: colName, editable: true , checkboxSelection: false ,filter: "agNumberColumnFilter"
        });
      }else{
        this.columnDefs.push({
          headerName: colName, field: colName, editable: true , checkboxSelection: false ,filter: "agTextColumnFilter"
        });
      }
      
    }


    this.rowSelection = "multiple";
      this.defaultColDef = {
      editable: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true
    };
    this.paginationPageSize = 30;

    this.paginationNumberFormatter = function(params) {
      return "[" + params.value.toLocaleString() + "]";
    };

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

  

  onSelectionChanged() {
    var selectedRows = this.gridApi.getSelectedRows();
    var selectedRowsString = "";
    selectedRows.forEach(function(selectedRow, index) {
      if (index !== 0) {
        selectedRowsString += ", ";
      }
      selectedRowsString += selectedRow.athlete;
    });
    document.querySelector("#selectedRows").innerHTML = selectedRowsString;
  }


}


