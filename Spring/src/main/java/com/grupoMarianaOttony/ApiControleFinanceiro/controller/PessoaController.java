// Mariana

package com.grupoMarianaOttony.ApiControleFinanceiro.controller;

import com.grupoMarianaOttony.ApiControleFinanceiro.dto.PessoaDTO;
import com.grupoMarianaOttony.ApiControleFinanceiro.mappers.PessoaMapper;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Pessoa;
import com.grupoMarianaOttony.ApiControleFinanceiro.service.PessoaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pessoa")
@CrossOrigin(origins = "http://localhost:4200") // Permitir apenas o frontend local
public class PessoaController {

    @Autowired
    private PessoaService pessoaService;

    @GetMapping("/findAll")
    public List<Pessoa> findAll() {
        return this.pessoaService.findAll();
    }

    @GetMapping("/findById/{id}")
    public Pessoa obterPessoa(@PathVariable Integer id) {
        return this.pessoaService.findById(id);
    }

    @PostMapping("/save")
    public Pessoa save(@RequestBody PessoaDTO pessoaDto) {
        Pessoa pessoa = PessoaMapper.toEntity(pessoaDto);

        return this.pessoaService.save(pessoa); // verifica os dados no service
    }

    @PutMapping("/update/{id}")
    public Pessoa update(@PathVariable Integer id, @RequestBody PessoaDTO pessoaDto) {
        Pessoa pessoaExistente = pessoaService.findById(id);

        pessoaExistente.setNome(pessoaDto.getNome());
        pessoaExistente.setEmail(pessoaDto.getEmail());
        pessoaExistente.setTelefone(pessoaDto.getTelefone());

        return this.pessoaService.update(pessoaExistente); // verifica os dados no service
    }

    @DeleteMapping("/delete/{id}")
    public void deletarPessoa(@PathVariable Integer id) {
        this.pessoaService.deleteById(id);
    }


}

