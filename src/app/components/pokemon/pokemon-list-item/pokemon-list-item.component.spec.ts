import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListItemComponent } from './pokemon-list-item.component';

describe('PokemonListItemComponent', () => {
  let component: PokemonListItemComponent;
  let fixture: ComponentFixture<PokemonListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
