import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewTaskModalComponent } from '../new-task-modal/new-task-modal.component';

@Component({
  selector: 'app-allowed',
  templateUrl: './allowed.component.html',
  styleUrls: ['./allowed.component.scss']
})
export class AllowedComponent implements OnInit {
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

  ngOnInit(): void {
    console.log(this._route.url)
    if(this._route.url == '/') {
      this.logged = false
    } else {
      this.logged = true
    }
  }

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
    this._route.routeReuseStrategy.shouldReuseRoute = () => false;
    this._route.onSameUrlNavigation = 'reload';
    this._route.navigate(['/allowed/list'], {
      queryParams: {
        list: option
      }
    })
    console.log(this._route.url)
  }
}
