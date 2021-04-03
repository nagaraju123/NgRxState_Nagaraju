import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PartnerService } from 'src/app/services/partner.service';
import { PartnerInfo } from 'src/app/State/reducer';

@Component({
  selector: 'app-addpartner',
  templateUrl: './addpartner.component.html',
  styleUrls: ['./addpartner.component.css']
})
export class AddpartnerComponent implements OnInit {

  AddPartnerForm: FormGroup;
  index: number = 1;
  constructor(private service: PartnerService) { }
  partners$ = this.service.allPartners$;

  ngOnInit(): void {

    this.AddPartnerForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      budget: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(null, [Validators.required]),
      id: new FormControl(null)
    });
  }
  resetForm() {
    this.AddPartnerForm.reset();
  }

  insertPartnerInfo() {
    console.log(this.index);
    if (this.AddPartnerForm.valid) {
      let partnerValue: PartnerInfo = this.AddPartnerForm.value;
      if (!partnerValue.id) {
        partnerValue.id = this.index;
        this.index++;

        this.service.createPartner(partnerValue);
      } else {
        this.service.updatePartner(partnerValue);

      }
      this.AddPartnerForm.reset();

      console.log(partnerValue);
    } else {
      this.validateAllFormFields(this.AddPartnerForm);
    }
    console.log(this.index);

  }

  deletePartner(id) {
    this.service.deletePartner(id);
  }

  updatePartner(partner) {
    this.AddPartnerForm.setValue(partner);
  }


  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }


}
