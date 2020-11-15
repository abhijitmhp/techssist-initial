import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoinAsExpertComponent } from './join-as-expert/join-as-expert.component';
import { HomeComponent } from './home/home.component';
import { ExpertTechGridComponent } from './expert-tech-grid/expert-tech-grid.component';
import { ExpertTechDetailComponent } from './expert-tech-detail/expert-tech-detail.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path:  'home', component:  HomeComponent},
  { path:  'join', component:  JoinAsExpertComponent},
  { path:  'choose-tech', component:  ExpertTechGridComponent},
  { path:  'detail-tech', component:  ExpertTechDetailComponent},
  { path:  '**', component:  ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
