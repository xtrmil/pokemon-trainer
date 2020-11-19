import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemon:any;
  @Output() clickSurvey: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onPokemonItemClicked(){
    console.log('clicked')
  }
}
