import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../core/services/userServices/users.service';
import { TosterService } from 'src/app/core/services/tosterService/toster.service';
import { SubSink } from 'subsink';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-get-all-users-limit',
  standalone: true,
  imports: [CommonModule, PaginatorModule, TableModule],
  templateUrl: './get-all-users-limit.component.html',
  styleUrls: ['./get-all-users-limit.component.css']
})
export class GetAllUsersLimitComponent implements OnInit, OnDestroy {
  files: any[] = [];
  totalUsers: number = 0;
  limit: number = 10;
  offset: number = 0;
  private subs = new SubSink();

  constructor(
    private userService: UsersService,
    private toaster: TosterService
  ) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.subs.add(
      this.userService.getAllUsersWithLimit(this.offset).subscribe(
        (res: any) => {
          this.files = res.data;
          this.totalUsers = res.count;
        },
        (error: any) => {
          this.toaster.showError('Failed to load users');
          console.error('Error fetching users', error);
        }
      )
    );
  }

  onPageChange(event: any): void {
    this.offset = event.first;
    this.limit = event.rows;
    this.fetchUsers();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
