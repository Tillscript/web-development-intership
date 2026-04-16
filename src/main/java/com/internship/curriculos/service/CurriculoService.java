package com.internship.curriculos.service;

import com.internship.curriculos.model.Curriculo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class CurriculoService {

    private final List<Curriculo> storage = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong(1);

    public Curriculo save(Curriculo curriculo) {
        curriculo.setId(counter.getAndIncrement());
        storage.add(curriculo);
        return curriculo;
    }

    public List<Curriculo> findAll() {
        return new ArrayList<>(storage);
    }

    public List<Curriculo> findByFilters(String nome, String area, String nivel) {
        return storage.stream()
                .filter(c -> nome  == null || nome.isBlank()  || c.getNomeCompleto().toLowerCase().contains(nome.toLowerCase()))
                .filter(c -> area  == null || area.isBlank()  || c.getArea().equalsIgnoreCase(area))
                .filter(c -> nivel == null || nivel.isBlank() || c.getNivel().equalsIgnoreCase(nivel))
                .toList();
    }
}
