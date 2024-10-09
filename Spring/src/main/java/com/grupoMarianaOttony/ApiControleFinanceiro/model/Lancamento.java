package com.grupoMarianaOttony.ApiControleFinanceiro.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Categoria;
import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Tipo;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Objects;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "LANCAMENTO")
public class Lancamento {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id; // ID do lançamento

    @Column(name = "NOME", nullable = false)
    private String nome; // Nome do lançamento

    @Column(name = "DESCRICAO")
    private String descricao; // Descrição do lançamento

    @Column(name = "DATA", nullable = false)
    @DateTimeFormat( pattern = "dd/MM/yyyy")
    private LocalDate data; // Data do lançamento

    @Column(name = "TIPO", nullable = false)
    @Enumerated(EnumType.STRING)
    private Tipo tipo; // Tipo (recieta/despesa)

    @Column(name = "VALOR", nullable = false)
    private double valor; // Valor do lançamento

    @Column(name = "CATEGORIA")
    @Enumerated(EnumType.STRING)
    private Categoria categoria; // Categoria do lançamento

    @ManyToOne
    @JoinColumn(name = "grupo_id", nullable = false)
    @JsonBackReference
    private Grupo grupo;

    public Lancamento() {
    }

    public Lancamento(Integer id, String nome, String descricao, LocalDate data, Tipo tipo, double valor, Categoria categoria, Grupo grupo) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.tipo = tipo;
        this.valor = valor;
        this.categoria = categoria;
        this.grupo = grupo;
    }

    // Getters e Setters
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

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
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

    public Grupo getGrupo() {
        return grupo;
    }

    public void setGrupo(Grupo grupo) {
        this.grupo = grupo;
    }

    @Override
    public String toString() {
        return "Lancamento{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", descricao='" + descricao + '\'' +
                ", data=" + data +
                ", tipo=" + tipo +
                ", valor=" + valor +
                ", categoria=" + categoria +
                ", grupo=" + grupo +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Lancamento that = (Lancamento) o;
        return Objects.equals(id, that.id) && Objects.equals(nome, that.nome) && Objects.equals(descricao, that.descricao) && Objects.equals(data, that.data) && tipo == that.tipo && Objects.equals(valor, that.valor) && categoria == that.categoria && Objects.equals(grupo, that.grupo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nome, descricao, data, tipo, valor, categoria, grupo);
    }
}
