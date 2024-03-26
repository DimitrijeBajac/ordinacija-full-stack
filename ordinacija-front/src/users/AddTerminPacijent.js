
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const storedPacijent = sessionStorage.getItem('pacijent');
let pacijentEmail = "";

const mailStructure = {
  subject: 'Zakazivanje termina',
  message: 'Uspesno ste zakazali termin.',
};

const checkSessionStorage = () => {

  if (storedPacijent) {
    if (storedPacijent) {
      const parsedPacijent = JSON.parse(storedPacijent);
      console.log('Podaci o pacijentu u sesiji:', parsedPacijent);
      if (parsedPacijent && parsedPacijent.email) {
         pacijentEmail = parsedPacijent.email;
        console.log('Email pacijenta:', parsedPacijent.email);
      } else {
        console.log('Email pacijenta nije dostupan.');
      }
    }
     else {
      console.log('Podaci o pacijentu nisu pronađeni u sesiji.');
    }
  }
  
};

const ZakaziTerminForma = ({ onZakaziTermin }) => {
  const [datumIVreme, setDatumIVreme] = useState('');
  const [trajanje, setTrajanje] = useState(30);
  const [error, setError] = useState();

  const navigate = useNavigate();


  const isValidVreme = () => {
    const selectedDate = new Date(datumIVreme);
    const selectedHour = selectedDate.getHours();
    const selectedMinutes = selectedDate.getMinutes();

    const validMinutes = selectedMinutes === 0 || selectedMinutes === 30;
    const validWorkingHours = selectedHour >= 9 && selectedHour < 17;

    return validMinutes && validWorkingHours;
  };

  const handleZakaziTermin = async (e) => {
    e.preventDefault();

  
      if (![30, 60].includes(trajanje)) {
        setError('Trajanje termina može biti samo 30 ili 60 minuta.');
        return;
      }

      if (!isValidVreme()) {
        setError('Termin može biti zakazan samo od 9 AM do 5 PM i na pun sat ili na pola sata.');
        return;
      }
      const pacijent = JSON.parse(storedPacijent);
      const saveTermin = {datumIVreme, trajanje,pacijent}
      const response = axios.post('http://localhost:8080/termini/zakazi', saveTermin).then((response) => response.data)
      .catch(() => {
        setError("Doslo je do greske prilikom zakazivanja termina");
      });
      const response2 = axios.post(`http://localhost:8080/mail/send/${pacijentEmail}`, mailStructure).then((response) => response.data)
      .catch(() => setError("Doslo je do greske prilikom slanja mejla"));
      
      !error && navigate(-1)

      console.log(response.data);
      console.log(response2.data);
   
  };

  useEffect(()=>{
    checkSessionStorage();
   }, []);

  return (
    <form onSubmit={handleZakaziTermin}>
      <h2>Zakazivanje termina</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label htmlFor="datumIVreme">Datum i vreme:</label>
        <input
          type="datetime-local"
          id="datumIVreme"
          value={datumIVreme}
          onChange={(e) => setDatumIVreme(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="trajanje">Trajanje (minuti):</label>
        <select
          id="trajanje"
          value={trajanje}
          onChange={(e) => setTrajanje(parseInt(e.target.value))}
        >
          <option value={30}>30 min</option>
          <option value={60}>60 min</option>
        </select>
      </div>
      <button type="submit">Zakazi termin</button>
    </form>
  );
};

export default ZakaziTerminForma;
