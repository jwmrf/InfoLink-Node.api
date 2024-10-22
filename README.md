# Web Crawler Image API

Este projeto foi desenvolvido há muitos anos com o objetivo de identificar a imagem de capa (thumb) de uma notícia em sites fornecidos pelo usuário. Utilizando **Express**, **Cheerio** e **Image-size**, o projeto percorre o site e, com base em um algoritmo desenvolvido para calcular o tamanho das imagens, retorna a URL da imagem que provavelmente é a principal (thumb) da notícia.
#### Acesse: https://noticescrawler.wilsonfilho.site/
#### Package no NPM: https://www.npmjs.com/package/cover-image-crawler

![image](https://github.com/user-attachments/assets/c0903f50-2ac1-4410-94fc-55cce638c573)

## Funcionalidades

- O usuário fornece a URL de um site de notícias.
- O projeto utiliza **Cheerio** para realizar o web scraping e buscar todas as imagens da página.
- Com **Image-size**, o projeto analisa o tamanho de cada imagem e, com base no algoritmo personalizado, identifica qual imagem é a capa da notícia.
- Retorna a URL da imagem identificada para o usuário.

## Tecnologias Utilizadas

- **Express**: Framework minimalista para o back-end.
- **Cheerio**: Biblioteca utilizada para manipular o HTML e extrair as informações necessárias, como URLs das imagens.
- **Image-size**: Ferramenta usada para calcular o tamanho das imagens e auxiliar na identificação da thumb correta.

## Como Funciona

1. O usuário insere a URL do site de notícias.
2. O sistema faz uma varredura no site, coletando todas as imagens presentes na página.
3. Utilizando um algoritmo baseado no tamanho da imagem (através de **Image-size**), o sistema determina qual imagem tem maior probabilidade de ser a capa da notícia.
4. A URL da imagem identificada é retornada ao usuário.

## Exemplo de Uso

O usuário pode testar com a seguinte URL para ver o sistema em ação:

