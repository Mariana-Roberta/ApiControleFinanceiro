package com.grupoMarianaOttony.ApiControleFinanceiro.mappers;

import com.grupoMarianaOttony.ApiControleFinanceiro.dto.MetaDTO;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Grupo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Meta;


public class MetaMapper {
    // Converte de Grupo para GrupoDTO
    public static MetaDTO toDTO(Meta meta) {
        // Certifique-se de que a entidade Grupo possui uma pessoa
        return new MetaDTO(meta.getId(), meta.getValor(), meta.getCategoria(),  meta.getGrupo());
    }

    // Converte de GrupoDTO para Grupo
    public static Meta toEntity(MetaDTO metaDTO, Grupo grupo) {
        // Ao converter o DTO para entidade, passe a pessoa correspondente
        return new Meta(metaDTO.getId(), metaDTO.getCategoria(), metaDTO.getValor(), grupo);
    }
}
