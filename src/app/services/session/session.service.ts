import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  save(session: any) {
    localStorage.setItem('pt_session', JSON.stringify(session));
  }

  get(): any {
    const savedSession = localStorage.getItem('pt_session');
    return savedSession ? JSON.parse(savedSession) : false;
  }
}
