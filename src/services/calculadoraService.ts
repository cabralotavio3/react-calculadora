export function calcular(expressao: string): string {
    try {
      const resultado = eval(expressao);
      return resultado.toString();
    } catch (error) {
      return 'Erro';
    }
  }
  