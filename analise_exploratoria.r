library(ggplot2)
library(readr)

# URL da base de dados
url <- "https://archive.ics.uci.edu/ml/machine-learning-databases/wine-quality/winequality-red.csv"

# Baixar o arquivo para o diretório de trabalho
download.file(url, destfile = "winequality-red.csv", mode = "wb")

# Carregar a base de dados
dados <- read.csv("winequality-red.csv", sep = ";")

# Visualização simples para entender a estrutura dos dados
summary(dados)

# Exibir os primeiros registros da base de dados
head(dados)

# Histograma da qualidade do vinho
ggplot(dados, aes(x = quality)) +
  geom_histogram(binwidth = 1, fill = "steelblue", color = "white") +
  labs(title = "Distribuição da qualidade do vinho", x = "Qualidade", y = "Frequência")


# Gráfico de dispersão para algumas variáveis em relação à qualidade
ggplot(dados, aes(x = alcohol, y = quality)) +
  geom_point() +
  labs(title = "Relação entre Teor Alcoólico e Qualidade", x = "Teor Alcoólico", y = "Qualidade")

# Matriz de correlação
correlation_matrix <- cor(dados)

# Heatmap da matriz de correlação
library(reshape2)

melted_correlation <- melt(correlation_matrix)
ggplot(melted_correlation, aes(Var1, Var2, fill = value)) +
  geom_tile() +
  labs(title = "Matriz de Correlação", x = "Variáveis", y = "Variáveis", fill = "Correlação") +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))