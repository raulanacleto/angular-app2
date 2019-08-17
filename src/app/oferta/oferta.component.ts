import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, Observer, Subscription } from 'rxjs';
import { interval } from 'rxjs'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  /* //teste com observable
  private tempoObservableSubscription: Subscription
  private meuObservableTesteSubscription: Subscription
  */
  public oferta: Oferta

  constructor(
    private route: ActivatedRoute,
    public ofertasService: OfertasService) {
  }

  ngOnDestroy() {
    /* //teste com observable - se desinscrever dos observables quando sair da classe.
    this.meuObservableTesteSubscription.unsubscribe()
    this.tempoObservableSubscription.unsubscribe()
    */
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

    /* //teste com observable
    let tempo = interval(2000)
    this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
      console.log('valor recuperado:', intervalo)
    })
    


    //observable(observavel)
    let meuObservableTeste = Observable.create((observer: Observer<string>) => { //pode ser de tipo number tbm e pode calcular abaixo
      observer.next('Primeiro evento da stream') //essa string vai ser enviada pro observador abaixo
      //observer.error('algum erro foi encontrado na stream de eventos') //forcando erro pra cair no segundo parametro do observador
      observer.complete()
    })

    //observable(observador)
    this.meuObservableTesteSubscription = meuObservableTeste.subscribe(
      (resultado: any) => { console.log(resultado) }, //primeiro parametro é o de intrucao
      (erro: any) => { console.log(erro) }, //segundo parametro é o de erro
      () => console.log('stream de eventos foi finalizada') //terceiro parametro é quando completar
    )
    */
  }


}
