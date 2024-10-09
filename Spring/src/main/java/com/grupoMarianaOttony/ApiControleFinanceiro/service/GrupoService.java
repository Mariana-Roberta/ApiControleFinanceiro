// Mariana

package com.grupoMarianaOttony.ApiControleFinanceiro.service;

import com.grupoMarianaOttony.ApiControleFinanceiro.dto.RelatorioDTO;
import com.grupoMarianaOttony.ApiControleFinanceiro.enums.Categoria;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Grupo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Lancamento;
import com.grupoMarianaOttony.ApiControleFinanceiro.repository.GrupoRepository;
import com.grupoMarianaOttony.ApiControleFinanceiro.repository.LancamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GrupoService {

    @Autowired
    private GrupoRepository grupoRepository;

    @Autowired
    private LancamentoRepository lancamentoRepository;

    public List<Grupo> findAll() { return grupoRepository.findAll(); }

    public Grupo findById(Integer id) { return grupoRepository.findById(id).orElseThrow(); }

    public Grupo save(Grupo grupo) { return grupoRepository.save(grupo); }

    public Grupo update(Grupo grupo) { return grupoRepository.save(grupo); }

    public void deleteById(Integer id) { grupoRepository.deleteById(id); }

    public List<Grupo> findAllByPessoaId(Integer id){ return grupoRepository.findAllByPessoaId(id); }

    // Geração de relatório mensal
    /*
    public List<RelatorioDTO> gerarRelatorioMensal(int mes, int ano) {
        List<Lancamento> lancamentos = lancamentoRepository.findByMesAndAno(mes, ano);
        return lancamentos.stream()
                .map(lancamento -> new RelatorioDTO(
                        lancamento.getData(),
                        lancamento.getDescricao(),
                        lancamento.getCategoria(),
                        lancamento.getValor(),
                        lancamento.getGrupo().getNome() // Adiciona o grupo ao DTO
                ))
                .collect(Collectors.toList());
    }*/

    // Geração de relatório por grupo
    public List<RelatorioDTO> gerarRelatorioPorGrupo(Integer grupoId) {
        Grupo grupo = grupoRepository.findById(grupoId)
                .orElseThrow(() -> new IllegalArgumentException("Grupo não encontrado"));

        List<Lancamento> lancamentos = lancamentoRepository.findByGrupo(grupo);
        return lancamentos.stream()
                .map(lancamento -> new RelatorioDTO(
                        lancamento.getData(),
                        lancamento.getDescricao(),
                        lancamento.getCategoria(),
                        lancamento.getValor(),
                        grupo.getNome() // Grupo correspondente
                ))
                .collect(Collectors.toList());
    }

    // Geração de relatório por categoria
    public List<RelatorioDTO> gerarRelatorioPorCategoria(Categoria categoria) {
        List<Lancamento> lancamentos = lancamentoRepository.findByCategoria(categoria);
        return lancamentos.stream()
                .map(lancamento -> new RelatorioDTO(
                        lancamento.getData(),
                        lancamento.getDescricao(),
                        lancamento.getCategoria(),
                        lancamento.getValor(),
                        null // Grupo não é necessário no relatório por categoria
                ))
                .collect(Collectors.toList());
    }
}
