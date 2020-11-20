import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCollectedItemComponent } from './pokemon-collected-item.component';

describe('PokemonCollectedItemComponent', () => {
  let component: PokemonCollectedItemComponent;
  let fixture: ComponentFixture<PokemonCollectedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCollectedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCollectedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
