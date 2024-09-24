// Mariana

package com.api.ApiControleFinanceiro.controller;

import com.api.ApiControleFinanceiro.dto.GrupoDTO;
import com.api.ApiControleFinanceiro.mappers.GrupoMapper;
import com.api.ApiControleFinanceiro.model.Grupo;
import com.api.ApiControleFinanceiro.model.Lancamento;
import com.api.ApiControleFinanceiro.model.Pessoa;
import com.api.ApiControleFinanceiro.service.GrupoService;

import com.api.ApiControleFinanceiro.service.PessoaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/grupo")
@CrossOrigin(origins = "http://localhost:4200") // Permitir apenas o frontend local
public class GrupoController {

    @Autowired
    private GrupoService grupoService;

    @Autowired
    private PessoaService pessoaService;

    @PostMapping("/{id}")
    public Grupo criarGrupo(@PathVariable Integer id, @Valid @RequestBody GrupoDTO grupoDTO) {
        // Converte o DTO para a entidade
        Pessoa pessoa = pessoaService.findById(id);
        List<Lancamento> lancamentos = new ArrayList<Lancamento>();
        Grupo grupo = GrupoMapper.toEntity(grupoDTO, pessoa, lancamentos); // grupo ao ser criado não possui lançamentos

        return this.grupoService.save(grupo);
    }

    @GetMapping("/{id}")
    public Grupo obterGrupo(@PathVariable Integer id) {
        return this.grupoService.findById(id);
    }

    @PutMapping("/{id}")
    public Grupo atualizarGrupo(@PathVariable Integer id, @Valid @RequestBody GrupoDTO grupoDTO) {
        // Verifica se o grupo existe
        Grupo grupoExistente = grupoService.findById(id);

        // Atualiza os dados do grupo existente com os dados do DTO
        grupoExistente.setNome(grupoDTO.getNome());
        grupoExistente.setDescricao(grupoDTO.getDescricao());

        return this.grupoService.save(grupoExistente);
    }

    @DeleteMapping("/{id}")
    public void deletarGrupo(@PathVariable Integer id) {
        // Verifica se o grupo existe
        Grupo grupoExistente = grupoService.findById(id);

        grupoService.deleteById(id);
    }

    @GetMapping
    public List<Grupo> listarGrupos() {
        return this.grupoService.findAll();
    }
}
