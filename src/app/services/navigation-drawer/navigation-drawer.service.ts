import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavigationDrawerService {
  private visibility = new BehaviorSubject(false);

  getVisibility(): Observable<boolean> {
    return this.visibility.asObservable();
  }

  setVisibility(visibility: boolean): void {
    this.visibility.next(visibility)
  }
}
