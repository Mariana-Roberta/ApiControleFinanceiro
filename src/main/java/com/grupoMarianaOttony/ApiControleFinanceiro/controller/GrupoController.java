package com.grupoMarianaOttony.ApiControleFinanceiro.controller;

import com.grupoMarianaOttony.ApiControleFinanceiro.dto.GrupoDTO;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Grupo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Pessoa;
import com.grupoMarianaOttony.ApiControleFinanceiro.service.GrupoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/grupo")
public class GrupoController {

    @Autowired
    private GrupoService grupoService;

    @PostMapping("/save")
    public ResponseEntity<Grupo> save(@RequestBody GrupoDTO grupoDTO) {
        System.out.println("Received DTO: " + grupoDTO);

        String nome = grupoDTO.getNome();
        String descricao = grupoDTO.getDescricao();
        Pessoa pessoa = grupoDTO.getPessoa();

        Grupo grupo = new Grupo();
        grupo.setId(1);
        grupo.setNome(nome);
        grupo.setDescricao(descricao);
        grupo.setPessoa(pessoa);

        grupo = this.grupoService.save(grupo);

        return ResponseEntity.ok(grupo);
    }

    @GetMapping("/listagem")
    public ResponseEntity<List<Grupo>> getListaGrupos() {
        List<Grupo> listaGrupos = grupoService.findAll();
        return ResponseEntity.ok(listaGrupos);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<Grupo> getPessoaById(@PathVariable Integer id) {
        Grupo grupo = grupoService.findById(id);
        if (grupo != null) {
            return ResponseEntity.ok(grupo);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
