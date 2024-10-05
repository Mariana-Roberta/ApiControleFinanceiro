package com.grupoMarianaOttony.ApiControleFinanceiro.dto;

import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Categoria;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Grupo;

public class MetaDTO {
    Integer id;
    double valor;
    Categoria categoria;
    Grupo grupo;

    public MetaDTO() {
    }


    public MetaDTO(Integer id, double valor, Categoria categoria, Grupo grupo) {
        this.id = id;
        this.valor = valor;
        this.categoria = categoria;
        this.grupo = grupo;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public void setGrupo(Grupo grupo){
        this.grupo = grupo;
    }

    public Grupo getGrupo(){
        return grupo;
    }


    public Categoria getCategoria() {
        return this.categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

}
