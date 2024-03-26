package com.ordinacijadb.ordinacija.service;

import com.ordinacijadb.ordinacija.model.Pacijent;
import com.ordinacijadb.ordinacija.model.Zubar;
import com.ordinacijadb.ordinacija.repository.ZubarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZubarService {
    @Autowired
    private ZubarRepository zubarRepository;

    public Zubar dodajZubara(Zubar zubar){
        return zubarRepository.save(zubar);
    }

    public List<Zubar> sviZubari(){
        return zubarRepository.findAll();
    }

    public Zubar nadjiKod(String kod){
        Zubar zubar = zubarRepository.findByKodZaPrijavu(kod);
        if(zubar == null) {
            System.out.println("Ne postoji u bazi");
            return null;
        }
        return zubar;

    }
}
