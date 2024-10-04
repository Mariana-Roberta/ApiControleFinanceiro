package com.grupoMarianaOttony.ApiControleFinanceiro.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class InvalidSaldoException extends RuntimeException {
    public InvalidSaldoException(String message) {
        super(message);
    }
}

