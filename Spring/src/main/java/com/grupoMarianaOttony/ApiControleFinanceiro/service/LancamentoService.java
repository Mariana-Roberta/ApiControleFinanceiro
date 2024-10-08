package com.grupoMarianaOttony.ApiControleFinanceiro.service;

import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Categoria;
import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Tipo;
import com.grupoMarianaOttony.ApiControleFinanceiro.exceptions.LancamentoException;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Grupo;
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

    public Lancamento update(Lancamento lancamento){
        lancamentoExceptionHandler(lancamento);
        if(lancamento.getTipo() != lancamento.getTipo() || lancamento.getValor() != lancamento.getValor()){
            Grupo grupo = lancamento.getGrupo();
            lancamentoRepository.save(lancamento);
            grupo.setSaldo(lancamentoRepository.calcularSaldoPorGrupo(grupo.getId()));
            lancamento.setGrupo(grupo);
            //grupoRepository.save(grupo);
        }
        return lancamentoRepository.save(lancamento);
    }

    public Lancamento save(Lancamento lancamento) {
        lancamentoExceptionHandler(lancamento);
        Grupo grupo = lancamento.getGrupo();
        double saldo = grupo.getSaldo();
        //Modifica o saldo baseado no tipo de lancamento
        if(lancamento.getTipo() == Tipo.DESPESA)saldo = saldo - lancamento.getValor();
        else saldo = saldo + lancamento.getValor();
        grupo.setSaldo(saldo);
        lancamento.setGrupo(grupo);
        grupoRepository.save(lancamento.getGrupo());
        return lancamentoRepository.save(lancamento);
    }

    public void delete(Integer id){
        this.lancamentoRepository.deleteById(id);
    }

    public Lancamento findByNameContainingOrType(String nome, Tipo tipo, LocalDate data, Categoria categoria) {
        return lancamentoRepository.findByNomeContainingOrTipoOrDataOrCategoria(nome, tipo, data, categoria).stream().findFirst().orElse(null);
    }

    private void lancamentoExceptionHandler(Lancamento lancamento){
        if (lancamento.getNome() == null || lancamento.getNome().isEmpty()) {
            throw new LancamentoException("O nome deve ser informado.");
        } else if (lancamento.getNome().length() < 3) {
            throw new LancamentoException("O nome deve ser conter no mínimo 2 caracteres.");
        }

        if(lancamento.getValor() <=0) throw new LancamentoException("O valor deve ser maior que 0, não podendo ser negativo.");

        if(lancamento.getTipo() == null) throw new LancamentoException("Escolha o tipo de lancamento. (Receita ou Despesa)");
    }
}
