// Mariana

package com.grupoMarianaOttony.ApiControleFinanceiro.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "GRUPO")
public class Grupo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id; // id do grupo

    @NotBlank(message = "Nome do grupo não pode ser vazio")
    @Size(min = 3, max = 50, message = "Nome do grupo deve ter entre 3 e 50 caracteres")
    @Column(name = "NOME", nullable = false)
    private String nome; // nome do grupo

    @NotBlank(message = "Descrição do grupo não pode ser vazia")
    @Size(min = 10, max = 200, message = "Descrição do grupo deve ter entre 10 e 200 caracteres")
    @Column(name = "DESCRICAO", nullable = false)
    private String descricao; // descricao do grupo

    @NotBlank(message = "Saldo Inicial não pode estar vazio.")
    @Column(name = "SALDO", nullable = false)
    private double saldo;

    // Relacionamento com Pessoa
    @ManyToOne
    @JoinColumn(name = "pessoa_id", nullable = false) // Chave estrangeira para Pessoa
    @JsonBackReference
    private Pessoa pessoa; // Cada grupo pertence a uma pessoa

    @OneToMany(mappedBy = "grupo", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Lancamento> lancamentos;

    @OneToMany(mappedBy = "grupo", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Meta> metas;

    // Construtor vazio
    public Grupo() {}

    // Construtor completo
    public Grupo(Integer id, String nome, String descricao, double saldo,Pessoa pessoa, List<Lancamento> lancamentos, List<Meta> metas) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.saldo = saldo;
        this.pessoa = pessoa;
        this.lancamentos = lancamentos;
        this.metas = metas;
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

    public double getSaldo(){
        return saldo;
    }

    public void setSaldo(double saldo){
        this.saldo = saldo;
    }

    public Pessoa getPessoa() {
        return pessoa;
    }

    public void setPessoa(Pessoa pessoa) {
        this.pessoa = pessoa;
    }

    public List<Lancamento> getLancamentos() {
        return lancamentos;
    }

    public void setLancamentos(List<Lancamento> lancamentos) {
        this.lancamentos = lancamentos;
    }

    public List<Meta> getMetas() {
        return metas;
    }

    public void setMetas(List<Meta> metas) {
        this.metas = metas;
    }

    @Override
    public String toString() {
        return "Grupo{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", descricao='" + descricao + '\'' +
                ", saldo=" + saldo +
                ", pessoa=" + pessoa +
                ", lancamentos=" + lancamentos +
                ", metas=" + metas +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Grupo grupo = (Grupo) o;
        return Double.compare(saldo, grupo.saldo) == 0 && Objects.equals(id, grupo.id) && Objects.equals(nome, grupo.nome) && Objects.equals(descricao, grupo.descricao) && Objects.equals(pessoa, grupo.pessoa) && Objects.equals(lancamentos, grupo.lancamentos) && Objects.equals(metas, grupo.metas);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nome, descricao, saldo, pessoa, lancamentos, metas);
    }
}
