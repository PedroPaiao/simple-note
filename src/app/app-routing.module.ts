import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllowedComponent } from './components/allowed/allowed.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { NotAllowedComponent } from './components/not-allowed/not-allowed.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [
  { path: "notAllowed", component: NotAllowedComponent, children: [
      { path: "", component: LoginModalComponent },
      { path: "register", component: RegisterModalComponent },
      { path: "entrar", component: LoginModalComponent },
    ] 
  },
  { path: "allowed", component: AllowedComponent, children: [
      { path: "list", component: TaskListComponent },
      { path: "", component: TaskListComponent },
    ]
  },
  { path: "", redirectTo: "/notAllowed", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
