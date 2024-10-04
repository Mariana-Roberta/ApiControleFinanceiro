export enum Tipo{
    Receita = 'Receita',
    Despesa = 'Despesa'
}

// optional: Record type annotation guaranties that 
// all the values from the enum are presented in the mapping
export const TipoLabelMapping: Record<Tipo, string> = {
    [Tipo.Receita]: "Receita",
    [Tipo.Despesa]: "Despesa",
};