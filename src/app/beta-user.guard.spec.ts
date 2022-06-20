import { TestBed } from '@angular/core/testing';

import { BetaUserGuard } from './beta-user.guard';

describe('BetaUserGuard', () => {
  let guard: BetaUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BetaUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
