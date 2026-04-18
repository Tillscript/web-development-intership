package com.internship.curriculos.repository;

import com.internship.curriculos.model.Curriculo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CurriculoRepository extends JpaRepository<Curriculo, Long> {}
