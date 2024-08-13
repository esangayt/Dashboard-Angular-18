import {computed, inject, Injectable, signal} from '@angular/core';
import {User, UserResponse} from "../interfaces/req-response";
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs";

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient)

  #state = signal<State>({
    users: [],
    loading: true
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);
  constructor() {
    console.log('Caragando user service created')
    this.http.get<UserResponse>('https://reqres.in/api/users')
      .pipe(delay(2000))
      .subscribe(response => {
          this.#state.set({
            users: response.data,
            loading: false
          });
        }
      );
  }
}
