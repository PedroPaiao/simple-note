import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  value = ""
  showFiller = true;
  openDrawer = false;

  optionsDrawer = [
    {view: 'Todas as tarefas', link: '' },
    {view: 'Tarefas de hoje', link: 'today' },
    {view: 'Completas', link: 'done' },
    {view: 'Atrasadas', link: 'late' },
    {view: 'Sem data marcada', link: 'unscheduled'},
    {view: 'Importantes', link: 'important' },
    {view: 'Calendario', link: 'calendar' },
  ]

  constructor(
    public dialog: MatDialog,
    private _route: Router 
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(NewTaskModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  changeDrawer() {
    this.openDrawer = !this.openDrawer;
  }

  reditectToPage(option: string) {
    console.log(option)
    let currentUrl = this._route.url;
    this._route.routeReuseStrategy.shouldReuseRoute = () => false;
    this._route.onSameUrlNavigation = 'reload';
    // this._route.navigate([currentUrl]);
    this._route.navigate(['/'], {
      queryParams: {
        list: option
      }
    })
  }
}