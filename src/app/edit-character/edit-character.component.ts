import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.sass'],
  providers: [CharacterService]
})
export class EditCharacterComponent implements OnInit {
  @Input() selectedCharacter;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  beginUpdatingCharacter(characterToUpdate){
    this.characterService.updateCharacter(characterToUpdate);
  }

  beginDeletingCharacter(characterToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.characterService.deleteCharacter(characterToDelete);
    }
  }

}
