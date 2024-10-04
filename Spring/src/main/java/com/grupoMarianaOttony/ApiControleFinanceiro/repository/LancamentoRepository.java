package com.grupoMarianaOttony.ApiControleFinanceiro.repository;

import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Categoria;
import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Tipo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Grupo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Lancamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


import java.util.Calendar;

@Repository
public interface LancamentoRepository extends JpaRepository<Lancamento, Integer> {
    List<Lancamento> findByNameContainingOrType(String nome, Tipo tipo, Calendar data, Categoria categoria);

    // Busca lançamentos por mês e ano
    //List<Lancamento> findByMesAndAno(int mes, int ano);

    // Busca lançamentos por grupo
    List<Lancamento> findByGrupo(Grupo grupo);

    // Busca lançamentos por categoria
    List<Lancamento> findByCategoria(Categoria categoria);
}
