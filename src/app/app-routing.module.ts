import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddStudentComponent} from "./add-student/add-student.component";
import {ViewStudentComponent} from "./view-student/view-student.component";


const routes: Routes = [
  {path: 'add-student', component: AddStudentComponent},
  {path: 'view-student', component: ViewStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
