package com.ordinacijadb.ordinacija.repository;

import com.ordinacijadb.ordinacija.model.Pacijent;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PacijentRepository extends JpaRepository<Pacijent, Long> {

    public Optional<Pacijent> findById(Long id);
    public Pacijent findByJmbg(String jmbg);
    public void deleteById(Long id);

}
