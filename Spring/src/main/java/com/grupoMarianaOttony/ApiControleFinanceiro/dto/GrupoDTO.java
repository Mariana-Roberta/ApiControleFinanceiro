// Mariana

package com.grupoMarianaOttony.ApiControleFinanceiro.dto;

import com.grupoMarianaOttony.ApiControleFinanceiro.model.Lancamento;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Meta;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.List;

public class GrupoDTO {

    private Integer id;

    @NotBlank(message = "Nome do grupo não pode ser vazio")
    @Size(min = 3, max = 50, message = "Nome do grupo deve ter entre 3 e 50 caracteres")
    private String nome;

    @NotBlank(message = "Descrição do grupo não pode ser vazia")
    @Size(min = 10, max = 200, message = "Descrição do grupo deve ter entre 10 e 200 caracteres")
    private String descricao;

    private Float saldo;

    private Integer pessoaId;

    private List<Lancamento> lancamentos;
    private List<Meta> metas;

    // Construtor vazio
    public GrupoDTO() {}

    // Construtor completo


    public GrupoDTO(Integer id, String nome, String descricao, Float saldo, Integer pessoaId, List<Lancamento> lancamentos, List<Meta> metas) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.saldo = saldo;
        this.pessoaId = pessoaId;
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

    public Integer getPessoaId() {
        return pessoaId;
    }

    public void setPessoaId(Integer pessoaId) {
        this.pessoaId = pessoaId;
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

    public Float getSaldo() {
        return saldo;
    }

    public void setSaldo(Float saldo) {
        this.saldo = saldo;
    }

    @Override
    public String toString() {
        return "GrupoDTO{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", descricao='" + descricao + '\'' +
                ", saldo='" + saldo + '\'' +
                ", pessoaId=" + pessoaId +
                ", lancamentos=" + lancamentos +
                ", metas=" + metas +
                '}';
    }
}

