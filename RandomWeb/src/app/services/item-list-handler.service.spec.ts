import { TestBed } from '@angular/core/testing';

import { ItemListHandlerService } from './item-list-handler.service';

describe('ItemListHandlerService', () => {
  let service: ItemListHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemListHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
