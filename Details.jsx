import { useState } from "react";
import '../css/App2.css';
import { Link } from "react-router-dom";
export default function Details(props){
    const [surface, setSurface] = useState('');
    const [prix, setPrix] = useState('');
    const [etage, setEtage] = useState('2');
    const [nombreEtage, setNombreEtage] = useState('5');
    const [counter, setcounter] = useState(0);
    const [counter1, setcounter1] = useState(0);
    const [counter2, setcounter2] = useState(0);
    const [counter3, setcounter3] = useState(0);
    const [info,setinfo]=useState(
      {
        surface:surface,
        prix:prix,
        etage:etage,
        nombreEtage:nombreEtage,
        counter:counter,
        counter1:counter1,
        counter2:counter2,
        counter3:counter3

      }
    )
    const incrementHandler = () => {
      setcounter((val) => val + 1);
    }
    const decrementHandler = () => {
      setcounter((val) => val - 1);
    }
    const incrementHandler1 = () => {
      setcounter1((val) => val + 1);
    }
  
    const decrementHandler1 = () => {
      setcounter1((val) => val - 1);
    }
    const incrementHandler2 = () => {
      setcounter2((val) => val + 1);
    }
  
    const decrementHandler2 = () => {
      setcounter2((val) => val - 1);
    }
    const incrementHandler3 = () => {
      setcounter3((val) => val + 1);
    }
  
    const decrementHandler3 = () => {
      setcounter3((val) => val - 1);
    }
    return (
      <>
        <div className="App2">
          <div className="linge1">
            <div className="c">
              <p>Surface</p>
              <input type="text" className="a" placeholder="600" value={surface} onChange={(e) => setSurface(e.target.value)} />
              <button type="button" className="b-DH">m <sup>2</sup></button>
            </div>
  
            <div className="marg">
              <p>Prix</p>
              <input type="text" className="a" placeholder="50000" value={prix} onChange={(e) => setPrix(e.target.value)} />
              <button type="button" className="b-DH">DH</button>
            </div>
            <form className="form2">
              <div className="marg">
                <label>Etage</label><br />
                <select value={etage} onChange={(e) => setEtage(e.target.value)}>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <div className="marg">
                <label>Nombre etage</label><br />
                <select value={nombreEtage} onChange={(e) => setNombreEtage(e.target.value)}>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                </select>
              </div>
            </form>
          </div>
          <div className="linge1">
            <div className="box">
              <p>Piece</p>
              <div className="box1">
                <button onClick={decrementHandler}>-</button>
                <h2>{counter}</h2>
                <button onClick={incrementHandler}>+</button></div>
            </div>
            <div className="box0">
              <p >Chambre</p>
              <div className="box1" >
                <button onClick={decrementHandler1}>-</button>
                <h2 className="Chambre">{counter1}</h2>
                <button onClick={incrementHandler1}>+</button>
              </div></div>
            <div className="box0">
              <p >Chambre</p>
              <div className="box1" >
                <button onClick={decrementHandler2}>-</button>
                <h2 className="Chambre">{counter2}</h2>
                <button onClick={incrementHandler2}>+</button>
              </div></div>
            <div className="box0" id="box-id">
              <p >Chambre</p>
              <div className="box1" >
                <button onClick={decrementHandler3}>-</button>
                <h2 className="Chambre">{counter3}</h2>
                <button onClick={incrementHandler3}>+</button>
              </div>
            </div>
          </div>
          <button type="button" className="Next-bo2" onClick={()=>props.func1()}>
                  <img src="images/ico2.jpeg" className='Next-bo2-imgs' />Retour</button>
                   
                   <button type="button" className="Next-bott2"onClick={()=>props.func(info)} >Next</button>
        </div>
      </>
    );}