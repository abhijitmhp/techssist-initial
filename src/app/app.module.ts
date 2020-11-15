import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFirePerformanceModule} from '@angular/fire/performance';
import { environment } from '../environments/environment';
import { JoinAsExpertComponent } from './join-as-expert/join-as-expert.component';
import { HomeComponent } from './home/home.component';
import { ExpertTechGridComponent } from './expert-tech-grid/expert-tech-grid.component';
import { ExpertTechDetailComponent } from './expert-tech-detail/expert-tech-detail.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    JoinAsExpertComponent,
    HomeComponent,
    ExpertTechGridComponent,
    ExpertTechDetailComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirePerformanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
