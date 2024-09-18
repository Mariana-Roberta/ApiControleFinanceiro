package com.grupoMarianaOttony.ApiControleFinanceiro.service;

import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Categoria;
import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Tipo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Lancamento;
import com.grupoMarianaOttony.ApiControleFinanceiro.repository.LancamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;

@Service
public class LancamentoService {
    @Autowired
    private LancamentoRepository lancamentoRepository;

    public List<Lancamento> findAll() {
        return lancamentoRepository.findAll();
    }

    public Lancamento findById(Integer id) {
        return this.lancamentoRepository.findById(id).orElseThrow(() -> new RuntimeException("Lancamento não encontrado"));
    }

    public Lancamento save(Lancamento lancamento) {
        return lancamentoRepository.save(lancamento);
    }

    public void delete(Integer id){
        this.lancamentoRepository.deleteById(id);
    }

    public Lancamento findByNameContainingOrType(String nome, Tipo tipo, Calendar data, Categoria categoria) {
        return lancamentoRepository.findByNameContainingOrType(nome, tipo, data, categoria).stream().findFirst().orElse(null);
    }
}
