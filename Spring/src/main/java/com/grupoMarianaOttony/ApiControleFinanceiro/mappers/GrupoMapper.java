// Mariana

package com.grupoMarianaOttony.ApiControleFinanceiro.mappers;

import com.grupoMarianaOttony.ApiControleFinanceiro.dto.GrupoDTO;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Grupo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Lancamento;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Meta;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Pessoa;

import java.util.List;

public class GrupoMapper {

    // Converte de Grupo para GrupoDTO
    public static GrupoDTO toDTO(Grupo grupo) {
        // Certifique-se de que a entidade Grupo possui uma pessoa
        return new GrupoDTO(grupo.getId(), grupo.getNome(), grupo.getDescricao(), grupo.getSaldo(), grupo.getPessoa() != null ? grupo.getPessoa().getId() : null, grupo.getLancamentos(), grupo.getMetas());
    }

    // Converte de GrupoDTO para Grupo
    public static Grupo toEntity(GrupoDTO grupoDTO, Pessoa pessoa, List<Lancamento> lancamentos, List<Meta> metas) {
        // Ao converter o DTO para entidade, passe a pessoa correspondente
        return new Grupo(grupoDTO.getId(), grupoDTO.getNome(), grupoDTO.getDescricao(), grupoDTO.getSaldo(), pessoa, lancamentos, metas);
    }
}


