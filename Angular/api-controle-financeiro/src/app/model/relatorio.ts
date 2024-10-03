export interface Relatorio {
    data: Date; // Data do lançamento
    descricao: string; // Descrição do lançamento
    categoria: string; // Categoria do lançamento
    valor: number; // Valor do lançamento
    grupo?: string; // Nome do grupo associado ao lançamento
}
