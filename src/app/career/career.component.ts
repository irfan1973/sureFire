import { Component, ViewChild } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { ToastrService } from 'ngx-toastr';
import { EmailService } from '../services/email.service';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent {
  uploadedFiles: any;
  email: string = '';
  @ViewChild('careerForm') form;

  constructor(
    private _services: ServicesComponent,
    private toastr: ToastrService,
    private _emailservice: EmailService,
    private spinner: NgxSpinnerService
  ) {}

  onfileSelected(event: any) {
    this.uploadedFiles = event.target.files;
  }

  onSubmit() {
    this.spinner.show();
    if (this.uploadedFiles == undefined) {
      this.toastr.error('Please select file to upload.', 'Error');
    }
    let formData = new FormData();
    formData.append('email', this.email);
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append(
        'uploads[]',
        this.uploadedFiles[i],
        this.uploadedFiles[i].name
      );
    }

    this._services.uploadFile(formData).subscribe((res: any) => {
      if (res.status == 'Error')
        this.toastr.error('Resume Upload Error', 'Error');
      else this.toastr.success('Resume Upload Successful', 'Success');
      this.spinner.hide();
      this.form.nativeElement.reset();
    });
  }
}
