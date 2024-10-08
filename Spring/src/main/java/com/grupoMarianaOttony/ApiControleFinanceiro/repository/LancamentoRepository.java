package com.grupoMarianaOttony.ApiControleFinanceiro.repository;

import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Categoria;
import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Tipo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Grupo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Lancamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


import java.time.LocalDate;

@Repository
public interface LancamentoRepository extends JpaRepository<Lancamento, Integer> {
    List<Lancamento> findByNomeContainingOrTipoOrDataOrCategoria(String nome, Tipo tipo, LocalDate data, Categoria categoria);
    List<Lancamento> findAllByGrupoId(Integer id);

    @Query("SELECT COALESCE(SUM(CASE WHEN l.tipo = 'RECEITA' THEN l.valor ELSE 0 END), 0) - "
         + "COALESCE(SUM(CASE WHEN l.tipo = 'DESPESA' THEN l.valor ELSE 0 END), 0) "
         + "FROM Lancamento l WHERE l.grupo.id = :grupoId")
    Double calcularSaldoPorGrupo(@Param("grupoId") Integer grupoId);

    // Busca lançamentos por mês e ano
    //List<Lancamento> findByMesAndAno(int mes, int ano);

    // Busca lançamentos por grupo
    List<Lancamento> findByGrupo(Grupo grupo);

    // Busca lançamentos por categoria
    List<Lancamento> findByCategoria(Categoria categoria);
}
