import { TestBed } from '@angular/core/testing';

import { NgxLeafletSidebarLibraryService } from './ngx-leaflet-sidebar-library.service';

describe('NgxLeafletSidebarLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxLeafletSidebarLibraryService = TestBed.get(NgxLeafletSidebarLibraryService);
    expect(service).toBeTruthy();
  });
});
