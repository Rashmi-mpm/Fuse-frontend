import { Component, OnInit, ViewChild } from '@angular/core';

import { AddDemoComponent } from './add-demo/add-demo.component';
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Transaction {
  id:number;
  item: string;
  child:string;
  threeweeks:string;
  twoweeks:string;
  oneweek:number;
  current:number
  cost: number;
  over:number;
  pending:number;
  amount:number
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  displayedColumns = ['item', 'child', 'threeweeks', 'twoweeks', 'oneweek', 'current',  'cost' , 'over', 'pending', 'amount', 'action'];
  transactions: Transaction[] = [
    {id:1,item: 'Beach', child:'Berlin', threeweeks:'$450', twoweeks:'$582', oneweek:25.25, current:48, cost:425.25, over:25, pending:25, amount:586.25},
    {id:2,item: 'Towel', child:'Berlin', threeweeks:'$350', twoweeks:'$482', oneweek:20.25, current:38.50, cost:405.00, over:38, pending:15, amount:386.25},
    {id:3,item: 'Frisbee', child:'Berlin', threeweeks:'$450', twoweeks:'$82', oneweek:55.25, current:28, cost:65.25, over:58, pending:5, amount:656.25},
    {id:4,item: 'Sunscreen',child:'Berlin', threeweeks:'45', twoweeks:'$182', oneweek:5.25, current:90, cost:75.25, over:51, pending:29, amount:256.25},
    {id:5,item: 'Cooler', child:'Berlin', threeweeks:'$250', twoweeks:'$52', oneweek:15.25, current:27, cost:25.25, over:36, pending:57, amount:674.25},
    {id:6,item: 'Swim suit', child:'Berlin', threeweeks:'$550', twoweeks:'$25', oneweek:58.25, current:54, cost:825.25, over:88, pending:25, amount:485.25},
    {id:7,item: 'Beach', child:'Berlin', threeweeks:'$450', twoweeks:'$582', oneweek:25.25, current:48, cost:425.25, over:25, pending:25, amount:586.25},
    {id:8,item: 'Towel', child:'Berlin', threeweeks:'$350', twoweeks:'$482', oneweek:20.25, current:38.50, cost:405.00, over:38, pending:15, amount:386.25},
    {id:9,item: 'Frisbee', child:'Berlin', threeweeks:'$450', twoweeks:'$82', oneweek:55.25, current:28, cost:65.25, over:58, pending:5, amount:656.25},
    {id:10,item: 'Sunscreen',child:'Berlin', threeweeks:'45', twoweeks:'$182', oneweek:5.25, current:90, cost:75.25, over:51, pending:29, amount:256.25},
    {id:11,item: 'Cooler', child:'Berlin', threeweeks:'$250', twoweeks:'$52', oneweek:15.25, current:27, cost:25.25, over:36, pending:57, amount:674.25},
    {id:12,item: 'Swim suit', child:'Berlin', threeweeks:'$550', twoweeks:'$25', oneweek:58.25, current:54, cost:825.25, over:88, pending:25, amount:485.25}
  ];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource:any
  sortedData: Transaction[];
  datashow=0
  showTotalPages:any
  datalength:any
  pagecount:any=5
  constructor(
    public dialog: MatDialog,
  ) { 
    // this.sortedData = this.transactions.slice();
    
  }

  ngOnInit(): void {    
    this.dataSource = new MatTableDataSource(this.transactions);
    this.datalength=this.transactions.length
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    
  }
  pageChange(val){
    this.pagecount=val
    this.dataSource = new MatTableDataSource(this.transactions);
    this.dataSource = this.transactions.slice(this.datalength - val);
  }
  showDown(){
    this.datashow=1
  }
  showUp(){
    this.datashow=0
  }
  deleteItem(i){
    var delBtn = confirm("Do you want to delete?");
    if (delBtn == true) {
      this.transactions.splice(i, 1);
    }
  }
  getTotal() {
    return this.transactions.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }
  getTotalweek(){
    return this.transactions.map(t => t.oneweek).reduce((acc, value) => acc + value, 0);
  }
  getTotalcurrent(){
    return this.transactions.map(t => t.current).reduce((acc, value) => acc + value, 0);
  }
  getTotalcost(){
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  getTotalover(){
    return this.transactions.map(t => t.over).reduce((acc, value) => acc + value, 0);
  }
  getTotalpending(){
    return this.transactions.map(t => t.pending).reduce((acc, value) => acc + value, 0);
  }
  openDialog(){
    const dialogRef = this.dialog.open(AddDemoComponent, {
      data: {
       
      },
      width: "600px",
      height:"400px"
    });
  
    dialogRef.afterClosed().subscribe((result) => {});
  }
  }
