import { Component } from '@angular/core';
import { Heroe } from 'src/app/shared/models/heroe.model';
import { HeroesService } from 'src/app/shared/services/heroes.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {

  public heroesService: HeroesService;
  public listadoHeroes: Heroe[] ;

  constructor(heroesService: HeroesService) {
    this.heroesService = heroesService;
    this.listadoHeroes = [];
  }

  //Las llamadas a los servicios, no deberían de estar en el constructor.
  ngOnInit():void {
    this.actualizar();
  }


  public actualizar():void {
    this.listadoHeroes = this.heroesService.getHeroes();
  }


  public hayHeroes(): boolean {
    return this.listadoHeroes.length > 0;
  }


}
