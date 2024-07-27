import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { Demo1RoutingModule } from './demo1-routing.module';
import { Demo1Component } from './demo1.component';


@NgModule({
  declarations: [
    Demo1Component
  ],
  imports: [
    CommonModule,
    Demo1RoutingModule,
    ReactiveFormsModule
  ]
})
export class Demo1Module { 
  name = new FormControl(''); 
}
