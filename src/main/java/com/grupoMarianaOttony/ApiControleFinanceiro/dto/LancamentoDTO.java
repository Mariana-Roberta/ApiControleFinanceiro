package com.grupoMarianaOttony.ApiControleFinanceiro.dto;

import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Categoria;
import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Tipo;

import java.util.Calendar;

public class LancamentoDTO {
    Integer id;
    String nome;
    String descricao;
    Calendar data;
    Tipo tipo;
    double valor;
    Categoria categoria;

    public LancamentoDTO() {
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public String getNome(){
        return nome;
    }
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Calendar getData() {
        return data;
    }

    public void setData(Calendar data) {
        this.data = data;
    }

    public Tipo getTipo() {
        return tipo;
    }

    public void setTipo(Tipo tipo) {
        this.tipo = tipo;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}
