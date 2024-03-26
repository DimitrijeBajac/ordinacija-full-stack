package com.ordinacijadb.ordinacija.controller;

import com.ordinacijadb.ordinacija.model.Zubar;
import com.ordinacijadb.ordinacija.service.ZubarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/zubar")
@CrossOrigin("http://localhost:3000")
public class ZubarController {

    @Autowired
    private ZubarService zubarService;

    @PostMapping("/dodaj")
    public ResponseEntity<Zubar> dodajZubara(@RequestBody Zubar zubar) {
        Zubar noviZubar = zubarService.dodajZubara(zubar);
        return new ResponseEntity<>(noviZubar, HttpStatus.CREATED);
    }

    @GetMapping("/svi")
    public ResponseEntity<List<Zubar>> sviZubari() {
        List<Zubar> zubari = zubarService.sviZubari();
        return new ResponseEntity<>(zubari, HttpStatus.OK);
    }

    @GetMapping("/login")
    public ResponseEntity<?> login(@RequestParam String sifra) {
        try {
            Zubar zubar = zubarService.nadjiKod(sifra);

            if (zubar != null) {
                return ResponseEntity.ok(zubar);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Zubar nije pronađen.");
            }
        } catch (Exception e) {
            // Greška prilikom obrade zahteva
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Greška prilikom obrade zahteva.");
        }
    }
}
