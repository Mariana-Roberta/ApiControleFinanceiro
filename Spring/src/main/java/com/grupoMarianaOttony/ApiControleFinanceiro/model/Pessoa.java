// Mariana

package com.grupoMarianaOttony.ApiControleFinanceiro.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;

import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "PESSOA")
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id; // id da pessoa

    @NotBlank(message = "Nome não pode ser vazio")
    @Size(min = 2, max = 100, message = "Nome deve ter entre 2 e 100 caracteres")
    @Column(name = "NOME", nullable = false)
    private String nome; // nome da pessoa

    @NotBlank(message = "CPF não pode ser vazio")
    @Pattern(regexp = "\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}", message = "CPF deve seguir o formato 000.000.000-00")
    @Column(name = "CPF", nullable = false, unique = true)
    private String cpf; // cpf da pessoa

    @NotBlank(message = "Email não pode ser vazio")
    @Email(message = "Email deve ser válido")
    @Column(name = "EMAIL", nullable = false, unique = true)
    private String email; // email da pessoa

    @NotBlank(message = "Telefone não pode ser vazio")
    @Pattern(regexp = "\\(\\d{2}\\) \\d{4,5}-\\d{4}", message = "Telefone deve seguir o formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX")
    @Column(name = "TELEFONE", nullable = false)
    private String telefone; // telefone da pessoa

    // Relacionamento com Grupo
    @OneToMany(mappedBy = "pessoa", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Grupo> grupos; // Uma pessoa pode ter vários grupos

    // Construtor vazio
    public Pessoa() {}

    // Construtor completo
    public Pessoa(Integer id, String nome, String cpf, String email, String telefone) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
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

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public List<Grupo> getGrupos() {
        return grupos;
    }

    public void setGrupos(List<Grupo> grupos) {
        this.grupos = grupos;
    }

    @Override
    public String toString() {
        return "Pessoa{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", cpf='" + cpf + '\'' +
                ", email='" + email + '\'' +
                ", telefone='" + telefone + '\'' +
                ", grupos=" + grupos +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pessoa pessoa = (Pessoa) o;
        return Objects.equals(id, pessoa.id) &&
                Objects.equals(nome, pessoa.nome) &&
                Objects.equals(cpf, pessoa.cpf) &&
                Objects.equals(email, pessoa.email) &&
                Objects.equals(telefone, pessoa.telefone) &&
                Objects.equals(grupos, pessoa.grupos);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nome, cpf, email, telefone, grupos);
    }
}
