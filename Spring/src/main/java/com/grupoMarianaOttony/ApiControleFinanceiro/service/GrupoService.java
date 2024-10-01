// Mariana

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

    public List<Grupo> findAll() { return grupoRepository.findAll(); }

    public Grupo findById(Integer id) { return grupoRepository.findById(id).orElseThrow(); }

    public Grupo save(Grupo grupo) { return grupoRepository.save(grupo); }

    public Grupo update(Grupo grupo) { return grupoRepository.save(grupo); }

    public void deleteById(Integer id) { grupoRepository.deleteById(id); }
}
