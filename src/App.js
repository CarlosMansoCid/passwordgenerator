import bg from "../src/assets/images/bg.png"

function App() {
  return (
    <div className="App">
      <h1 style={{color:"#eee", fontSize:'60px'}}><span style={{color:'rgba(255,197,45,1)'}}>SECUR3</span>PASSWORD<br/>Manager</h1>
      <p style={{color:'#eee', fontSize:'30px'}}>Generate, store and<br/><span style={{color:'rgba(255,197,45,1)'}}>remember all your password </span><br/>more easy than ever!</p>
      <button style={{border:'none',
                      padding:'1rem 3rem',
                      borderRadius:'15px', 
                      margin: '2rem',
                      background: "rgb(244,162,97)",
                      background: "linear-gradient(133deg, rgba(244,162,97,1) 6%, rgba(255,197,45,1) 89%)", 
                      color:'#fff',
                      fontFamily:'Comfortaa',
                      }}>Hola</button>
    </div>
  );
}

export default App;
