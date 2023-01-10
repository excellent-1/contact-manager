import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { Note } from '../../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input() notes?: Note[];

  displayedColumns: string[] = ['position', 'title', 'date'];
  dataSource? :any; // = new MatTableDataSource<Note>();
  //dataSource?: MatTableDataSource<Note> = new CdkTableDataSourceInput<Note>();
  
  constructor() {}

  ngOnInit() {
    console.log('In Notes.Component notes: ' + this.notes);
    this.dataSource = new MatTableDataSource<Note>(this.notes);
  }
}
