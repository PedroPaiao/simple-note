import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, NavigationEnd  } from '@angular/router';
import { NewTaskModalComponent } from './components/new-task-modal/new-task-modal.component';
// import './mocks/login'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'simple-note-frontend';

  constructor(
    public dialog: MatDialog,
    private _route: Router 
  ) {}

  ngOnInit(): void {}
}