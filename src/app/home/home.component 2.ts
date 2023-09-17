import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailService } from '../services/email.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  username: string = '';
  phone: string = '';
  company: string = '';
  email: string = '';
  zip: string = '';
  help: string = '';
  @ViewChild('homeForm') form;

  profileForm: FormGroup;
  submitted = false;

  constructor(
    private builder: FormBuilder,
    private _emailservice: EmailService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    this.profileForm = new FormGroup([]);
  }

  ngOnInit(): void {}

  public get f() {
    return this.profileForm.controls;
  }

  onSubmit() {
    this.spinner.show();
    let emailParams: any = {};

    // from: req.body.from, //"contact@rockyroadsolutions.com",
    // to: req.body.to,
    // subject: req.body.subject,
    // text: req.body.message,

    emailParams.from = this.email;
    emailParams.to = 'info@surefiresecurity.com';
    emailParams.cc = 'irfan.gill@gmail.com';
    emailParams.subject = this.help + ' quote required';
    emailParams.message =
      'Hi Support, The user/client with email : ' +
      this.email +
      ' has contacted Sure-Fire for quote regarding ' +
      this.help +
      '. We can reach him/them on Ph: ' +
      this.phone +
      ' Kind Regards ';

    this._emailservice.email(emailParams).subscribe((res: any) => {
      if (res.status == 'Error') this.toastr.error('Email not sent', 'Error');
      else this.toastr.success('Email Sent Sucessful', 'Success');
      this.spinner.hide();
      this.form.nativeElement.reset();
    });
  }
}
