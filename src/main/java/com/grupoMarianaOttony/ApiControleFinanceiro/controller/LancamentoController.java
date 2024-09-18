package com.grupoMarianaOttony.ApiControleFinanceiro.controller;

import com.grupoMarianaOttony.ApiControleFinanceiro.dto.LancamentoDTO;
import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Categoria;
import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Tipo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Lancamento;
import com.grupoMarianaOttony.ApiControleFinanceiro.service.LancamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.List;

@RestController
@RequestMapping("/lancamento")
@CrossOrigin("*")
public class LancamentoController {

    @Autowired
    private LancamentoService lancamentoService;

    @GetMapping
    public List<Lancamento> findAll() {
        return this.lancamentoService.findAll();
    }

    @GetMapping(value = "/{id}")
    public Lancamento findById(@PathVariable Integer id) {
        return this.lancamentoService.findById(id);
    }

    @PostMapping
    public Lancamento save(@RequestBody LancamentoDTO lancamentoDTO) {
        String nome = lancamentoDTO.getNome();
        String descricao = lancamentoDTO.getDescricao();
        Calendar data = lancamentoDTO.getData();
        Tipo tipo = lancamentoDTO.getTipo();
        double valor = lancamentoDTO.getValor();
        Categoria categoria = lancamentoDTO.getCategoria();

        Lancamento lancamento = new Lancamento();
        lancamento.setId(1);
        lancamento.setNome(nome);
        lancamento.setDescricao(descricao);
        lancamento.setData(data);
        lancamento.setTipo(tipo);
        lancamento.setValor(valor);
        lancamento.setCategoria(categoria);

        return this.lancamentoService.save(lancamento);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(Integer id){
        this.lancamentoService.delete(id);
    }
}
