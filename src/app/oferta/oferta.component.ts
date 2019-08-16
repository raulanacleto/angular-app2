import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, observable, Observer } from 'rxjs';
import { interval } from 'rxjs'

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
      .then((ofer: Oferta) => {
        console.log('oferta recebida:', ofer)
        this.oferta = ofer
      })

    // this.route.params.subscribe((parametro: any) => {
    //   console.log('ID recuperado da rota via subscribe', parametro.id)
    // })



    /*

    let tempo = interval(2000)
    tempo.subscribe((intervalo: number)=>{
      console.log('valor recuperado:',intervalo)
    })

    */

    //observable(observavel)
    let meuObservableTeste = Observable.create((observer: Observer<string>)=>{ //pode ser de tipo number tbm e pode calcular abaixo
      observer.next('Primeiro evento da stream') //essa string vai ser enviada pro observador abaixo
    })

    //observable(observador)
    meuObservableTeste.subscribe(
      (resultado: any) => {console.log(resultado)}
    )
  }

}
