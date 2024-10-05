package com.grupoMarianaOttony.ApiControleFinanceiro.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Categoria;
import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Meta {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "CATEGORIA", nullable = false)
    @Enumerated(EnumType.STRING)
    private Categoria categoria;
    
    @Column(name = "VALOR", nullable = false)
    private double valor;

    @ManyToOne
    @JoinColumn(name = "grupo_id", nullable = false)
    @JsonBackReference
    private Grupo grupo;

    public Meta(Integer id, Categoria categoria, double valor, Grupo grupo) {
        this.id = id;
        this.categoria = categoria;
        this.valor = valor;
        this.grupo = grupo;
    }

    public Meta() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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
    
    public Grupo getGrupo() {
        return grupo;
    }

    public void setGrupo(Grupo grupo) {
        this.grupo = grupo;
    }

    @Override
    public String toString() {
        return "Meta{" +
                "id=" + id +
                ", categoria='" + categoria + '\'' +
                ", valor=" + valor +
                ", grupo=" + grupo +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Meta meta = (Meta) o;
        return Objects.equals(id, meta.id) && Objects.equals(categoria, meta.categoria) && Objects.equals(valor, meta.valor) && Objects.equals(grupo, meta.grupo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, categoria, valor, grupo);
    }
}
