// Mariana

package com.grupoMarianaOttony.ApiControleFinanceiro.controller;

import com.grupoMarianaOttony.ApiControleFinanceiro.dto.GrupoDTO;
import com.grupoMarianaOttony.ApiControleFinanceiro.mappers.GrupoMapper;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Grupo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Pessoa;
import com.grupoMarianaOttony.ApiControleFinanceiro.service.GrupoService;

import com.grupoMarianaOttony.ApiControleFinanceiro.service.PessoaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/grupo")
@CrossOrigin(origins = "http://localhost:4200") // Permitir apenas o frontend local
public class GrupoController {

    @Autowired
    private GrupoService grupoService;

    @Autowired
    private PessoaService pessoaService;

    @PostMapping("/add/{id}")
    public Grupo criarGrupo(@PathVariable Integer id, @Valid @RequestBody GrupoDTO grupoDTO) {
        // Converte o DTO para a entidade
        Pessoa pessoa = pessoaService.findById(id);
        //List<Lancamento> lancamentos = new ArrayList<Lancamento>();
        //List<Meta> metas = new ArrayList<Meta>();
        Grupo grupo = GrupoMapper.toEntity(grupoDTO, pessoa, null, null); // grupo ao ser criado não possui lançamentos

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
        grupoExistente.setSaldo(grupoDTO.getSaldo());
        return this.grupoService.save(grupoExistente);
    }

    @DeleteMapping("/{id}")
    public void deletarGrupo(@PathVariable Integer id) {
        // Verifica se o grupo existe
        Grupo grupoExistente = grupoService.findById(id);

        grupoService.deleteById(id);
    }

    @GetMapping("/pessoa/{id}")
    public List<Grupo> listarGrupos(@PathVariable Integer id) {
        return this.grupoService.findAllByPessoaId(id);
    }
}
