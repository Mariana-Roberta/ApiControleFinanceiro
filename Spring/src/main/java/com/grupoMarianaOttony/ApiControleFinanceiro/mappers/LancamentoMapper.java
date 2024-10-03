package  com.grupoMarianaOttony.ApiControleFinanceiro.mappers;

import com.grupoMarianaOttony.ApiControleFinanceiro.dto.LancamentoDTO;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Grupo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Lancamento;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class LancamentoMapper {

    public static LancamentoDTO toDTO(Lancamento lancamento) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        String formattedDate = lancamento.getData().format(formatter);

        return new LancamentoDTO(
                lancamento.getId(),
                lancamento.getNome(),
                lancamento.getDescricao(),
                formattedDate,
                lancamento.getTipo(),
                lancamento.getValor(),
                lancamento.getCategoria(),
                lancamento.getGrupo()
        );
    }

    public static Lancamento toEntity(LancamentoDTO lancamentoDTO, Grupo grupo) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        LocalDate localDate = LocalDate.parse(lancamentoDTO.getData(), formatter);

        return new Lancamento(
                lancamentoDTO.getId(),
                lancamentoDTO.getNome(),
                lancamentoDTO.getDescricao(),
                localDate,
                lancamentoDTO.getTipo(),
                lancamentoDTO.getValor(),
                lancamentoDTO.getCategoria(),
                grupo
        );
    }
}
