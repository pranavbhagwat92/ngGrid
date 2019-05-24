import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnDefs = [
  ];

  rowData = [];


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
        headerName: colName, field: colName, editable: true
      });
    }


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






    // for (let i = 0; i < model.grid["columnCellArrays"].length; i++) {

    //   let tempColCellArray = model.grid["columnCellArrays"];

    //   console.log(colChainArr[i].columnName);

    //   for (let n = 0; n < tempColCellArray.length; n++) {

    //     console.log(tempColCellArray[i].cellValues);
    //   }

    // }



    // for (let i=0; i < colChainArrLen; i++) {
    //   console.log(i);
    //   let colName = colChainArr[i].columnName;
    //   console.log(colName);
    //   this.columnDefs.push({
    //     headerName: colName, field: colName , editable : true
    //   });

    //   for(let i=0;i<rowArray.length;i++){
    //     console.log(i);
    //   }



    //   tempObj[colName] = model.grid["rowArray"][i];





    // }

    //   console.log(tempObj);
    //   this.rowData.push(tempObj);


    //columnCellArray[i].cellValues[n]

    // columnChainArray[i].columnName

    // {headerName: 'Make', field: 'make'},
    // {headerName: 'Model', field: 'model'},
    // {headerName: 'Price', field: 'price', editable: true}


    //.then(result => result.json())
    //.then(rowData => this.rowData = rowData);

  }

}









