package com.grupoMarianaOttony.ApiControleFinanceiro.exceptions;

import com.grupoMarianaOttony.ApiControleFinanceiro.exceptions.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(InvalidSaldoException.class)
    public ResponseEntity<ErrorResponse> handleInvalidSaldoException(InvalidSaldoException ex) {
        ErrorResponse errorResponse = new ErrorResponse(ex.getMessage());
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(PessoaException.class)
    public ResponseEntity<ErrorResponse> handlePessoaException(PessoaException ex) {
        ErrorResponse errorResponse = new ErrorResponse(ex.getMessage());
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }
}

