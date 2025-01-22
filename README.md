
# **Projeto de Prática de Testes Unitários com TypeScript e Jest**

Este repositório foi desenvolvido para oferecer uma experiência prática de criação de testes unitários com **TypeScript** e **Jest**, ajudando estudantes a compreender e aplicar boas práticas de testes de software.

---

## 📚 **O que são Testes Unitários?**

Testes unitários são verificações feitas em funções ou métodos individuais para garantir que cada parte funcione como esperado. Eles ajudam a:

- Prevenir regressões.
- Aumentar a confiança nas mudanças no código.
- Melhorar a qualidade geral do software.

---

## 🛠 **Ferramentas Utilizadas**

- **TypeScript**: Usado para adicionar tipagem e melhorar a qualidade do código.
- **Jest**: Framework de testes unitários para JavaScript e TypeScript.

---

## 🔌 **Extensões Recomendadas para VS Code**

Para facilitar o desenvolvimento e execução dos testes, recomendamos instalar as seguintes extensões no Visual Studio Code:

1. **[Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)**
   - Monitora e executa os testes em tempo real enquanto você edita o código.
   - Oferece feedback visual diretamente no editor.

2. **[Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)**
   - Permite executar ou depurar testes unitários diretamente de arquivos ou funções individuais com um clique.

### Como Instalar
1. Abra o VS Code.
2. Acesse a aba de extensões (Ctrl+Shift+X ou Cmd+Shift+X no Mac).
3. Pesquise por "Jest" e "Jest Runner".
4. Clique em "Install" nas extensões listadas.

---

## 📁 **Estrutura do Projeto**

A estrutura do projeto está organizada por funções, onde cada pasta contém o código da função e seus respectivos testes:

```
react_native_test_unit/
├── src/
│   ├── 1-sum/
│   │   ├── sum.ts
│   │   └── sum.test.ts
│   ├── 2-length/
│   │   ├── length.ts
│   │   └── length.test.ts
│   ├── 3-max/
│   │   ├── max.ts
│   │   └── max.test.ts
│   ├── 4-sort/
│   │   ├── sort.ts
│   │   └── sort.test.ts
│   └── 5-palindrome/
│       ├── palindrome.ts
│       └── palindrome.test.ts
├── jest.config.js
├── package.json
└── README.md
```

Cada subpasta no diretório `src/` representa uma função e contém:
- O arquivo principal da função (`.ts`).
- O arquivo de teste correspondente (`.test.ts`).

---

## 📝 **Exercícios Práticos**

### **1. Função de Soma (`sum`)**
Calcula a soma de dois números.

**Cenários de teste sugeridos**:
- Soma de dois números positivos.
- Soma de dois números negativos.
- Soma de zero com outro número.
- Soma de um número positivo com um negativo.

---

### **2. Função de Comprimento (`length`)**
Retorna o comprimento de uma string.

**Cenários de teste sugeridos**:
- String vazia.
- String de um único caractere.
- String longa.

---

### **3. Função de Máximo (`max`)**
Retorna o maior valor entre dois números.

**Cenários de teste sugeridos**:
- Ambos os números positivos.
- Ambos os números negativos.
- Um número positivo e um negativo.
- Zero e outro número.

---

### **4. Função de Ordenação (`sort`)**
Ordena um array de strings.

**Cenários de teste sugeridos**:
- Array vazio.
- Array com um único elemento.
- Array já ordenado.
- Array desordenado.

---

### **5. Função de Palíndromo (`isPalindrome`)**
Verifica se uma string é um palíndromo.

**Cenários de teste sugeridos**:
- String vazia.
- String de um único caractere.
- String que é um palíndromo.
- String que não é um palíndromo.

---

## 🚀 **Executando os Testes**

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute os testes:
   ```bash
   npm test
   ```

3. Para executar testes em modo "watch":
   ```bash
   npm test -- --watch
   ```

4. Limpar o cache do Jest:
   ```bash
   npm test -- --clearCache
   ```

---

## 🎯 **Objetivos do Projeto**

1. Ensinar conceitos básicos de testes unitários.
2. Desenvolver habilidades para identificar e corrigir falhas no código.
3. Proporcionar um ambiente prático para consolidar conhecimentos em TypeScript e Jest.

---

## 📧 **Contato**

Se tiver dúvidas ou sugestões, entre em contato comigo:
- **Email**: [jacksonsmith@puc.com](mailto:jacksonsmith@puc.com)
- **LinkedIn**: [linkedin.com/in/3jacksonsmith](https://linkedin.com/in/3jacksonsmith)

---

Divirta-se praticando! 🚀
