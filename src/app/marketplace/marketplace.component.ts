import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { Router } from '@angular/router';
import { CharacterService } from '../character.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.sass'],
  providers: [CharacterService]
})

export class MarketplaceComponent implements OnInit {
  characters: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private characterService: CharacterService) {}

  ngOnInit(){
    this.characters = this.characterService.getCharacters();
  }

  goToDetailPage(clickedCharacter) {
     this.router.navigate(['characters', clickedCharacter.$key]);
   };
}
