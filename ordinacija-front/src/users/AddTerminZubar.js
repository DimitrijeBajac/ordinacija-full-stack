import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export const AddTerminZubar = () => {
    const [pacijentId, setPacijentId] = useState(-1)
    const [ime, setIme] = useState('')
    const [prezime, setPrezime] = useState('')
    const [jmbg, setJmbg] = useState('')
    const [email, setEmail] = useState('')
    const [brojTelefona, setBrojTelefona] = useState('')

    const [datumIVreme, setDatumIVreme] = useState('');
    const [trajanje, setTrajanje] = useState(30);
    const [error, setError] = useState('');

    const storedPacijent = sessionStorage.getItem('pacijent');
    const navigate = useNavigate();

    const mailStructure = {
        subject: 'Zakazivanje termina',
        message: 'Uspesno ste zakazali termin.',
      };

    const navigator = useNavigate();


    const saveUser = async (e) => {
        e.preventDefault();

        const isValidVreme = () => {
            const selectedDate = new Date(datumIVreme);
            const selectedHour = selectedDate.getHours();
            const selectedMinutes = selectedDate.getMinutes();

            const validMinutes = selectedMinutes === 0 || selectedMinutes === 30;
            const validWorkingHours = selectedHour >= 9 && selectedHour < 17;

            return validMinutes && validWorkingHours;
        };


        try {
            if (![30, 60].includes(trajanje)) {
                setError('Trajanje termina može biti samo 30 ili 60 minuta.');
                return;
            }

            if (!isValidVreme()) {
                setError('Termin može biti zakazan samo od 9 AM do 5 PM i na pun sat ili na pola sata.');
                return;
            }

            const pacijent = { pacijentId, ime, prezime, jmbg, email, brojTelefona }
            const termin = { datumIVreme, trajanje, pacijent }
            console.log(pacijent);
            console.log(termin);
            const response = await axios.post('http://localhost:8080/termini/zakazi', termin);
            const response2 = axios.post(`http://localhost:8080/mail/send/${email}`, mailStructure).then((response) => response.data)
            .catch(() => setError("Doslo je do greske prilikom slanja mejla"));

            !error && navigate(-1)


        } catch (error) {
            console.error('Greška prilikom zakazivanja termina:', error);
            setError('Došlo je do greške prilikom zakazivanja termina.');
        }
    }


    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Registracija</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb2'>
                                <label className='form-label'>Ime:</label>
                                <input type='text'
                                    placeholder='Unesite ime'
                                    name='ime'
                                    value={ime}
                                    className='form-control'
                                    onChange={(e) => setIme(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb2'>
                                <label className='form-label'>Prezime:</label>
                                <input type='text'
                                    placeholder='Unesite prezime'
                                    name='prezime'
                                    value={prezime}
                                    className='form-control'
                                    onChange={(e) => setPrezime(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb2'>
                                <label className='form-label'>Jmbg:</label>
                                <input type='text'
                                    placeholder='Unesite jmbg'
                                    name='jmgb'
                                    value={jmbg}
                                    className='form-control'
                                    onChange={(e) => setJmbg(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb2'>
                                <label className='form-label'>Email:</label>
                                <input type='text'
                                    placeholder='Unesite email'
                                    name='email'
                                    value={email}
                                    className='form-control'
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb2'>
                                <label className='form-label'>Broj telefona:</label>
                                <input type='text'
                                    placeholder='Unesite broj telefona'
                                    name='brojTelefona'
                                    value={brojTelefona}
                                    className='form-control'
                                    onChange={(e) => setBrojTelefona(e.target.value)}
                                >
                                </input>
                            </div>
                            <br />

                            <div>
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


                            </div>
                            <br />

                            <button className='btn btn-success' onClick={saveUser}>Registruje se</button>
                        </form>

                    </div>


                </div>

            </div>

        </div>
    )
}
