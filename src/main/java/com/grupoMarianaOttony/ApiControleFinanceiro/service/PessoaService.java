package com.grupoMarianaOttony.ApiControleFinanceiro.service;

import com.grupoMarianaOttony.ApiControleFinanceiro.model.Pessoa;
import com.grupoMarianaOttony.ApiControleFinanceiro.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public List<Pessoa> findAll() {
        return this.pessoaRepository.findAll();
    }

    public Pessoa findById(Integer id) {
        return this.pessoaRepository.findById(id).orElseThrow();
    }

    public Pessoa save(Pessoa pessoa) {
        return this.pessoaRepository.save(pessoa);
    }

    public void delete(Pessoa pessoa) {
        this.pessoaRepository.delete(pessoa);
    }

    public void deleteById(Integer id) {
        this.pessoaRepository.deleteById(id);
    }
}
