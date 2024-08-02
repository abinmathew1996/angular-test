import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { UsersService } from '../core/services/userServices/users.service';
import { TosterService } from 'src/app/core/services/tosterService/toster.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: any[] = [];
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
      this.userService.getAllUsers().subscribe(
        (res: any) => {
          this.users = res.data;
        },
        (error: any) => {
          this.toaster.showError('Failed to load users');
          console.error('Error fetching users', error);
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
