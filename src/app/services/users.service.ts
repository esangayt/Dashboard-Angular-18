import {computed, inject, Injectable, signal} from '@angular/core';
import {User, UserResponse, UsersResponse} from "../interfaces/req-response";
import {HttpClient} from "@angular/common/http";
import {delay, map} from "rxjs";

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
    this.http.get<UsersResponse>('https://reqres.in/api/users')
      .pipe(delay(2000))
      .subscribe(response => {
          this.#state.set({
            users: response.data,
            loading: false
          });
        }
      );
  }

  getUserById(id: number) {
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(2000),
        map(response => response.data)
      );
  }
}
