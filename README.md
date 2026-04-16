# Sistema de Cadastro de Currículos

Uma aplicação simples onde candidatos enviam currículos por um formulário e recrutadores consultam e filtram as candidaturas recebidas.

## Tecnologias

- Java 17 + Spring Boot 3
- Spring Validation
- HTML, CSS e JavaScript puro

## Como executar

Precisa ter o Java 17 instalado.

```bash
./mvnw spring-boot:run
```

A aplicação sobe em `http://localhost:8080`.

## Páginas

| Página | URL |
|--------|-----|
| Formulário do candidato | http://localhost:8080/candidato.html |
| Painel do recrutador | http://localhost:8080/recrutador.html |

## Endpoints

**Cadastrar currículo**
```
POST /curriculos
```
```json
{
  "nomeCompleto": "João Silva",
  "email": "joao@email.com",
  "telefone": "11999999999",
  "area": "Backend",
  "nivel": "Junior",
  "resumo": "Desenvolvedor Java com experiência em APIs REST."
}
```
Todos os campos são obrigatórios. Dados inválidos retornam `400` com a lista de erros.

**Listar currículos**
```
GET /curriculos
GET /curriculos?nome=João
GET /curriculos?area=Backend
GET /curriculos?nivel=Junior
GET /curriculos?area=Backend&nivel=Junior
```

## Observação

Os dados ficam em memória. Ao reiniciar a aplicação, todos os currículos são perdidos.
