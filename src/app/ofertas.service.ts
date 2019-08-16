import { Oferta } from './shared/oferta.model'
import { HttpClient } from '@angular/common/http'; //Http em versao antiga
import { Injectable } from '@angular/core'
import { URL_API } from './app.api';

//import 'rxjs/add/operator/toPromise'

@Injectable()
export class OfertasService {

    private uri: string = 'http://localhost:3000/ofertas?destaque=true'
    private uriCategoria: string = 'http://localhost:3000/ofertas?categoria='
    private uriId: string = 'http://localhost:3000/ofertas?id='

    public ofertas: Oferta[]
    public ofe: Oferta

    constructor(private http: HttpClient) {

    }

    getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0].descricao
            })
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                console.log(resposta[0].descricao)
                return resposta[0].descricao
            })
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get<Oferta>(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                console.log("array inteiro:", resposta)
                console.log("primeira posicao:", resposta)
                return resposta[0]
            })
    }

    public getOfertas(): Promise<Oferta[]> {
        //efetuar uma requisisao http
        //retornar um promisse oferta[]
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then(param => this.ofertas = param)

    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        console.log('buscando por: ', `${URL_API}/ofertas?categoria=${categoria}`)
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then(param => this.ofertas = param)
    }


    /*
    
    public getOfertas2(): Promise<Oferta[]> {
        return new Promise((resolve, reject) => {
            //algum tipo de processamento que ao finalizar, chama a funcao resolve ou reject
            // console.log('passou pelo promisse')

            let deu_certo = true //simulando um erro para cair no reject
            if (deu_certo) {
                setTimeout(() => resolve(this.ofertas), 3000) //simulando 3seg pra obter a resposta
            } else {
                reject({ codigo_erro: 404, mensagem_erro: 'servidor nao encontrado' })
            }

        })
            .then((ofer: Oferta[]) => { //aqui ele capturou a resposta do resolve
                //fazer altuma tratativa
                console.log('primeiro then')
                return ofer // aqui vai passar pro then de baixo, o then abaixo ira capturar
            })
            .then((ofe: Oferta[]) => {
                console.log('segundo then')
                return new Promise((resolve2, reject2) => { //criando outra promisse
                    setTimeout(() => { resolve2(ofe) }, 3000) //setando timeout de mais 3 seg
                })
            })
            .then((oferttt: Oferta[]) => {
                console.log('terceiro then executado apos 3 segundos porque estava aguardando a promisse')
                return oferttt
            })
    }
    
    */



}