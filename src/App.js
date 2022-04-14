
import { useState} from 'react';
import html2canvas from 'html2canvas';
import './App.css';

function App() {
  const [linea1,setlinea1] = useState('');
  const [linea2,setlinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(e){
    setlinea1(e.target.value)
  }

  const onChangeLinea2 = function(e){
    setlinea2(e.target.value)
  }

  const onChangeImage = function(e){
    setImagen(e.target.value)
  }
  
  const exportar = function(e){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  }
 
  return (
    
    <div className="App">
     
    <h1>Creador de Memes</h1>

     <select onChange={onChangeImage}>
       <option value="arnold">Arnold</option>
       <option value="bobEsponja">Bob Esponja</option>
       <option value="c">Pablo Escobar</option>
       <option value="carita">Pelón</option>
       <option value="dani"> Danerys</option>
       <option value="girlFire">Girl Fire</option>
       <option value="historyChanel">History Channel</option>      
       <option value="mamado">Corpulento</option>
       <option value="negro">Negro</option>       
       <option value="pikachu">Picachu</option>
       <option value="spaidi">Spider Man</option>
       <option value="yodabebe">Yoda Bebé</option>
     </select> <br/>     
     
      <input onChange={onChangeLinea1} type="text" placeholder="Línea 1"/><br/>
      <input onChange={onChangeLinea2} type="text" placeholder="Línea 2"/><br/>
      <button onClick={exportar}>Exportar</button>

    

    <div className='meme' id='meme'>
      <span>{linea1}</span><br/>
      <span>{linea2}</span>
      <img src={`/img/${imagen}.jpg` } width='500px' height='700px'/>
    </div> 
     
    </div>
  );
}

export default App;
