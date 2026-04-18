package com.internship.curriculos.service;

import com.internship.curriculos.model.Curriculo;
import com.internship.curriculos.repository.CurriculoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CurriculoService {

    private final CurriculoRepository repository;

    public CurriculoService(CurriculoRepository repository) {
        this.repository = repository;
    }

    public Curriculo save(Curriculo curriculo) {
        return repository.save(curriculo);
    }

    public List<Curriculo> findByFilters(String nome, String area, String nivel) {
        return repository.findAll().stream()
                .filter(c -> nome  == null || nome.isBlank()  || c.getNomeCompleto().toLowerCase().contains(nome.toLowerCase()))
                .filter(c -> area  == null || area.isBlank()  || c.getArea().equalsIgnoreCase(area))
                .filter(c -> nivel == null || nivel.isBlank() || c.getNivel().equalsIgnoreCase(nivel))
                .toList();
    }
}
