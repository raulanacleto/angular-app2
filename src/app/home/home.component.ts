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

    this.ofertasService.getOfertas() //getOfertas2() esta comentado
      .then( //aqui é quando cai no resolve 
        (ofer: Oferta[]) => { //ofer: Oferta[] é o que espera receber 
          // console.log('carregou depois de 3 segundos') - valido para metodo getOfertas2()
          this.ofertas = ofer 
        }                  
      )
      .catch( //aqui é quando cai no reject
        (param: any) => { console.log(param) }  //param: any é o que espera receber
      )

  }

}
