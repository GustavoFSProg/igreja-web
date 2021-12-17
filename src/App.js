import Logo from './assets/images/logo.png'

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
              fontSize: '15.8px',
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
      </header>
    </div>
  )
}

export default App
