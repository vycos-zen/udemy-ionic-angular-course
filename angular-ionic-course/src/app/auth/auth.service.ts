import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userIsAuthenticated = false;

  get isAuthenticated(){
    return this.userIsAuthenticated;
  }
  constructor(private router: Router) {
  }

  login(){
    this.userIsAuthenticated = true;
  }

  logout(){
    this.userIsAuthenticated = false;
    this.router.navigateByUrl('/auth').then();
  }
}
