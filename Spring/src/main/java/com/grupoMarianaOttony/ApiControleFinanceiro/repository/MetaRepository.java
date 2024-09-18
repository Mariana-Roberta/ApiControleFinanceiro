package com.grupoMarianaOttony.ApiControleFinanceiro.repository;

import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Tipo;
import org.springframework.data.jpa.repository.JpaRepository;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Meta;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MetaRepository extends JpaRepository<Meta, Integer> {
    List<Meta> findByType(Tipo tipo);

}
