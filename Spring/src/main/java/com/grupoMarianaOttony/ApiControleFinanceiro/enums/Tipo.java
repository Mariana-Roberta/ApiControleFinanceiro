package com.grupoMarianaOttony.ApiControleFinanceiro.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Tipo {
    RECEITA("Receita"),
    DESPESA("Despesa");

    private final String value;

    Tipo(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }
}
