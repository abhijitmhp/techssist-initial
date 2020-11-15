import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { environment } from '../environments/environment';
import { JoinAsExpertComponent } from './components/join-as-expert/join-as-expert.component';
import { HomeComponent } from './components/home/home.component';
import { ExpertTechGridComponent } from './components/expert-tech-grid/expert-tech-grid.component';
import { ExpertTechDetailComponent } from './components/expert-tech-detail/expert-tech-detail.component';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  RecaptchaSettings,
  RecaptchaModule,
  RecaptchaFormsModule,
  RECAPTCHA_SETTINGS,
} from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgHttpLoaderModule } from 'ng-http-loader';
@NgModule({
  declarations: [
    AppComponent,
    JoinAsExpertComponent,
    HomeComponent,
    ExpertTechGridComponent,
    ExpertTechDetailComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirePerformanceModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgHttpLoaderModule.forRoot()
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.googleReCaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
