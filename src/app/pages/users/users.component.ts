import {Component, computed, inject} from '@angular/core';
import {UsersService} from "@services/users.service";
import {TitleComponent} from "@shared/title/title.component";
import {RouterLink, RouterModule} from "@angular/router";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    TitleComponent,
    RouterModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  public userService = inject(UsersService)

  constructor() {

  }
}
