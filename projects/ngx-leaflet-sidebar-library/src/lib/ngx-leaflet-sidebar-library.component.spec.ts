import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLeafletSidebarLibraryComponent } from './ngx-leaflet-sidebar-library.component';

describe('NgxLeafletSidebarLibraryComponent', () => {
  let component: NgxLeafletSidebarLibraryComponent;
  let fixture: ComponentFixture<NgxLeafletSidebarLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLeafletSidebarLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLeafletSidebarLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
