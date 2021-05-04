import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JumbletronDemonstrationComponent } from './components/jumbletron-demonstration/jumbletron-demonstration.component';

const routes: Routes = [
  { path: "", component: JumbletronDemonstrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
