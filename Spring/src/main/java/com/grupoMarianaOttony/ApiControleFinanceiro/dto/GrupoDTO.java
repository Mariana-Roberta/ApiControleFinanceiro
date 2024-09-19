package com.grupoMarianaOttony.ApiControleFinanceiro.dto;

import com.grupoMarianaOttony.ApiControleFinanceiro.model.Pessoa;

public class GrupoDTO {
    private Integer id;
    private String nome;
    private String descricao;
    private double saldo;
    private Pessoa pessoa;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Pessoa getPessoa() {
        return pessoa;
    }

    public void setPessoa(Pessoa pessoa) {
        this.pessoa = pessoa;
    }
}
