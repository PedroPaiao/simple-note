import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskModalComponent } from './components/new-task-modal/new-task-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-note-frontend';
  logged = true;
  closeResult = "";

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(NewTaskModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}