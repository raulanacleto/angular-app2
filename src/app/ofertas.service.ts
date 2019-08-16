import { Oferta } from './shared/oferta.model'
import { HttpClient } from '@angular/common/http'; //Http em versao antiga
import { Injectable } from '@angular/core'

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) {
        
    }

    public ofertas: Array<Oferta> = [
        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger xx",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                { url: "/assets/ofertas/1/img1.jpg" },
                { url: "/assets/ofertas/1/img2.jpg" },
                { url: "/assets/ofertas/1/img3.jpg" },
                { url: "/assets/ofertas/1/img4.jpg" }
            ]
        },
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                { url: "/assets/ofertas/2/img1.jpg" },
                { url: "/assets/ofertas/2/img2.jpg" },
                { url: "/assets/ofertas/2/img3.jpg" },
                { url: "/assets/ofertas/2/img4.jpg" }
            ]

        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                { url: "/assets/ofertas/3/img1.jpg" },
                { url: "/assets/ofertas/3/img2.jpg" },
                { url: "/assets/ofertas/3/img3.jpg" },
                { url: "/assets/ofertas/3/img4.jpg" },
                { url: "/assets/ofertas/3/img5.jpg" },
                { url: "/assets/ofertas/3/img6.jpg" }
            ]
        }
    ]

    public getOfertas(): Array<Oferta> {
        return this.ofertas
    }

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

}