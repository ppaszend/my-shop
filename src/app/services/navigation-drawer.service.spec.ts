import { TestBed } from '@angular/core/testing';

import { NavigationDrawerService } from './navigation-drawer.service';

describe('NavigationDrawerService', () => {
  let service: NavigationDrawerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationDrawerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
