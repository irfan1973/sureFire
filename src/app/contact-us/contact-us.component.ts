import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { EmailService } from '../services/email.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  username: string = '';
  phone: string = '';
  company: string = '';
  email: string = '';
  zip: string = '';
  help: string = '';
  message: string = '';

  profileForm: FormGroup;
  submitted = false;

  constructor(
    private builder: FormBuilder,
    private _emailservice: EmailService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {
    this.profileForm = new FormGroup([]);
  }

  onSubmit(f: NgForm) {
    this.spinner.show();
    if (f.valid) {
      let emailParams: any = {};

      emailParams.from = this.email;
      emailParams.to = 'irfan.gill@gmail.com';
      emailParams.cc = 'info@surefiresecurity.com';
      emailParams.subject = 'Client Contacted for info@surefiresecurity.com';
      emailParams.message = this.message;

      this._emailservice.email(emailParams).subscribe((res) => {
        if (res.status == 'Error') this.toastr.error('Email not sent', 'Error');
        else this.toastr.success('Email Sent Sucessful', 'Success');
        this.spinner.hide();
        f.reset();
      });
    }
  }
}
