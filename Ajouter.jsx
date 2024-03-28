import React, { useState } from "react";

export default function Ajouter(props) {
  const [Info, setInfo] = useState({
    type: '',
    eta: '',
    address: '',
    region: '',
    ville: ''
  });

  return (
    <>
      <div className="App">
        <header className="">
          <h2 className='h222'>Catégory</h2>
          <div className="btn-1">
            <button type="submit" className='btn2'>vente</button>
            <button type="submit" className='btn2'>Location</button>
            <button type="submit" className='btn2'>Location vacance</button>
          </div><br />
          <div>
            <form className="form" action={''}>
              <label>Type</label><br />
              <select value={Info.type} onChange={(e) => setInfo({ ...Info, type: e.target.value })}>
                <option></option>
                <option value='Neuf'>Neuf</option>
                <option value='bon occasion'>bon occasion</option>
              </select><br /><br />
              <label>Eta</label><br />
              <select value={Info.eta} onChange={(e) => setInfo({ ...Info, eta: e.target.value })}>
                <option>Neuf</option>
                <option>...</option>
                <option>...</option>
              </select><br /><br />
              <label>Address</label><br />
              <input type="email" value={Info.address} onChange={(e) => setInfo({ ...Info, address: e.target.value })} /> <br /><br />
              <label>Région</label><br />
              <select value={Info.region} onChange={(e) => setInfo({ ...Info, region: e.target.value })}>
                <option>casablance-settat</option>
                <option>rabat-sala-kenitra</option>
                <option>...</option>
              </select><br /><br />
              <label>Ville</label><br />
              <select value={Info.ville} onChange={(e) => setInfo({ ...Info, ville: e.target.value })}>
                <option>casablance</option>
                <option>rabaa</option>
                <option>settat</option>
              </select>
            </form>
          </div>
        </header>
        <div className="IMG1">
          <h2>Emplacement en Maps</h2>

          <div className="Room_bed_wraper map_wraper">
            <iframe
              title="me"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d53190.243131969706!2d-7.686202158339105!3d33.56921684283989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scasa!5e0!3m2!1sen!2sma!4v1711236135165!5m2!1sen!2sma"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <button type="button" className="Next-botton" onClick={() => props.func(Info)}>Next</button>
        </div>
      </div>
    </>
  );
}
