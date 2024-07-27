import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class TosterService {
  constructor(private messageService: MessageService,private toastr: ToastrService) {}

  showSuccess(message:any) {
    this.toastr.success(message, 'Success');
  }
  showError(message: string): void {
    this.toastr.error(message, 'Error');
  }
}
