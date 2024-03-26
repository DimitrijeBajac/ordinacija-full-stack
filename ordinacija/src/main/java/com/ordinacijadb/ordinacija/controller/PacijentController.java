package com.ordinacijadb.ordinacija.controller;

import com.ordinacijadb.ordinacija.model.Pacijent;
import com.ordinacijadb.ordinacija.service.PacijentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pacijenti")
@CrossOrigin("http://localhost:3000")
public class PacijentController {

    @Autowired
    private PacijentService pacijentService;

    @PostMapping("/dodaj")
    public ResponseEntity<Pacijent> dodajPacijenta(@RequestBody Pacijent pacijent) {
        Pacijent noviPacijent = pacijentService.dodajPacijenta(pacijent);
        return new ResponseEntity<>(noviPacijent, HttpStatus.CREATED);
    }

    @GetMapping("/svi")
    public ResponseEntity<List<Pacijent>> sviPacijenti() {
        List<Pacijent> pacijenti = pacijentService.sviPacijenti();
        return new ResponseEntity<>(pacijenti, HttpStatus.OK);
    }
    @GetMapping("/login")
    public ResponseEntity<?> login(@RequestParam String jmbg) {
        try {
            Pacijent pacijent = pacijentService.nadjiJmbg(jmbg);

            if (pacijent != null) {
                return ResponseEntity.ok(pacijent);
            } else {
                // Ako JMBG nije pronađen, vraćamo odgovor sa statusom 404 (NOT FOUND) i odgovarajućom porukom
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pacijent nije pronađen. Potrebno je izvršiti registraciju.");
            }
        } catch (Exception e) {
            // Greška prilikom obrade zahteva
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Greška prilikom obrade zahteva.");
        }
    }
    @DeleteMapping("/izbrisi/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id){
        pacijentService.izbrisiPacijenta(id);
        return ResponseEntity.ok("Uspesno obrisan pacijent");
    }


}
