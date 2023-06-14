import {Component, EventEmitter, Output} from '@angular/core';

import {HeroesService} from "../../../shared/services/heroes.service";
import {Heroe} from "../../../shared/models/heroe.model";

@Component({
  selector: 'app-listado-tabla',
  templateUrl: './listado-tabla.component.html',
  styleUrls: ['./listado-tabla.component.css']
})
export class ListadoTablaComponent {
  public listadoHeroes: Heroe[];

  @Output() public eventoFavorito: EventEmitter<Heroe> = new EventEmitter<Heroe>();

  constructor(private heroesService: HeroesService) {
    console.log("ListadoTablaComponent ha sido cargado");
    
    this.listadoHeroes = [];
  }

  //Las llamadas a los servicios, no deberían de estar en el constructor.
  ngOnInit(): void {
    this.actualizar();
  }

  public actualizar(): void {
    this.listadoHeroes = this.heroesService.getHeroes();
  }

  public hayHeroes(): boolean {
    return this.listadoHeroes.length > 0;
  }

  public onSeleccionarHeroe(heroe: Heroe){
    console.log("Vamos a emitir un evento con la información de ", heroe);
    this.eventoFavorito.emit(heroe); // Así emitimos un evento con la información que queramos dentro
  }
}
