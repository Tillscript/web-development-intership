# Requisitos para rodar o projeto

## Dependências necessárias

| Ferramenta     | Versão mínima | Como instalar (Ubuntu/Debian)     |
|----------------|---------------|-----------------------------------|
| Java (OpenJDK) | 17            | `sudo apt install openjdk-17-jdk` |
| Maven          | 3.8+          | `sudo apt install maven`          |

Nenhum banco de dados externo é necessário. O projeto usa H2, que já vem embutido.

---

## Passo a passo para rodar

### 1. Instalar dependências

```bash
sudo apt update
sudo apt install -y openjdk-17-jdk maven
```

### 2. Rodar o projeto

Na pasta raiz do projeto:

```bash
mvn spring-boot:run
```

A aplicação sobe na porta **8080** por padrão.

---

## Verificando se está funcionando

Acesse no navegador:

```
http://localhost:8080
```

Para ver os dados no banco enquanto a aplicação roda:

```
http://localhost:8080/h2-console
JDBC URL: jdbc:h2:mem:curriculos
Usuario: sa
Senha: (deixar em branco)
```
