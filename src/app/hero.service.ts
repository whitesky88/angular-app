import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';


@Injectable({
  providedIn: 'root'
})

export class HeroService {

  baseUrl = "http://localhost:3000/api";

  
  constructor(private messageService: MessageService,
              private http: HttpClient) {
    
  }
  
  /* get data from mock-up db */
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetch heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add('HeroService: fetch hero id=' + id);
    return of(HEROES.find(hero => hero.id === id ));
  }

  /* get data from the real server */
  getHeroes_http(): Observable<Hero[]> {
 
    this.messageService.add('HeroService: fetching heroes from server');
    return this.http.get<Hero[]>(this.baseUrl);
    
  }

}
