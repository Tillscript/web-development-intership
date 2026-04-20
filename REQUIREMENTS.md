# Requisitos para rodar o projeto

## Dependências necessárias

| Ferramenta    | Versão mínima | Como instalar (Ubuntu/Debian)                        |
|---------------|---------------|------------------------------------------------------|
| Java (OpenJDK)| 17            | `sudo apt install openjdk-17-jdk`                    |
| Maven         | 3.8+          | `sudo apt install maven`                             |
| PostgreSQL    | 14+           | `sudo apt install postgresql postgresql-contrib`     |

---

## Passo a passo para rodar

### 1. Instalar dependências

```bash
sudo apt update
sudo apt install -y openjdk-17-jdk maven postgresql postgresql-contrib
```

### 2. Iniciar o PostgreSQL

```bash
sudo systemctl start postgresql
sudo systemctl enable postgresql   # opcional: inicia automaticamente no boot
```

### 3. Configurar o banco de dados

```bash
sudo -u postgres psql -c "ALTER USER postgres WITH PASSWORD 'admin123';"
sudo -u postgres psql -c "CREATE DATABASE curriculos;"
```

### 4. Rodar o projeto

Na pasta raiz do projeto:

```bash
mvn spring-boot:run
```

A aplicação sobe na porta **8080** por padrão.  
Para usar outra porta:

```bash
mvn spring-boot:run -Dspring-boot.run.arguments=--server.port=PORTA_DESEJADA
```

---

## Variáveis de configuração (src/main/resources/application.properties)

| Propriedade                    | Valor padrão  | Descrição                  |
|-------------------------------|---------------|----------------------------|
| `server.port`                 | `8080`        | Porta da aplicação         |
| `spring.datasource.url`       | `jdbc:postgresql://localhost:5432/curriculos` | URL do banco |
| `spring.datasource.username`  | `postgres`    | Usuário do banco           |
| `spring.datasource.password`  | `admin123`    | Senha do banco             |

---

## Verificando se está funcionando

Acesse no navegador ou via curl:

```bash
curl http://localhost:8080
```
