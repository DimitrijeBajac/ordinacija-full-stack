package com.ordinacijadb.ordinacija.DTO;

import com.ordinacijadb.ordinacija.model.Pacijent;

import java.time.LocalDateTime;

public class ZakazaniTerminDTO {
    private Long id;
    private LocalDateTime datumIVreme;
    private int trajanje;

    private Pacijent pacijent;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDatumIVreme() {
        return datumIVreme;
    }

    public void setDatumIVreme(LocalDateTime datumIVreme) {
        this.datumIVreme = datumIVreme;
    }

    public int getTrajanje() {
        return trajanje;
    }

    public void setTrajanje(int trajanje) {
        this.trajanje = trajanje;
    }

    public Pacijent getPacijent() {
        return pacijent;
    }

    public void setPacijent(Pacijent pacijent) {
        this.pacijent = pacijent;
    }
}
