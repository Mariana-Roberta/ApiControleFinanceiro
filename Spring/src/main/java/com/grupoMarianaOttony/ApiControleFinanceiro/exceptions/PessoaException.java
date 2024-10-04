package com.grupoMarianaOttony.ApiControleFinanceiro.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class PessoaException extends RuntimeException {
    public PessoaException(String message) {
        super(message);
    }
}
