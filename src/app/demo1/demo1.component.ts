import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TableLazyLoadEvent } from 'primeng/table';
import { LocalStorageKey } from 'src/app/core/config/constants';
import { StorageService } from 'src/app/core/services/storageServices';
import { ToasterService } from 'src/app/core/services/tosterService';
import { UserService } from 'src/app/core/services/userService/user.service';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  informationForm: any;
  fb = inject(FormBuilder)
 
  ngOnInit(): void {
   this.createInformationForm();
  }

  createInformationForm() {
    this.informationForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      passport: ['', Validators.required]
    });
  }

  onSubmit(): void { 
    if (this.informationForm.valid) {
      console.log(this.informationForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
