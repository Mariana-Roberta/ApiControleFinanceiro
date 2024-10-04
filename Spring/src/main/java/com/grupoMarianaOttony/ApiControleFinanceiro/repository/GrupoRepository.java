package com.grupoMarianaOttony.ApiControleFinanceiro.repository;

import com.grupoMarianaOttony.ApiControleFinanceiro.model.Grupo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GrupoRepository extends JpaRepository<Grupo, Integer> {
    List<Grupo> findAllByPessoa(Pessoa pessoa);
}
