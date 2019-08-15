import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    // this.ofertas = this.ofertasService.getOfertas()
    // console.log(this.ofertas)

    this.ofertasService.getOfertas2()
      .then((ofer: Oferta[]) => { //o then retorna quando a promise for resolvida ( ofer: oferta[]) é a variavel e o tipo de dado que sera recebido
        this.ofertas = ofer //setando o retorno da promise resolvida no this.ofertas
      })

  }

}
