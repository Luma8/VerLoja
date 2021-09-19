import logo from '../../../../../assets/logo.png'
import tomate from '../../../../../assets/frutas/Tomate.png'
import brocolis from '../../../../../assets/frutas/Brócolis.png'
import batata from '../../../../../assets/frutas/Batata.png'
import pepino from '../../../../../assets/frutas/Pepino.png'
import abobora from '../../../../../assets/frutas/Abóbora.png'

const cesta = {
    topo: {
        titulo: "Detalhe da Cesta"
    },
    detalhes: {
        nome: "Cesta De Verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma Cesta com Produtos selecionados Cuidadozamente da fazenda para a cozinha",
        preco: "R$ 40,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da Cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Abóbora",
                imagem: abobora,
            },
        ]
    }
}

export default cesta;