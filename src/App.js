import Logo from './assets/images/logo.png'
import Texto from './assets/images/texto.jpeg'
import Corona from './assets/images/corona.jpeg'
import Grupo from './assets/images/grupo.png'
import Natal from './assets/images/natal.jpeg'
import Jovem from './assets/images/jovem-luterano.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="logo" style={{ marginLeft: '48px' }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2px',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              justifyItems: 'center',
              alignItems: 'center',
              color: '#8a8a5c',
              fontSize: '16px',
              opacity: '0.62',
            }}
          >
            <li style={{ marginRight: '23px' }}>HOME</li>
            <li style={{ marginRight: '23px' }}>VALORES</li>
            <li style={{ marginRight: '23px' }}>UNIDADE</li>
            <li style={{ marginRight: '23px' }}>DIVERSIDADE</li>
            <li style={{ marginRight: '23px' }}>GOVERNANÇA</li>
            <li style={{ marginRight: '23px' }}>HISTÓRIA</li>
            <li style={{ marginRight: '23px' }}>MAIS</li>
          </ul>
        </div>

        <hr style={{ marginTop: '-12px' }} />

        <div style={{ marginLeft: '50px' }}>
          <div>
            <img src={Texto} alt="texto" />
            <img src={Corona} alt="corona" />
          </div>

          <div style={{ marginTop: '-3px' }}>
            <img src={Grupo} alt="grupo" width="390" height="260" />
            <img src={Natal} alt="natal" width="390" height="260" />
            <img src={Jovem} alt="jovem" width="390" height="260" />
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
