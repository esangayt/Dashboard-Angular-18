import {Component, computed, inject} from '@angular/core';
import {UsersService} from "@services/users.service";
import {TitleComponent} from "@shared/title/title.component";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    TitleComponent, RouterModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  private route = inject(ActivatedRoute)
  public userService = inject(UsersService)

  public titleLabel = computed(() => {
      if (this.user()) {
        return `User ${this.user()!.first_name} ${this.user()!.last_name}`
      }
      return "Información del usuario"
    }
  )

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({id}) => this.userService.getUserById(id))
    )
  );

  constructor() {
  }
}
