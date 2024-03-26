package com.ordinacijadb.ordinacija.repository;

import com.ordinacijadb.ordinacija.model.Zubar;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ZubarRepository extends JpaRepository<Zubar, Long> {
    public Zubar findByKodZaPrijavu(String kodZaPrijavu);


}
