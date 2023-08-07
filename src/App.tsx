import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {
const [textoFrase, setTextoFrase] = useState ("")
const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

const allFrases = [
{
  id: 1,
  nome:'Motivação',
  frases: [
    'Siga os bons e  aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distancia entre duas pessoas.',
    'Deixe de lado as preocupacoes e seja feliz',
    'Realize o óbvio, pense no improvavel e conquiste o impossivel',
    'Acredite em milagres, mas nao dependa deles.',
    'A maior barreirra para o sucesso é o medo do fracasso.',
    'As pessoas não carecem de força, carecem de determinação.',
    'Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada. Apenas dê o primeiro passo.',
    'A impaciência é um grande obstáculo para o bom êxito.',
    'A força não provém da capacidade física. Provém de uma vontade indomável.'
  ]
},
{
  id:2,
  nome:'Bom dia',
  frases:[
    'Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia',
    'A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!',
    'EScreva em seu coraçao: todo dia é o melhor dia do ano',
    'Bom dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto o girassol.,',
    'Que seu dia seja leve e regado de boas energias. Bom dia com muita alegria!',
    'Hoje seu dia será especial! Muito melhor que ontem e um aprendizado para amanhã.',
  ]
},
{
  id:3,
nome:' Boa noite',
frases:[
  'Hora de apagar as luzes e de deixar que os anjos te conduzam para os melhores sonhos. Boa noite!',
  'Três ingredientes são fundamentais: fé, esperança e amor! Deus cuida do resto. Boa noite!',
  'Acalme esse coração e confie mais no lindo caminho que a vida preparou para você. Boa noite!',
  'Boa noite! Que os sonhos te abracem e que acorde cheio de energia para um novo dia.',
  'Olhe para a lua e sinta todas as energias positivas que ela está te enviando. Boa noite!',



]
}
]

function handleSwitchCategory (index:number){
 setCategoriaSelecionada(index)
}

function gerarFrase(){
 const numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
 setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
}
 
  return(
    <div className='container'>
      <img className='logo' src={logoImg}
       alt="Logo frases"
        />

        <h2 className='title'>Categorias</h2>
        <section className='category-area'>
          {allFrases.map ((item, index) => (
            <button
            key={item.id}
             className='category-button'
             style={{
              borderWidth:item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#f5e504"
             }}
             onClick={() => handleSwitchCategory (index)}
             >
             {item.nome}
              </button>
          ))}
        
        </section>
        <button onClick={gerarFrase} className='button-frases'>Gerar frases</button>

        {textoFrase !== '' && <p className='textoFrase'>{textoFrase}</p>} {/*Se o texto for diferente de vazio mostre*/ }
      
    </div>
  )
}

export default App
