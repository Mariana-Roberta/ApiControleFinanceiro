package com.grupoMarianaOttony.ApiControleFinanceiro.model;

import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Tipo;
import jakarta.persistence.*;
import org.hibernate.dialect.TiDBDialect;

import java.util.Objects;

@Entity
public class Meta {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column
    private Tipo tipo;
    @Column
    @Enumerated(EnumType.STRING)
    private double valor;

    public Meta(Integer id, Tipo tipo, double valor) {
        this.id = id;
        this.tipo = tipo;
        this.valor = valor;
    }

    public Meta() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Meta meta = (Meta) o;
        return Double.compare(valor, meta.valor) == 0 && Objects.equals(id, meta.id) && tipo == meta.tipo;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, tipo, valor);
    }

    @Override
    public String toString() {
        return "Meta{" +
                "id=" + id +
                ", tipo=" + tipo +
                ", valor=" + valor +
                '}';
    }
}
