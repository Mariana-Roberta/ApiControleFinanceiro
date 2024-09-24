// Mariana

package com.api.ApiControleFinanceiro.service;

import com.api.ApiControleFinanceiro.model.Pessoa;
import com.api.ApiControleFinanceiro.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public List<Pessoa> findAll() { return pessoaRepository.findAll(); }

    public Pessoa findById(int id) { return pessoaRepository.findById(id).orElseThrow(); }

    public Pessoa save(Pessoa pessoa) { return pessoaRepository.save(pessoa); }

    public Pessoa update (Pessoa pessoa) { return pessoaRepository.save(pessoa); }

    public void deleteById(int id) { pessoaRepository.deleteById(id); }
}
