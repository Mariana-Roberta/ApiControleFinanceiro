// Mariana

package com.api.ApiControleFinanceiro.mappers;

import com.api.ApiControleFinanceiro.dto.PessoaDTO;
import com.api.ApiControleFinanceiro.model.Pessoa;

public class PessoaMapper {

    // Converte de Pessoa para PessoaDTO
    public static PessoaDTO toDTO(Pessoa pessoa) {
        return new PessoaDTO(pessoa.getId(), pessoa.getNome(), pessoa.getCpf(), pessoa.getEmail(), pessoa.getTelefone());
    }

    // Converte de PessoaDTO para Pessoa
    public static Pessoa toEntity(PessoaDTO pessoaDTO) {
        return new Pessoa(pessoaDTO.getId(), pessoaDTO.getNome(), pessoaDTO.getCpf(), pessoaDTO.getEmail(), pessoaDTO.getTelefone());
    }
}

