package com.ordinacijadb.ordinacija.repository;

import com.ordinacijadb.ordinacija.model.Termin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface TerminRepository extends JpaRepository<Termin, Long> {

    @Query("SELECT t FROM Termin t WHERE DATE(t.datumIVreme) = CURRENT_DATE")
    List<Termin> findDanasnjeTermine();

    @Query("SELECT t FROM Termin t WHERE t.datumIVreme BETWEEN :startDate AND :endDate")
    List<Termin> findTermineZaNarednihSedamDana(@Param("startDate") LocalDateTime startDate,
                                                @Param("endDate") LocalDateTime endDate);
}
