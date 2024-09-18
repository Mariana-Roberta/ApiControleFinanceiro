package com.grupoMarianaOttony.ApiControleFinanceiro.controller;

import com.grupoMarianaOttony.ApiControleFinanceiro.dto.PessoaDTO;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Grupo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Pessoa;
import com.grupoMarianaOttony.ApiControleFinanceiro.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/pessoa")
public class PessoaController {

    @Autowired
    private PessoaService pessoaService;

    @GetMapping
    public List<Pessoa> findAll() {
        return this.pessoaService.findAll();
    }

    @GetMapping(value = "/{id}")
    public Pessoa findById(@PathVariable Integer id) {
        return this.pessoaService.findById(id);
    }

    @PostMapping
    public Pessoa save(@RequestBody PessoaDTO pessoaDTO) {
        String nome = pessoaDTO.getNome();
        String cpf = pessoaDTO.getCpf();
        String email = pessoaDTO.getEmail();
        String telefone = pessoaDTO.getTelefone();
        List<Grupo> grupos = pessoaDTO.getGrupos();

        Pessoa pessoa = new Pessoa();
        pessoa.setId(1);
        pessoa.setNome(nome);
        pessoa.setCpf(cpf);
        pessoa.setEmail(email);
        pessoa.setTelefone(telefone);
        pessoa.setGrupos(grupos);

        return this.pessoaService.save(pessoa);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(Integer id){
        this.pessoaService.deleteById(id);
    }
}
