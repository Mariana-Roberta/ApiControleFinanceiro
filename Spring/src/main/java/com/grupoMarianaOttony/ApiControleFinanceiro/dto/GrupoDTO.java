// Mariana

package com.api.ApiControleFinanceiro.dto;

import com.api.ApiControleFinanceiro.model.Lancamento;
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

    private Integer pessoaId;

    private List<Lancamento> lancamentos;

    // Construtor vazio
    public GrupoDTO() {}

    // Construtor completo


    public GrupoDTO(Integer id, String nome, String descricao, Integer pessoaId, List<Lancamento> lancamentos) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.pessoaId = pessoaId;
        this.lancamentos = lancamentos;
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

    @Override
    public String toString() {
        return "GrupoDTO{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", descricao='" + descricao + '\'' +
                ", pessoaId=" + pessoaId +
                ", lancamentos=" + lancamentos +
                '}';
    }
}

