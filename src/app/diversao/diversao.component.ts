import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';


@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(public ofertasService: OfertasService) {

  }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('diversao')
      .then((ofer: Oferta[])=>{
        this.ofertas = ofer
      })

  }

}
