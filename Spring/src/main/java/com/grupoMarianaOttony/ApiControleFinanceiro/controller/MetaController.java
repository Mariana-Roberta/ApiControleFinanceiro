package com.grupoMarianaOttony.ApiControleFinanceiro.controller;

import com.grupoMarianaOttony.ApiControleFinanceiro.dto.MetaDTO;
import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Tipo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Meta;
import com.grupoMarianaOttony.ApiControleFinanceiro.service.MetaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class MetaController {
    @Autowired
    private MetaService metaService;

    @GetMapping
    public List<Meta> findAll() {
        return this.metaService.findAll();
    }

    @GetMapping(value = "/{id}")
    public Meta findById(@PathVariable Integer id) {
        return this.metaService.findById(id);
    }

    @PostMapping
    public Meta save(@RequestBody MetaDTO metaDTO) {
        Tipo tipo = metaDTO.getTipo();
        double valor = metaDTO.getValor();

        Meta meta = new Meta();
        meta.setId(1);
        meta.setTipo(tipo);
        meta.setValor(valor);

        return this.metaService.save(meta);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(Integer id){
        this.metaService.delete(id);
    }
}
