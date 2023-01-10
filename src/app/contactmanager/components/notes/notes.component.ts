import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { Note } from '../../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, AfterViewInit {

  @Input() notes?: Note[];

  displayedColumns: string[] = ['position', 'title', 'date'];
  dataSource? :any; // = new MatTableDataSource<Note>();
  //dataSource?: MatTableDataSource<Note> = new CdkTableDataSourceInput<Note>();
  
  constructor() {}

  ngOnInit() {
    //console.log('In Notes.Component notes: ' + this.notes?.at(0)?.title);
    this.dataSource = new MatTableDataSource<Note>(this.notes);
  }

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
