package com.grupoMarianaOttony.ApiControleFinanceiro.controller;

import com.grupoMarianaOttony.ApiControleFinanceiro.dto.RelatorioDTO;
import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Categoria;
import com.grupoMarianaOttony.ApiControleFinanceiro.service.GrupoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/relatorio")
@CrossOrigin(origins = "http://localhost:4200")
public class RelatorioController {

    @Autowired
    private GrupoService grupoService;

    // Relatório Mensal
    /*
    @GetMapping("/mensal/{mes}/{ano}")
    public ResponseEntity<List<RelatorioDTO>> gerarRelatorioMensal(@PathVariable int mes, @PathVariable int ano) {
        List<RelatorioDTO> relatorioMensal = grupoService.gerarRelatorioMensal(mes, ano);
        return ResponseEntity.ok(relatorioMensal);
    }*/

    // Relatório por Grupo
    @GetMapping("/grupo/{grupoId}")
    public ResponseEntity<List<RelatorioDTO>> gerarRelatorioPorGrupo(@PathVariable Integer grupoId) {
        List<RelatorioDTO> relatorioPorGrupo = grupoService.gerarRelatorioPorGrupo(grupoId);
        return ResponseEntity.ok(relatorioPorGrupo);
    }

    // Relatório por Categoria
    @GetMapping("/categoria/{categoria}")
    public ResponseEntity<List<RelatorioDTO>> gerarRelatorioPorCategoria(@PathVariable String categoria) {
        try {
            // Tenta converter a string em um valor do enum Categoria
            Categoria categoriaEnum = Categoria.valueOf(categoria.toUpperCase());

            // Chama o serviço com o valor do enum
            List<RelatorioDTO> relatorioPorCategoria = grupoService.gerarRelatorioPorCategoria(categoriaEnum);
            return ResponseEntity.ok(relatorioPorCategoria);
        } catch (IllegalArgumentException e) {
            // Retorna uma lista vazia se a categoria não é válida
            return ResponseEntity.ok(Collections.emptyList());
        }
    }


}
