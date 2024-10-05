package com.grupoMarianaOttony.ApiControleFinanceiro.controller;

import com.grupoMarianaOttony.ApiControleFinanceiro.dto.MetaDTO;
import com.grupoMarianaOttony.ApiControleFinanceiro.mappers.MetaMapper;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Grupo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Meta;
import com.grupoMarianaOttony.ApiControleFinanceiro.service.GrupoService;
import com.grupoMarianaOttony.ApiControleFinanceiro.service.MetaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/meta")
@CrossOrigin(origins = "http://localhost:4200") // Permitir apenas o frontend local
public class MetaController {

    @Autowired
    private MetaService metaService;

    @Autowired
    private GrupoService grupoService;

    @GetMapping
    public List<Meta> findAll() {
        return this.metaService.findAll();
    }

    @GetMapping(value = "/{id}")
    public Meta findById(@PathVariable Integer id) {
        return this.metaService.findById(id);
    }

    @GetMapping(value = "/grupo/{id}")
    public List<Meta> findAllByGrupo(@PathVariable Integer id){
        return this.metaService.findAllByGrupoId(id);
    }

    @PostMapping("/save/{id}")
    public Meta save(@PathVariable Integer id, @RequestBody MetaDTO metaDTO) {
        
        Grupo grupo = grupoService.findById(id);
        Meta meta = MetaMapper.toEntity(metaDTO, grupo);

        /*Categoria categoria = metaDTO.getCategoria();
        double valor = metaDTO.getValor();
    
        Meta meta = new Meta();
        meta.setCategoria(categoria);
        meta.setValor(valor);
        meta.setGrupo(grupo);*/

        return this.metaService.save(meta);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(Integer id){
        this.metaService.delete(id);
    }
}
