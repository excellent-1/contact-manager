import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: BehaviorSubject<User[]>;
  
  private dataStore: {
    users: any; // User[]
  }
  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }
  /*  For example someone could name functions poorly and confuse the next reader: 
    >> source$.subscribe(doSomething, doSomethingElse, lol) With that signature, you have to know unapparent details 
    about subscribe, where using a partial observer solves that neatly: 
    >> source$.subscribe({ next: doSomething, error: doSomethingElse, complete: lol }). */
  loadAll(): Observable<User[]> {  //loadAll() {
    const userUrl = 'https://angular-material-api.azurewebsites.net/users';
  
    return this.http.get<User[]>(userUrl)
          .pipe(map(
              response => this.dataStore.users = response as User[]
              ));
    
    /*return this.http.get<User[]>(usersUrl)
    .subscribe(data => {
      this.dataStore.users = data;
      this._users.next(Object.assign({}, this.dataStore).users);
    }, error: => { 
      console.log("Failed to fetch users");
    });
    */
    /*return this.http.get<User[]>(usersUrl)
      .subscribe({
        next: D =>  this.dataStore.users = D , 
        error:  console.log("Failed to fetch users") , 
      });*/
  }

}
