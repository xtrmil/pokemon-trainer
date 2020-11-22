import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonCatalogueComponent } from './pokemon-catalogue.component';

describe('PokemonListComponent', () => {
  let component: PokemonCatalogueComponent;
  let fixture: ComponentFixture<PokemonCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonCatalogueComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
