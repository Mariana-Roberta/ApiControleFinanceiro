package com.grupoMarianaOttony.ApiControleFinanceiro.model;

import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Categoria;
import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Tipo;
import jakarta.persistence.*;

import java.util.Calendar;
import java.util.Objects;

@Entity
public class Lancamento {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column
    private String nome;

    @Column
    private String descricao;

    @Column
    @Temporal(TemporalType.DATE)
    private Calendar data;

    @Column
    @Enumerated(EnumType.STRING)
    private Tipo tipo;

    @Column
    private double valor;

    @Column
    @Enumerated(EnumType.STRING)
    private Categoria categoria;

    public Lancamento(Integer id, String nome, String descricao, Calendar data, Tipo tipo, double valor, Categoria categoria) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.tipo = tipo;
        this.valor = valor;
        this.categoria = categoria;
    }

    public Lancamento() {
    }

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

    public boolean equals(Object object) {
        if (this == object) return true;
        if (object == null || getClass() != object.getClass()) return false;
        if (!super.equals(object)) return false;
        Lancamento that = (Lancamento) object;
        return Double.compare(valor, that.valor) == 0 && Objects.equals(id, that.id) && Objects.equals(nome, that.nome) && Objects.equals(descricao, that.descricao) && Objects.equals(data, that.data) && tipo == that.tipo && categoria == that.categoria;
    }

    public int hashCode() {
        return Objects.hash(super.hashCode(), id, nome, descricao, data, tipo, valor, categoria);
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Lancamento{" +
                "id=" + id +
                ", nome=" + nome +
                ", descricao=" + descricao +
                ", data=" + data +
                ", tipo=" + tipo +
                ", valor=" + valor +
                ", categoria=" + categoria +
                '}';
    }
}
