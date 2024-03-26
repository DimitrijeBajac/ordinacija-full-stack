import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function HomePacijent() {

    const [termini, setTermini]=useState([])
    const [error, setError] = useState('');

    useEffect(()=>{
        loadTermini();
    },[]);

    const loadTermini =async()=>{

        const result =await axios.get("http://localhost:8080/termini/svi");
        setTermini(result.data);
    }

    const myTermin = (pacijent) => {
        const storedPacijent = JSON.parse(sessionStorage.getItem('pacijent'));
        return storedPacijent?.jmbg === pacijent?.jmbg;
    }

    const deleteTermin =async(e, pacijent)=>{
    const result = await axios.delete("http://localhost:8080/termini/otkazi/" + e).then((response)=>{
    loadTermini();})
        
    }




  return (
    <div className='container'>
            <div className='py--4'>
                <table className="table border shadow">
                    <thead>
                        <h2>Zakazani termini</h2>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Trajanje</th>
                            <th scope="col">Datum i vreme</th>
                            <th scope="col">Otkazi termin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            termini.map((termin, index)=>(
                                <tr>
                                <th scope="row" key={termin}>{index+1}</th>
                                <td>{termin.trajanjePregleda}</td>
                                <td>{termin.datumIVreme}</td>
                                <td>
                                    {myTermin(termin.pacijent) && <button className='btn btn-danger mx-2' 
                                    onClick={() => deleteTermin(termin.terminId, termin.pacijent)}>Otkazi</button>}
                                </td>
                        </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        
  )
}
