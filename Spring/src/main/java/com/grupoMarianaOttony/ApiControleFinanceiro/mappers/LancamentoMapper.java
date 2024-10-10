package  com.grupoMarianaOttony.ApiControleFinanceiro.mappers;

import com.grupoMarianaOttony.ApiControleFinanceiro.dto.LancamentoDTO;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Grupo;
import com.grupoMarianaOttony.ApiControleFinanceiro.model.Lancamento;

public class LancamentoMapper {

    public static LancamentoDTO toDTO(Lancamento lancamento) {
        //DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        //String formattedDate = lancamento.getData().format(formatter);

        return new LancamentoDTO(
                lancamento.getId(),
                lancamento.getNome(),
                lancamento.getDescricao(),
                lancamento.getData(),
                lancamento.getTipo(),
                lancamento.getValor(),
                lancamento.getCategoria(),
                lancamento.getGrupo()
        );
    }

    public static Lancamento toEntity(LancamentoDTO lancamentoDTO, Grupo grupo) {
        //DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        //LocalDate localDate = lancamentoDTO.getData();

        return new Lancamento(
                lancamentoDTO.getId(),
                lancamentoDTO.getNome(),
                lancamentoDTO.getDescricao(),
                lancamentoDTO.getData(),
                lancamentoDTO.getTipo(),
                lancamentoDTO.getValor(),
                lancamentoDTO.getCategoria(),
                grupo
        );
    }
}
