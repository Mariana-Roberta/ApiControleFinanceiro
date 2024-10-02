package com.grupoMarianaOttony.ApiControleFinanceiro.repository;

import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Categoria;
import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Tipo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Lancamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


import java.time.LocalDate;

@Repository
public interface LancamentoRepository extends JpaRepository<Lancamento, Integer> {
    List<Lancamento> findByNomeContainingOrTipoOrDataOrCategoria(String nome, Tipo tipo, LocalDate data, Categoria categoria);
    List<Lancamento> findAllByGrupoId(Integer id);
}
