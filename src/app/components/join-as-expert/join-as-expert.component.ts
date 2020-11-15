import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppConfig } from 'src/app/config/app.config';
import { SharedService } from 'src/app/services/shared.service';
import { environment } from 'src/environments/environment';
import { Contact } from './contact.model';
@Component({
  selector: 'app-join-as-expert',
  templateUrl: './join-as-expert.component.html',
  styleUrls: ['./join-as-expert.component.css'],
})
export class JoinAsExpertComponent implements OnInit {
  siteKey: string = environment.googleReCaptcha.siteKey;
  formData: Contact;

  submitted: boolean = false;

  constructor(private shared: SharedService,private toaster:ToastrService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getData();
  }

  getData(){
    this.shared.testData().subscribe(res=>{
      console.log('test data-->',res)
    },err=>{
      console.error('error fetching data',err);
    });
  }

  initializeForm() {
    this.submitted = false;
    this.formData = {
      name: null,
      email: null,
      phone: null,
      github: null,
      country: null,
      age: null,
      captcha: null,
    };
  }

  submit(form) {
    this.submitted = true;
    console.log('---form--', form);
    console.log('--form values--', form.value);
    if (form.dirty) {
      if (form.valid) {
        this.registerExpert();
      } else {
        alert(AppConfig.messages.invalid);
      }
    } else {
      alert(AppConfig.messages.notDirty);
    }
  }

  registerExpert() {
    this.shared
      .registerExperts(this.formData)
      .then((res) => {
        console.log('success-=>', res);
        this.toaster.success(AppConfig.messages.success);
        this.initializeForm();
      })
      .catch((err) => {
        console.error('error', err);
        this.toaster.error(AppConfig.messages.error);
      });
  }

  resolved(captchaResponse: string) {
    this.formData.captcha = captchaResponse;
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
