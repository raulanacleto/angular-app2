import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta

  constructor(
    private route: ActivatedRoute,
    public ofertasService: OfertasService) {
  }

  ngOnInit() {
    console.log('ID recuperado da rota via snapshot:', this.route.snapshot.params['id'])

    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((ofer: Oferta)=>{
          console.log('oferta recebida:' , ofer)
          this.oferta = ofer
      })

    // this.route.params.subscribe((parametro: any) => {
    //   console.log('ID recuperado da rota via subscribe', parametro.id)
    // })
  }

}
