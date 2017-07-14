import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  providers: [CharacterService]
})

export class AdminComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  ngOnInit() {

  }

  submitForm(name: string, comedian: string, description: string, appearances: number, image: string, video: string) {
    var newCharacter: Character = new Character(name, comedian, description, appearances, image, video);
    this.characterService.addCharacter(newCharacter);
  }

}
