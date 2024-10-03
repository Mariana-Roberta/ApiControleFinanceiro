package com.grupoMarianaOttony.ApiControleFinanceiro.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Categoria {
    ALIMENTACAO("Alimentacao"),
    TRANSPORTE("Transporte"),
    SAUDE("Saude"),
    OUTROS("Outros"),;

    private final String value;

    Categoria(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }
}
