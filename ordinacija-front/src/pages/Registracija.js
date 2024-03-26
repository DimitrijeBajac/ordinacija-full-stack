import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export const Registracija = () => {

    const [ime, setIme] = useState('')
    const [prezime, setPrezime] = useState('')
    const [jmbg, setJmbg] = useState('')
    const [email, setEmail] = useState('')
    const [brojTelefona, setBrojTelefona] = useState('')

    const navigator = useNavigate();
    

    const saveUser= async(e)=>{
        e.preventDefault();

        const pacijent = {ime, prezime, jmbg, email, brojTelefona}
        console.log(pacijent);
        const response = await axios.post('http://localhost:8080/pacijenti/dodaj', pacijent);
        navigator('/');


    }


  return (
    <div className='container'>
        <br/> <br/>
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
                                onChange={(e)=>setIme(e.target.value)}
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
                                onChange={(e)=>setPrezime(e.target.value)}
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
                                onChange={(e)=>setJmbg(e.target.value)}
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
                                onChange={(e)=>setEmail(e.target.value)}
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
                                onChange={(e)=>setBrojTelefona(e.target.value)}
                            >
                            </input>
                        </div>
                        <br/>

                        <button className='btn btn-success' onClick={saveUser}>Registruje se</button>
                    </form>

                </div>


            </div>

        </div>

    </div>
  )
}
