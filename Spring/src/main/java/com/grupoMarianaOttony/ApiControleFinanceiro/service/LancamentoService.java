package com.grupoMarianaOttony.ApiControleFinanceiro.service;

import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Categoria;
import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Tipo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Lancamento;
import com.grupoMarianaOttony.ApiControleFinanceiro.repository.GrupoRepository;
import com.grupoMarianaOttony.ApiControleFinanceiro.repository.LancamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class LancamentoService {
    @Autowired
    private LancamentoRepository lancamentoRepository;
    @Autowired
    private GrupoRepository grupoRepository;

    public List<Lancamento> findAll() {
        return lancamentoRepository.findAll();
    }

    public Lancamento findById(Integer id) {
        return this.lancamentoRepository.findById(id).orElseThrow(() -> new RuntimeException("Lancamento não encontrado"));
    }

    public List<Lancamento> findAllByGrupoId(Integer id){
        return lancamentoRepository.findAllByGrupoId(id);
    }

    public Lancamento save(Lancamento lancamento) {
        double saldo = lancamento.getGrupo().getSaldo();
        //Modifica o saldo baseado no tipo de lancamento
        if(lancamento.getTipo() == Tipo.DESPESA)saldo = saldo - lancamento.getValor();
        else saldo = saldo + lancamento.getValor();
        grupoRepository.save(lancamento.getGrupo());
        return lancamentoRepository.save(lancamento);
    }

    public void delete(Integer id){
        this.lancamentoRepository.deleteById(id);
    }

    public Lancamento findByNameContainingOrType(String nome, Tipo tipo, LocalDate data, Categoria categoria) {
        return lancamentoRepository.findByNomeContainingOrTipoOrDataOrCategoria(nome, tipo, data, categoria).stream().findFirst().orElse(null);
    }
}
