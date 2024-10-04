package com.grupoMarianaOttony.ApiControleFinanceiro.dto;

import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Categoria;

import java.time.LocalDate;

public class RelatorioDTO {
    private LocalDate data;
    private String descricao;
    private Categoria categoria;
    private double valor;
    private String grupo; // Nome do grupo (opcional para relatórios por categoria)

    public RelatorioDTO(LocalDate data, String descricao, Categoria categoria, double valor, String grupo) {
        this.data = data;
        this.descricao = descricao;
        this.categoria = categoria;
        this.valor = valor;
        this.grupo = grupo;
    }

    // Getters e Setters

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public String getGrupo() {
        return grupo;
    }

    public void setGrupo(String grupo) {
        this.grupo = grupo;
    }
}
