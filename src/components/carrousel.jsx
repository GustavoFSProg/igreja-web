import React, { useState } from 'react'
import './movieRow.css'
// "../assets/images/carrocel-1.png"
import { NavigateBefore, NavigateNext } from '@material-ui/icons'
// import { Imagens } from '../ImagesObject'

import Carr1 from '../assets/images/carrocel-1.png'
import Carr2 from '../assets/images/carrocel-2.png'
import Carr3 from '../assets/images/carrocel-3.png'
import Carr4 from '../assets/images/carrocel-4.png'
import Carr5 from '../assets/images/carrocel-5.png'
import Carr6 from '../assets/images/carrocel-6.png'
import Carr7 from '../assets/images/carrocel-7.png'
// import carr2 from '../src/assets/images/carroucel-2.png'

export const Imagens = [
  {
    id: 0,
    imagem: `${Carr1}`,
  },
  { id: 1, imagem: `${Carr2}` },
  { id: 2, imagem: `${Carr3}` },
  { id: 3, imagem: `${Carr4}` },
  { id: 4, imagem: `${Carr5}` },
  { id: 5, imagem: `${Carr3}` },
  { id: 6, imagem: `${Carr6}` },
  { id: 7, imagem: `${Carr2}` },
  { id: 8, imagem: `${Carr7}` },
  { id: 9, imagem: `${Carr1}` },
  { id: 10, imagem: `${Carr3}` },
  { id: 11, imagem: `${Carr4}` },
  { id: 12, imagem: `${Carr3}` },
  { id: 13, imagem: `${Carr5}` },
  { id: 14, imagem: `${Carr7}` },
  { id: 15, imagem: `${Carr4}` },
]

function Carrousel() {
  const [scrollX, setScrollX] = useState(-400)

  function handleleftArrow() {
    let x = scrollX + Math.round(window.innerWidth / 2)

    if (x > 0) {
      x = 0
    }

    setScrollX(x)

    return scrollX
  }

  function handleRightArrow() {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listW = Imagens.length * 150

    const win = window.innerWidth - listW
    if (win > x) {
      x = win - 60
    }

    setScrollX(x)
  }

  return (
    <div className="movieRow">
      <div className="movieRow--left" style={{ marginLeft: '2px' }} onClick={handleleftArrow}>
        <NavigateBefore style={{ fontSize: '50', color: 'white' }} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNext style={{ fontSize: '50', color: 'white' }} />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: Imagens.length * 150,
          }}
        >
          {Imagens.map((item) => {
            return (
              <div key={item.id} style={{ display: 'inline' }}>
                <img
                  src={item.imagem}
                  alt="aasdf"
                  width="90"
                  height="80"
                  style={{ marginRight: '60px' }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Carrousel
