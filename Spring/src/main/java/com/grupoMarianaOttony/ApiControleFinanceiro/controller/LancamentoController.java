package com.grupoMarianaOttony.ApiControleFinanceiro.controller;

import com.grupoMarianaOttony.ApiControleFinanceiro.dto.LancamentoDTO;
import com.grupoMarianaOttony.ApiControleFinanceiro.mappers.LancamentoMapper;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Grupo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Lancamento;
import com.grupoMarianaOttony.ApiControleFinanceiro.service.GrupoService;
import com.grupoMarianaOttony.ApiControleFinanceiro.service.LancamentoService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/lancamento")
@CrossOrigin(origins = "http://localhost:4200") // Permitir apenas o frontend local
public class LancamentoController {

    @Autowired
    private LancamentoService lancamentoService;

    @Autowired
    private GrupoService grupoService;

    @PostMapping("/add/grupo/{id}")
    public Lancamento criarLancamento(@PathVariable Integer id, @Valid @RequestBody LancamentoDTO lancamentoDTO) {
        // Converte o DTO para a entidade
        Grupo grupo = grupoService.findById(id);
        Lancamento lancamento = LancamentoMapper.toEntity(lancamentoDTO, grupo);
        return this.lancamentoService.save(lancamento);
    }
    // LANÇAMENTO COM ADIÇÃO DO VALOR AO SALDO DO GRUPO
    /*
    // O ID É DO GRUPO QUE PASSA COMO PATHVARIABLE PARA PODER ENCONTRAR O GRUPO ALTERAR O SALDO E SALVÁ-LO NOVAMENTE
    public Lancamento criarLancamento(@PathVariable Integer id, @Valid @RequestBody LancamentoDTO lancamentoDTO) {
        // Converte o DTO para a entidade
        Grupo grupo = grupoService.findById(id);
        float saldoAtual = grupo.getSaldo();

        if (lancamentoDTO.getValor() <= 0) {
            throw new InvalidSaldoException("Valor do lançamento é inválido. Informe um valor maior que zero.");
        }

        if (lancamentoDTO.getTipo() == Tipo.RECEITA) grupo.setSaldo(saldoAtual += lancamentoDTO.getValor());
        if (lancamentoDTO.getTipo() == Tipo.DESPESA) grupo.setSaldo(saldoAtual -= lancamentoDTO.getValor());

        if (grupo.getSaldo() < 0) {
            throw new InvalidSaldoException("O saldo não pode ser menor que 0.");
        }
        grupoService.save(grupo); // Salva o novo saldo do grupo

        Lancamento lancamento = LancamentoMapper.toEntity(lancamentoDTO, grupo);
        return this.lancamentoService.save(lancamento);
    }
     */

    @GetMapping("/grupo/{id}")
    public List<Lancamento> obterLancamentoByGrupo(@PathVariable Integer id) {
        return this.lancamentoService.findAllByGrupoId(id);
    }

    @GetMapping("/{id}")
    public Lancamento obterLancamento(@PathVariable Integer id) {
        return this.lancamentoService.findById(id);
    }

    @PutMapping("/{id}")
    public Lancamento atualizarLancamento(@PathVariable Integer id, @Valid @RequestBody LancamentoDTO lancamentoDTO) {
        // Verifica se o lançamento existe
        Lancamento lancamentoExistente = lancamentoService.findById(id);

        // Atualiza os dados do lançamento existente com os dados do DTO
        lancamentoExistente.setNome(lancamentoDTO.getNome());
        lancamentoExistente.setDescricao(lancamentoDTO.getDescricao());

        return this.lancamentoService.save(lancamentoExistente);
    }

    @DeleteMapping("/{id}")
    public void deletarLancamento(@PathVariable Integer id) {
        // Verifica se o lançamento existe
        Lancamento lancamentoExistente = lancamentoService.findById(id);

        lancamentoService.delete(id);
    }

    @GetMapping("/listagem")
    public List<Lancamento> listarLancamentos() {
        return this.lancamentoService.findAll();
    }
}
