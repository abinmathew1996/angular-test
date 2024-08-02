import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TableLazyLoadEvent } from 'primeng/table';
import { LocalStorageKey } from 'src/app/core/config/constants';
import { StorageService } from '../core/services/storageServices/storage.service';
import { TosterService } from 'src/app/core/services/tosterService/toster.service';
import { UsersService } from '../core/services/userServices/users.service';
import { SubSink } from 'subsink';


@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  informationForm: any;
  passwordToMatch: string | undefined;
  passErrorMessage = false;
  showErrorMessage = false;
  visible = false;
  private subs = new SubSink();
  fb = inject(FormBuilder)
 
  constructor(
    private storageService: StorageService,
    private formBuilder: FormBuilder,
    private toaster: TosterService,
    private userServce: UsersService
  ) {}

  ngOnInit(): void {
    this.createUserForm();
  }

  createUserForm() {
    this.informationForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      passport: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],

    });
  }

  onSubmit(): void { 
    const password = this.informationForm.get('password')?.value;
    const confirmPassword = this.informationForm.get('confirmPassword')?.value;
         
    if (this.informationForm.valid) {
      const payload = {
        name: this.informationForm.value.name,
        phone: this.informationForm.value.phone,
        email: this.informationForm.value.email,
        address: this.informationForm.value.address,
        passport: this.informationForm.value.passport,
        username: this.informationForm.value.username,
        password: this.informationForm.value.password,
      };
      
      if (password === confirmPassword && this.informationForm.valid) {
        this.subs.add(
          this.userServce.addUser(payload).subscribe((res: any) => {
            if (res.status === 200) {
              this.toaster.showSuccess('Added Successfully');
            }
          })
        );
      }
    } else {
      this.toaster.showError('Please fill out the form');
      if (password !== confirmPassword) {
        console.log('mismatch');
      }
      if (!this.informationForm.valid) {
        this.showErrorMessage = true;
      }
    }    }
  }

