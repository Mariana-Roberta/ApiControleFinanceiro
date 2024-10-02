// Mariana

package com.grupoMarianaOttony.ApiControleFinanceiro.controller;

import com.grupoMarianaOttony.ApiControleFinanceiro.dto.PessoaDTO;
import com.grupoMarianaOttony.ApiControleFinanceiro.exceptions.PessoaException;
import com.grupoMarianaOttony.ApiControleFinanceiro.mappers.PessoaMapper;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Pessoa;
import com.grupoMarianaOttony.ApiControleFinanceiro.service.PessoaService;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static com.grupoMarianaOttony.ApiControleFinanceiro.validator.CpfValidator.isValidCpf;
import static com.grupoMarianaOttony.ApiControleFinanceiro.validator.EmailValidator.isEmailValid;
import static com.grupoMarianaOttony.ApiControleFinanceiro.validator.PhoneValidator.isValidTelefone;

@RestController
@RequestMapping("/pessoa")
@CrossOrigin(origins = "http://localhost:4200") // Permitir apenas o frontend local
public class PessoaController {

    @Autowired
    private PessoaService pessoaService;

    @PostMapping
    public Pessoa save(@RequestBody PessoaDTO pessoaDto) {
        Pessoa pessoa = PessoaMapper.toEntity(pessoaDto);

        if (pessoa.getNome() == null || pessoa.getNome().isEmpty()) {
            throw new PessoaException("O nome deve ser informado.");
        } else if (pessoa.getNome().length() < 3) {
            throw new PessoaException("O nome deve ser conter no mínimo 2 caracteres.");
        }

        if (pessoa.getCpf() == null || pessoa.getCpf().isEmpty()) {
            throw new PessoaException("O cpf deve ser informado.");
        } else if (pessoa.getCpf().length() < 14) {
            throw new PessoaException("O cpf deve ser conter no mínimo 11 dígitos.");
        } else if (!isValidCpf(pessoa.getCpf())) {
            throw new PessoaException("Cpf inválido. Digite um cpf válido.");
        }

        if (pessoa.getEmail() == null || pessoa.getEmail().isEmpty()) {
            throw new PessoaException("O email deve ser informado.");
        } else if (!isEmailValid(pessoa.getEmail())) {
            throw new PessoaException("Email inválido. Digite um email válido.");
        }

        if (pessoa.getTelefone() == null || pessoa.getTelefone().isEmpty()) {
            throw new PessoaException("O telefone deve ser informado.");
        } else if (!isValidTelefone(pessoa.getEmail())) {
            throw new PessoaException("Telefone inválido. Digite um telefone válido.");
        }

        return this.pessoaService.save(pessoa);
    }

    @GetMapping("/{id}")
    public Pessoa obterPessoa(@PathVariable Integer id) {
        // Busca a pessoa pelo ID no serviço
        Pessoa pessoa = pessoaService.findById(id);

        return pessoa;
    }

    @PutMapping("/{id}")
    public Pessoa update(@RequestBody PessoaDTO pessoaDto) {
        Pessoa pessoa = PessoaMapper.toEntity(pessoaDto);
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