// Mariana

package com.grupoMarianaOttony.ApiControleFinanceiro.service;

import com.grupoMarianaOttony.ApiControleFinanceiro.exceptions.PessoaException;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Pessoa;
import com.grupoMarianaOttony.ApiControleFinanceiro.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.grupoMarianaOttony.ApiControleFinanceiro.validator.CpfValidator.isValidCpf;
import static com.grupoMarianaOttony.ApiControleFinanceiro.validator.EmailValidator.isEmailValid;
import static com.grupoMarianaOttony.ApiControleFinanceiro.validator.PhoneValidator.isValidTelefone;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public List<Pessoa> findAll() { return pessoaRepository.findAll(); }

    public Pessoa findById(int id) { return pessoaRepository.findById(id).orElseThrow(); }

    public Pessoa save(Pessoa pessoa) {
        // verifica todos os dados enviados pelo usuário
        pessoaExceptionHandler(pessoa);

        return pessoaRepository.save(pessoa);
    }

    public Pessoa update (Pessoa pessoa) {
        // verifica todos os dados enviados pelo usuário
        pessoaExceptionHandler(pessoa);

        return pessoaRepository.save(pessoa);
    }

    public void deleteById(int id) { pessoaRepository.deleteById(id); }

    // Exception Handler
    private void pessoaExceptionHandler(Pessoa pessoa) {

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
        } else if (!isValidTelefone(pessoa.getTelefone())) {
            throw new PessoaException("Telefone inválido. Digite um telefone válido.");
        }

    }
}
