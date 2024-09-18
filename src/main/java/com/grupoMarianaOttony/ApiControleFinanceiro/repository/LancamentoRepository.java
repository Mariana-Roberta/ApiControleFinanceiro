package com.grupoMarianaOttony.ApiControleFinanceiro.repository;

import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Categoria;
import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Tipo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Lancamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


import java.util.Calendar;

@Repository
public interface LancamentoRepository extends JpaRepository<Lancamento, Integer> {
    List<Lancamento> findByNameContainingOrType(String nome, Tipo tipo, Calendar data, Categoria categoria);
}
