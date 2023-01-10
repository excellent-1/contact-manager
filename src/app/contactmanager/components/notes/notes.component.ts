import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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
    console.log('In Notes.Component notes: ' + this.notes);
    this.dataSource = new MatTableDataSource<Note>(this.notes);
  }

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
