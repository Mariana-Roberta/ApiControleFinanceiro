package com.grupoMarianaOttony.ApiControleFinanceiro.validator;

public class CpfValidator {

    public static boolean isValidCpf(String cpf) {
        // Remover caracteres não numéricos
        cpf = cpf.replaceAll("[^\\d]", "");

        // Verifica se o CPF tem 11 dígitos e não é uma sequência repetida (como "111.111.111-11")
        if (cpf.length() != 11 || cpf.matches("(\\d)\\1{10}")) {
            return false;
        }

        // Cálculo do primeiro dígito verificador
        int sum = 0;
        for (int i = 0; i < 9; i++) {
            sum += (cpf.charAt(i) - '0') * (10 - i);
        }

        int firstVerifier = 11 - (sum % 11);
        if (firstVerifier == 10 || firstVerifier == 11) {
            firstVerifier = 0;
        }

        // Verifica se o primeiro dígito verificador é válido
        if (firstVerifier != (cpf.charAt(9) - '0')) {
            return false;
        }

        // Cálculo do segundo dígito verificador
        sum = 0;
        for (int i = 0; i < 10; i++) {
            sum += (cpf.charAt(i) - '0') * (11 - i);
        }

        int secondVerifier = 11 - (sum % 11);
        if (secondVerifier == 10 || secondVerifier == 11) {
            secondVerifier = 0;
        }

        // Verifica se o segundo dígito verificador é válido
        return secondVerifier == (cpf.charAt(10) - '0');
    }
}

