package com.ordinacijadb.ordinacija.service;

import com.ordinacijadb.ordinacija.DTO.ZakazaniTerminDTO;
import com.ordinacijadb.ordinacija.DTO.ZakazivanjeTerminaDTO;
import com.ordinacijadb.ordinacija.model.Pacijent;
import com.ordinacijadb.ordinacija.model.Termin;
import com.ordinacijadb.ordinacija.repository.PacijentRepository;
import com.ordinacijadb.ordinacija.repository.TerminRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TerminService {
    @Autowired
    private TerminRepository terminRepository;
    @Autowired
    private PacijentRepository pacijentRepository;

    public ZakazaniTerminDTO zakaziTermin(ZakazivanjeTerminaDTO zahtev){

        Optional<Pacijent> optionalPacijent = pacijentRepository.findById(zahtev.getPacijent().getPacijentId());
        Termin noviTermin = new Termin();

        if (optionalPacijent.isPresent()) {
            Pacijent pacijent = optionalPacijent.get();
            noviTermin.setDatumIVreme(zahtev.getDatumIVreme());
            noviTermin.setTrajanjePregleda(zahtev.getTrajanje());
            noviTermin.setPacijent(pacijent);
        } else {
            Pacijent pacijent = new Pacijent();
            pacijent.setIme(zahtev.getPacijent().getIme());
            pacijent.setPrezime(zahtev.getPacijent().getPrezime());
            pacijent.setJmbg(zahtev.getPacijent().getJmbg());
            pacijent.setEmail(zahtev.getPacijent().getEmail());
            pacijent.setBrojTelefona(zahtev.getPacijent().getBrojTelefona());
            Pacijent noviPacijent = pacijentRepository.save(pacijent);
            noviTermin.setPacijent(noviPacijent);
        }

        Termin sacuvanTermin = terminRepository.save(noviTermin);
        return mapirajNaZakazaniTermin(sacuvanTermin);
    }

    private ZakazaniTerminDTO mapirajNaZakazaniTermin(Termin sacuvanTermin) {
        ZakazaniTerminDTO dto = new ZakazaniTerminDTO();
        dto.setId(sacuvanTermin.getTerminId());
        dto.setDatumIVreme(sacuvanTermin.getDatumIVreme());
        dto.setTrajanje(sacuvanTermin.getTrajanjePregleda());
        dto.setPacijent(sacuvanTermin.getPacijent());
        return dto;

    }

    public void otkaziTermin(Long terminId){
        terminRepository.deleteById(terminId);
    }

    public List<Termin> sviTermini(){
        return terminRepository.findAll();
    }
    public List<Termin> sviTeriminiZaDanasnjiDan(){return terminRepository.findDanasnjeTermine();}
    public List<Termin> findTermineZaNarednihSedamDana() {
        LocalDateTime startDate = LocalDateTime.now();
        LocalDateTime endDate = startDate.plusDays(7);

        return terminRepository.findTermineZaNarednihSedamDana(startDate, endDate);
    }
}
