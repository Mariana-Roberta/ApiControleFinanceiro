// Mariana

package com.grupoMarianaOttony.ApiControleFinanceiro.mappers;

import com.grupoMarianaOttony.ApiControleFinanceiro.dto.PessoaDTO;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Pessoa;

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

