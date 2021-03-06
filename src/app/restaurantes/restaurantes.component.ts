import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(public ofertasService: OfertasService) {

  }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante')
      .then((ofer: Oferta[]) => {
        console.log(ofer)
        this.ofertas = ofer
      })
  }

}
