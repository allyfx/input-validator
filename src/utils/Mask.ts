export default {
  NUMBER: (value: string): string => value.replace(/\D/gim, ""),
  CNPJ(value: string): string {
    return this.NUMBER(value)
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  },
  CPF(value: string): string {
    return this.NUMBER(value)
      .replace(/^(\d{3})(\d)/, "$1.$2")
      .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1-$2")
      .replace(/(-\d{2})(\d)/, "$1");
  },
  CEP(value: string): string {
    return this.NUMBER(value)
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");
  },
  PHONE(value: string): string {
    return this.NUMBER(value)
      .replace(/^(\d{1})/, "($1")
      .replace(/(\d{2})(\d)/, "$1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  },
  CELLPHONE(value: string): string {
    return this.NUMBER(value)
      .replace(/^(\d{1})/, "($1")
      .replace(/(\d{2})(\d)/, "$1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(\d)(\d{3})-(\d)(\d{4})/, "$1 $2$3-$4")
      .replace(/(-\d{4})\d+?$/, "$1");
  },
  // 4354-3/51
  CNAE(value: string): string {
    return this.NUMBER(value)
      .replace(/^(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d)(\d)/, "$1/$2")
      .replace(/(\/\d{2})\d+?$/, "$1");
  },
  // 47.283.072-7
  RG(value: string): string {
    return this.NUMBER(value)
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1-$2")
      .replace(/(-\d)(\d)/, "$1");
  },
  // 12/12/2020
  DATE(value: string): string {
    return this.NUMBER(value)
      .replace(/^(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1");
  }
};
