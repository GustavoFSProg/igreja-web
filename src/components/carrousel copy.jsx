import React, { useState } from 'react'
// import './movieRow.css'
// "../assets/images/carrocel-1.png"
// import { NavigateBefore, NavigateNext } from '@material-ui/icons'
// import { Imagens } from '../ImagesObject'

import Carr1 from '../assets/images/carrocel-1.png'
// import carr2 from '../src/assets/images/carroucel-2.png'

export const Imagens = [
  {
    id: 0,
    imagem: '../assets/images/carrocel-1.png',
  },
  { id: 1, imagem: '../assets/images/carrocel-1.png' },
  { id: 2, imagem: '../assets/images/carrocel-1.png' },
]

function Carrousel() {
  // const [scrollX, setScrollX] = useState(-400)
  const [figuras, setFiguras] = useState([])

  setFiguras(Imagens)

  // function handleleftArrow() {
  //   let x = scrollX + Math.round(window.innerWidth / 2)

  //   if (x > 0) {
  //     x = 0
  //   }

  //   setScrollX(x)

  //   return scrollX
  // }

  // function handleRightArrow() {
  //   let x = scrollX - Math.round(window.innerWidth / 2)
  //   let listW = figuras.length * 150

  //   const win = window.innerWidth - listW
  //   if (win > x) {
  //     x = win - 60
  //   }

  //   setScrollX(x)
  // }

  return (
    <div className="movieRow">
      {' '}
      <h2>Imagens</h2>
      <div className="movieRow--left" onClick={() => alert('entrou')}>
        ARROW LEFT
        {/* <NavigateBefore style={{ fontSize: '50' }} /> */}
      </div>
      <div className="movieRow--right" onClick={() => alert('entrou')}>
        ArrowRight
        {/* <NavigateNext style={{ fontSize: '50' }} /> */}
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          // style={{
          //   marginLeft: scrollX,
          //   width: figuras.length * 150,
          // }}
        >
          <img src={Carr1} alt="aasdf" />

          {/* {items.results.length > 0 && */}
          {/* {console.log(figuras)} */}
          {/* {figuras.map((item) => {
            // console.log(item.imagem)
            return (
              <div key={item.id}>
                <img src={Carr1} alt="aasdf" />
              </div>
            )
          })} */}
        </div>
      </div>
    </div>
  )
}

export default Carrousel
