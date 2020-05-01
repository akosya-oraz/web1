import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailedComponent } from './film-detailed.component';

describe('FilmDetailedComponent', () => {
  let component: FilmDetailedComponent;
  let fixture: ComponentFixture<FilmDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
