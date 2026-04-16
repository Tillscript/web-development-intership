package com.internship.curriculos.controller;

import com.internship.curriculos.model.Curriculo;
import com.internship.curriculos.service.CurriculoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/curriculos")
public class CurriculoController {

    private final CurriculoService service;

    public CurriculoController(CurriculoService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Curriculo> create(@Valid @RequestBody Curriculo curriculo) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(curriculo));
    }

    @GetMapping
    public ResponseEntity<List<Curriculo>> list(
            @RequestParam(required = false) String nome,
            @RequestParam(required = false) String area,
            @RequestParam(required = false) String nivel) {
        return ResponseEntity.ok(service.findByFilters(nome, area, nivel));
    }
}
