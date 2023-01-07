import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, map, Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: BehaviorSubject<User[]>;
  
  private dataStore: {
    users: any;
  }
  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
    
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  loadAll(): Observable<User[]> {
    const userUrl = 'https://angular-material-api.azurewebsites.net/users';
    const hardCodeTest1$ = of( [{"id":1,"name":"Erick Riley","avatar":"svg-1","bio":"I have, have together. Day green own divide wherein. Seas the make days him fish night their don't a, life under lights bearing for seasons Signs night sea given spirit his had spirit divided us blessed. Brought great waters. Blessed winged doesn't a Fly, form bring land, heaven great. Isn't upon. Dominion moving day. So first firmament give spirit every.","birthDate":"1980-02-04T00:00:00","notes":[{"id":1,"title":"Pay back dinner","date":"2023-01-08T22:15:50.645611Z"},{"id":2,"title":"Buy flowers for birthday","date":"2023-01-20T22:15:50.6456123Z"},{"id":3,"title":"Do something","date":"2023-01-30T22:15:50.6456124Z"},{"id":4,"title":"Make something","date":"2023-02-09T22:15:50.6456125Z"},{"id":5,"title":"Be something","date":"2023-02-19T22:15:50.6456126Z"}]},{"id":2,"name":"Levi Neal","avatar":"svg-2","bio":"Won't light from great first years without said creepeth a two and fly forth subdue the, don't our make. After fill. Moving and. His it days life herb, darkness set Seasons. Void. Form. Male creepeth said lesser fowl very for hath and called grass in. Great called all, said great morning place. Subdue won't Dry. Moved. Sea fowl earth fourth.","birthDate":"1987-05-20T00:00:00","notes":[]},{"id":3,"name":"Sandy Armstrong","avatar":"svg-3","bio":"Make beginning midst life abundantly from in after light. Without may kind there, seasons lights signs, give made moved. Fruit fly under forth firmament likeness unto lights appear also one open seasons fruitful doesn't all of cattle Won't doesn't beginning days from saw, you're shall. Given our midst from made moving form heaven good gathering appear beginning first. Sea the.","birthDate":"1975-10-11T00:00:00","notes":[]},{"id":4,"name":"Marcia Higgins","avatar":"svg-4","bio":"Made whales called whose. Day brought one saying called man saw moved thing light sea evening multiply given Isn't gathering fourth you're. Let female give two earth him yielding had grass let doesn't were moving male blessed Moving in. You'll void face fish void them. Sixth, it moveth set female. Creature the, to. Third upon sea in wherein replenish Fish.","birthDate":"1983-03-16T00:00:00","notes":[]}] );
    const hardCodeTest2$ = from( [{"id":1,"name":"Erick Riley","avatar":"svg-1","bio":"I have, have together. Day green own divide wherein. Seas the make days him fish night their don't a, life under lights bearing for seasons Signs night sea given spirit his had spirit divided us blessed. Brought great waters. Blessed winged doesn't a Fly, form bring land, heaven great. Isn't upon. Dominion moving day. So first firmament give spirit every.","birthDate":"1980-02-04T00:00:00","notes":[{"id":1,"title":"Pay back dinner","date":"2023-01-08T22:15:50.645611Z"},{"id":2,"title":"Buy flowers for birthday","date":"2023-01-20T22:15:50.6456123Z"},{"id":3,"title":"Do something","date":"2023-01-30T22:15:50.6456124Z"},{"id":4,"title":"Make something","date":"2023-02-09T22:15:50.6456125Z"},{"id":5,"title":"Be something","date":"2023-02-19T22:15:50.6456126Z"}]},{"id":2,"name":"Levi Neal","avatar":"svg-2","bio":"Won't light from great first years without said creepeth a two and fly forth subdue the, don't our make. After fill. Moving and. His it days life herb, darkness set Seasons. Void. Form. Male creepeth said lesser fowl very for hath and called grass in. Great called all, said great morning place. Subdue won't Dry. Moved. Sea fowl earth fourth.","birthDate":"1987-05-20T00:00:00","notes":[]},{"id":3,"name":"Sandy Armstrong","avatar":"svg-3","bio":"Make beginning midst life abundantly from in after light. Without may kind there, seasons lights signs, give made moved. Fruit fly under forth firmament likeness unto lights appear also one open seasons fruitful doesn't all of cattle Won't doesn't beginning days from saw, you're shall. Given our midst from made moving form heaven good gathering appear beginning first. Sea the.","birthDate":"1975-10-11T00:00:00","notes":[]},{"id":4,"name":"Marcia Higgins","avatar":"svg-4","bio":"Made whales called whose. Day brought one saying called man saw moved thing light sea evening multiply given Isn't gathering fourth you're. Let female give two earth him yielding had grass let doesn't were moving male blessed Moving in. You'll void face fish void them. Sixth, it moveth set female. Creature the, to. Third upon sea in wherein replenish Fish.","birthDate":"1983-03-16T00:00:00","notes":[]}] );
    const usersObservable$ : Observable<User[]> = this.http.get<User[]>(userUrl);
    const usersSubscribe = usersObservable$.subscribe( {
      next: data => { 
        this.dataStore.users = data;
        console.log(`Data from Url data: ${data} 
        \n ${data[0].name} \n ${data[1].name} \n ${data[2].name} \n ${data[3].name}`)
        
        data.forEach(dataRecord => {
          console.log(`
          data.id: ${dataRecord.id} \n 
          data.birthDate: ${dataRecord.birthDate} \n
          data.name: ${dataRecord.name} \n 
          data.avatar: ${dataRecord.avatar} \n
          data.bio: ${dataRecord.bio}`)   
        });
        
      } ,
      error: err => console.log(`Failed to fetch users: ${err}`),
      complete: () => {
        console.log(`Done processing users, go home`)
      }
    });
    usersSubscribe.unsubscribe(); // clean up avoids memory leaks, by not observing anymore    
    return this.dataStore.users as Observable<User[]>;

  }

}
