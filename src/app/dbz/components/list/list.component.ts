import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, EventEmitter , Component, Input, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [];


  onDeletedCharacter( id? : string ): void {
    if ( !id ) {
      return;
    }
    this.onDeleteCharacter.emit(id);
  }
 }
