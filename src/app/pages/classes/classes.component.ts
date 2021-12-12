import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClassesService } from './classes.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface ClassData {
  id: string;
  name: any;
  description: string;
}

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit, AfterViewInit {
  displayedColumns = ['id', 'name', 'description'];
  dataSource = new MatTableDataSource<ClassData>();
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  newdata: any[];
  head: any;
  id: string;
  name: string;
  description: string;


  constructor(
    private classesService: ClassesService,
    private db: AngularFirestore,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.db
      .collection('classes')
      .valueChanges()
      .subscribe((result) => {
        console.log(result);
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  doFilter(filteredValue: string) {
    this.dataSource.filter = filteredValue.trim().toLowerCase();
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '300px',
      data: {id: this.id, name: this.name, description: this.description},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log( result);
    });
  }



  // exportAsXLSX() {
  //   this.excelService.exportAsExcelFile(this.dataSource.data, 'training_data');
  // }

  // createPdf() {
  //   var doc = new jsPDF();

  //   doc.setFontSize(18);
  //   doc.text('My Past Exercises', 11, 8);
  //   doc.setFontSize(20);
  //   doc.setTextColor('black');
  //   let len = (this.dataSource.data).length;
  //   for (let i =0 ; i<len ; i++){
  //     this.newdata.push ([
  //       this.dataSource.data[i]['date'],
  //       this.dataSource.data[i]['name'],
  //       this.dataSource.data[i]['duration'],
  //       this.dataSource.data[i]['calories'],
  //       this.dataSource.data[i]['state']
  //   ]);
  //   }

  //   (doc as any).autoTable({
  //     head: this.head,
  //     body: this.newdata,
  //   //  theme:"plain"

  //   })
  //   doc.output('dataurlnewwindow');  // to Open PDF document in new tab
  //   doc.save('my_exercises.pdf'); //Download PDF document
  //   this.newdata=[];
  // }
}


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class PopupComponent {
selected: any;
click: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClassData,
  ) {}

  onButtonClick(event: MouseEvent){
    (event.target as HTMLButtonElement).disabled = true;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
