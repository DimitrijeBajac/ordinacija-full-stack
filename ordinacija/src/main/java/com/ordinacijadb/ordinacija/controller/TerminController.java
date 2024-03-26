package com.ordinacijadb.ordinacija.controller;

import com.ordinacijadb.ordinacija.DTO.ZakazaniTerminDTO;
import com.ordinacijadb.ordinacija.DTO.ZakazivanjeTerminaDTO;
import com.ordinacijadb.ordinacija.model.Pacijent;
import com.ordinacijadb.ordinacija.model.Termin;
import com.ordinacijadb.ordinacija.service.TerminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/termini")
@CrossOrigin("http://localhost:3000")
public class TerminController {

    @Autowired
    private TerminService terminService;

    @PostMapping("/zakazi")
    public ResponseEntity<ZakazaniTerminDTO> zakaziTermin(@RequestBody ZakazivanjeTerminaDTO zahtev) {
        ZakazaniTerminDTO zakazaniTermin = terminService.zakaziTermin(zahtev);
        return new ResponseEntity<>(zakazaniTermin, HttpStatus.CREATED);
    }

    @DeleteMapping("/otkazi/{terminId}")
    public ResponseEntity<Void> otkaziTermin(@PathVariable Long terminId) {
        terminService.otkaziTermin(terminId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/svi")
    public ResponseEntity<List<Termin>> sviTermini() {
        List<Termin> termini = terminService.sviTermini();
        return new ResponseEntity<>(termini, HttpStatus.OK);
    }

    @GetMapping("/dnevni")
    public ResponseEntity<List<Termin>> sviTerminiZaDanas() {
        List<Termin> termini = terminService.sviTeriminiZaDanasnjiDan();
        return new ResponseEntity<>(termini, HttpStatus.OK);
    }

    @GetMapping("/nedeljni")
    public ResponseEntity<List<Termin>> sviTerminiZaSedamDana() {
        List<Termin> termini = terminService.findTermineZaNarednihSedamDana();
        return new ResponseEntity<>(termini, HttpStatus.OK);
    }
}
