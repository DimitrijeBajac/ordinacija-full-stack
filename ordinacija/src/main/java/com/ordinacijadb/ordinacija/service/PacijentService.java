package com.ordinacijadb.ordinacija.service;

import com.ordinacijadb.ordinacija.model.Pacijent;
import com.ordinacijadb.ordinacija.repository.PacijentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PacijentService {
    @Autowired
    private PacijentRepository pacijentRepository;

    public Pacijent dodajPacijenta(Pacijent pacijent){
        return pacijentRepository.save(pacijent);
    }

    public List<Pacijent> sviPacijenti(){
        return pacijentRepository.findAll();
    }

    public Pacijent nadjiJmbg(String jmbg){
        Pacijent pacijent = pacijentRepository.findByJmbg(jmbg);
        if(pacijent == null) {
            System.out.println("Ne postoji u bazi");
            return null;
        }
        return pacijent;

    }

    public void izbrisiPacijenta(Long id){
        Optional<Pacijent> pacijent = pacijentRepository.findById(id);
        pacijentRepository.deleteById(pacijent.get().getPacijentId());
    }
}
