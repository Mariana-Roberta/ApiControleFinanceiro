package com.grupoMarianaOttony.ApiControleFinanceiro.repository;

import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Categoria;
import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Tipo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Lancamento;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


import java.util.Calendar;

public interface LancamentoRepository extends JpaRepository<Lancamento, Integer> {
    List<Lancamento> findByNomeContainingOrTipo(String nome, Tipo tipo, Calendar data, Categoria categoria);
}
