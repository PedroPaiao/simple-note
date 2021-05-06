import { Component, OnInit } from '@angular/core';
import {tasks as taskList } from '../../mocks/tasks'

import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {
  tasks: any;
  title: any;
  list: any = 'dsad';
  currentDate: string = moment().format('llll'); // por praticidade

  constructor(private _route:ActivatedRoute){}
  
  ngOnInit(): void {
    this._route.paramMap.subscribe(params => { 
      if(params)
        this.list = params.get('list');
   });
   switch(this.list) {
    case 'today':
      this.title = 'Tarefas de Hoje'
      this.tasks = taskList.filter((task: any) => {
        return(task.deadline == this.currentDate)
      });
      break;
    case 'done':
      this.title = 'Tarefas Completas';
      this.tasks = taskList.filter((task: any) => task.done);
      break;
    case 'late':
      this.title = 'Tarefas Atrasadas';
      this.tasks = taskList.filter((task:any) => {
        return (new Date(task.deadline) < new Date(this.currentDate))
      });
      break;
    case 'important':
      this.title = 'Tarefas Importantes';
      this.tasks = taskList.filter((task: any) => task.tag === 'important');
      break;
    default:
      this.title = 'Todas as Tarefas';
      this.tasks = taskList;
      
   }

  }

}
