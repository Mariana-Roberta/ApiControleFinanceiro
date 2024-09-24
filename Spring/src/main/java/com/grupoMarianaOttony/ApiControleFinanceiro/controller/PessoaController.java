// Mariana

package com.api.ApiControleFinanceiro.controller;

import com.api.ApiControleFinanceiro.dto.PessoaDTO;
import com.api.ApiControleFinanceiro.mappers.PessoaMapper;
import com.api.ApiControleFinanceiro.model.Pessoa;
import com.api.ApiControleFinanceiro.service.PessoaService;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/pessoa")
@CrossOrigin(origins = "http://localhost:4200") // Permitir apenas o frontend local
public class PessoaController {

    @Autowired
    private PessoaService pessoaService;

    @PostMapping
    public Pessoa save(@RequestBody PessoaDTO pessoaDto) {
        Pessoa pessoa = PessoaMapper.toEntity(pessoaDto);
        return this.pessoaService.save(pessoa);
    }

    @GetMapping("/{id}")
    public Pessoa obterPessoa(@PathVariable Integer id) {
        // Busca a pessoa pelo ID no serviço
        Pessoa pessoa = pessoaService.findById(id);

        return pessoa;
    }

    @PutMapping("/{id}")
    public Pessoa update(@PathVariable Integer id, @RequestBody PessoaDTO pessoaDto) {
        Pessoa pessoa = pessoaService.findById(id);

        if (pessoa != null) {
            pessoa.setNome(pessoaDto.getNome());
            pessoa.setCpf(pessoaDto.getCpf());
            pessoa.setEmail(pessoaDto.getEmail());
            pessoa.setTelefone(pessoaDto.getTelefone());
        }
        return this.pessoaService.save(pessoa);
    }

    @DeleteMapping("/{id}")
    public void deletarPessoa(@PathVariable Integer id) {
        // Verifica se a pessoa existe
        Pessoa pessoaExistente = pessoaService.findById(id);

        pessoaService.deleteById(id);
    }

    @GetMapping
    public List<Pessoa> findAll() {
        return this.pessoaService.findAll();
    }
}

