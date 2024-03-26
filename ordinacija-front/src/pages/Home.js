import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

    const[users, setUsers]= useState([]);
    const[termini, setTermini] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');


    const checkSessionStorage = () => {
        const storedPacijent = sessionStorage.getItem('pacijent');
    
        if (storedPacijent) {
            const parsedPacijent = JSON.parse(storedPacijent);
            console.log('Podaci o pacijentu u sesiji:', parsedPacijent); 
        } else {
            console.log('Podaci o pacijentu nisu pronađeni u sesiji.');
        }
    };

    useEffect(()=>{
       loadUsers();
       loadTermini();
       checkSessionStorage();
    }, []);

    const deleteUser =async(e)=>{
        e.preventDefault();
        const result = await axios.delete("http://localhost:8080/pacijenti/izbrisi/" + e).then((response)=>{
            loadUsers();
        })

    }

    const loadUsers=async()=>{
        const result =await axios.get("http://localhost:8080/pacijenti/svi");
        setUsers(result.data);
    }
    const loadTermini = async (url) => {
        try {
            const result = await axios.get(url);
            setTermini(result.data);
        } catch (error) {
            console.error("Greška prilikom dohvaćanja podataka:", error);
        }
    }

    const handleDropdownChange = (option) => {
        setSelectedOption(option)
        if (option === "opcija1") {
            loadTermini("http://localhost:8080/termini/dnevni");
        } else if (option === "opcija2") {
            loadTermini("http://localhost:8080/termini/nedeljni");
        }
    }

    const deleteTermin =async(e)=>{
        const result = await axios.delete("http://localhost:8080/termini/otkazi/" + e).then((response)=>{
            loadTermini();
        })
       
    }

    return (
        <div className='container'>
            <div className='py--4'>
                <table className="table border shadow">
                    <thead>
                        <tr>Registrovani pacijenti</tr>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ime</th>
                            <th scope="col">Prezime</th>
                            <th scope="col">Jmbg</th>
                            <th scope="col">Email</th>
                            <th scope="col">Broj telefona</th>
                            <th scope="col">Otkazi termin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index)=>(
                                <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{user.ime}</td>
                                <td>{user.prezime}</td>
                                <td>{user.jmbg}</td>
                                <td>{user.email}</td>
                                <td>{user.brojTelefona}</td>
                                <td>
                                    <button className='btn btn-danger mx-2' onClick={() => deleteUser(user.pacijentId)}>X</button>
                                </td>
                        </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>

            <div className='container'>
                <h2 style={{ marginTop: '20px' }}>Izaberite:</h2>
                <div style={{ marginBottom: '20px' }}>
                    <select className="form-control" value={selectedOption} onChange={(e) => handleDropdownChange(e.target.value)}>
                        <option value="">Izaberi opciju</option>
                        <option value="opcija1">Dnevni pregled termina</option>
                        <option value="opcija2">Nedeljni pregled termina</option>
                    </select>
                </div>
                {selectedOption && (
                    <table className="table border shadow">
                        <thead>
                        <tr>
                            <tr>Zakazani termini</tr>
                            <th scope="col">#</th>
                            <th scope="col">Trajanje</th>
                            <th scope="col">Datum i vreme</th>
                            <th scope="col">Pacijent</th>
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
                                <td>{termin.pacijent.ime} {termin.pacijent.prezime}</td>
                                <td>
                                    <button className='btn btn-danger mx-2' onClick={() => deleteTermin(termin.terminId)}>X</button>
                                </td>
                        </tr>

                            ))
                        }
                    </tbody>
                    </table>
                )}
            </div>
        </div>

    )
}
