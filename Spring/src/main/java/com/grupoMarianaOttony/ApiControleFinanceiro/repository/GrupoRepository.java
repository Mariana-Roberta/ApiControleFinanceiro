package com.grupoMarianaOttony.ApiControleFinanceiro.repository;

import com.grupoMarianaOttony.ApiControleFinanceiro.model.Grupo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GrupoRepository extends JpaRepository<Grupo, Integer> {
    List<Grupo> findAllByPessoaId(Integer id);
}
