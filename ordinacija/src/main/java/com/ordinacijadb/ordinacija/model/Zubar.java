package com.ordinacijadb.ordinacija.model;

import jakarta.persistence.*;

@Entity
@Table(name="zubar")
public class Zubar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long zubarId;
    private String ime;
    private String prezime;
    private String kodZaPrijavu;

    public Long getZubarId() {
        return zubarId;
    }

    public void setZubarId(Long zubarId) {
        this.zubarId = zubarId;
    }

    public String getIme() {
        return ime;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public String getPrezime() {
        return prezime;
    }

    public void setPrezime(String prezime) {
        this.prezime = prezime;
    }

    public String getKodZaPrijavu() {
        return kodZaPrijavu;
    }

    public void setKodZaPrijavu(String kodZaPrijavu) {
        this.kodZaPrijavu = kodZaPrijavu;
    }
}
