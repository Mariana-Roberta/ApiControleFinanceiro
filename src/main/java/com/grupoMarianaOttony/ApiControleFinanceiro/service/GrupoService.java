package com.grupoMarianaOttony.ApiControleFinanceiro.service;

import com.grupoMarianaOttony.ApiControleFinanceiro.model.Grupo;
import com.grupoMarianaOttony.ApiControleFinanceiro.repository.GrupoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GrupoService {

    @Autowired
    private GrupoRepository grupoRepository;

    public List<Grupo> findAll() {
        return this.grupoRepository.findAll();
    }

    public Grupo findById(Integer id) {
        return this.grupoRepository.findById(id).orElseThrow();
    }

    public Grupo save(Grupo grupo) {
        return this.grupoRepository.save(grupo);
    }

    public void delete(Grupo grupo) {
        this.grupoRepository.delete(grupo);
    }
}
