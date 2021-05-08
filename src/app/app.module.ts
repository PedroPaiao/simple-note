import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
// Native components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Own components
import { NewTaskModalComponent } from './components/new-task-modal/new-task-modal.component';
import { TaskListComponent } from './components/task-list/task-list.component';
// Material.io
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { CustomNavComponent } from './components/custom-nav/custom-nav.component';
import { AllowedComponent } from './components/allowed/allowed.component';
import { NotAllowedComponent } from './components/not-allowed/not-allowed.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskModalComponent,
    TaskListComponent,
    LoginModalComponent,
    RegisterModalComponent,
    CustomNavComponent,
    AllowedComponent,
    NotAllowedComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
