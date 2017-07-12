import { TestBed, inject } from '@angular/core/testing';

import { PunyaServerService } from './punya-server.service';

describe('PunyaServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PunyaServerService]
    });
  });

  it('should be created', inject([PunyaServerService], (service: PunyaServerService) => {
    expect(service).toBeTruthy();
  }));
});
