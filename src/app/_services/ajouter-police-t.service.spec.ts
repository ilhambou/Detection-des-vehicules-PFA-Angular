import { TestBed } from '@angular/core/testing';

import { AjouterPoliceTService } from './ajouter-police-t.service';

describe('AjouterPoliceTService', () => {
  let service: AjouterPoliceTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterPoliceTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
