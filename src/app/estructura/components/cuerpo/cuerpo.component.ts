import { Component } from '@angular/core';
import { Heroe } from 'src/app/shared/models/heroe.model';
import { HeroesService } from 'src/app/shared/services/heroes.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {

  public heroeFavorito!: Heroe | undefined;

  public procesarEvento(heroeRecibido: Heroe) :void {
    console.log("El hijo le dice al padre: ", heroeRecibido);
    this.heroeFavorito = heroeRecibido;
  }

  public borrarFavorito() {
    this.heroeFavorito = undefined;
  }
}
