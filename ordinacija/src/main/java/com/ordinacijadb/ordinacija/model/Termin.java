package com.ordinacijadb.ordinacija.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "termini")
public class Termin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long terminId;

    @ManyToOne
    @JoinColumn(name = "pacijent_id")
    private Pacijent pacijent;

    @ManyToOne
    @JoinColumn(name = "zubar_id")
    private Zubar zubar;

    private LocalDateTime datumIVreme;
    private int trajanjePregleda;
    private String statusTermina;


    public Long getTerminId() {
        return terminId;
    }

    public void setTerminId(Long terminId) {
        this.terminId = terminId;
    }

    public Pacijent getPacijent() {
        return pacijent;
    }

    public void setPacijent(Pacijent pacijent) {
        this.pacijent = pacijent;
    }

    public Zubar getZubar() {
        return zubar;
    }

    public void setZubar(Zubar zubar) {
        this.zubar = zubar;
    }

    public LocalDateTime getDatumIVreme() {
        return datumIVreme;
    }

    public void setDatumIVreme(LocalDateTime datumIVreme) {
        this.datumIVreme = datumIVreme;
    }

    public int getTrajanjePregleda() {
        return trajanjePregleda;
    }

    public void setTrajanjePregleda(int trajanjePregleda) {
        this.trajanjePregleda = trajanjePregleda;
    }

    public String getStatusTermina() {
        return statusTermina;
    }

    public void setStatusTermina(String statusTermina) {
        this.statusTermina = statusTermina;
    }
}
