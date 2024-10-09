package com.grupoMarianaOttony.ApiControleFinanceiro.service;

import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Categoria;
import com.grupoMarianaOttony.ApiControleFinanceiro.exceptions.LancamentoException;
import com.grupoMarianaOttony.ApiControleFinanceiro.exceptions.MetaException;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Lancamento;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Meta;
import com.grupoMarianaOttony.ApiControleFinanceiro.repository.MetaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MetaService {
    @Autowired
    private MetaRepository metaRepository;

    public List<Meta> findAll() {
        return metaRepository.findAll();
    }

    public List<Meta> findAllByGrupoId(Integer id) {
        return metaRepository.findAllByGrupoId(id);
    }

    public Meta findById(Integer id) {
        return this.metaRepository.findById(id).orElseThrow(() -> new RuntimeException("Meta não encontrada"));
    }

    public Meta save(Meta meta) {
        metaExceptionHandler(meta);
        return metaRepository.save(meta);
    }

    public void delete(Integer id){
        this.metaRepository.deleteById(id);
    }

    public Meta findByCategoria(Categoria categoria) {
        return metaRepository.findByCategoria(categoria).stream().findFirst().orElse(null);
    }



    private void metaExceptionHandler(Meta meta){
        Meta existingMeta = this.findByType(meta.getCategoria());
        if (existingMeta != null && !existingMeta.getId().equals(meta.getId())) {
        throw new MetaException("Já existe uma meta cadastrada com a Categoria " + meta.getCategoria());
        }    
    }
}
