# PalpiteBox - Semana Fullstack Master

[![HitCount](http://hits.dwyl.com/matheuspedrosoo/https://githubcom/matheuspedrosoo/palpite-box.svg)](http://hits.dwyl.com/matheuspedrosoo/https://githubcom/matheuspedrosoo/palpite-box)

Este projeto foi construído durante a Semana Fullstack Master do [DevPleno](https://devpleno.com) por orientação de Tulio Faria - [LinkedIn](https://www.linkedin.com/in/tuliofaria/) / [Github](https://github.com/tuliofaria). Uma versão online deste projeto pode ser encontrada em: https://palpite-box-eosin.vercel.app/.

![Preview](https://github.com/tuliofaria/palpite-box/blob/master/print.png?raw=true)

## Início



### Pré-requisitos:

Você precisa do NodeJS e do NPM instalado em sua máquina.

```
npm install
npm run dev
```

## Layout:

Criamos o layout utilizando o Figma. Você pode encontrar o arquivo [aqui](https://www.figma.com/file/HxvAYhS6l7UDI49u8uLdaC/palpite-box?node-id=0%3A1).

## Colocando em produção:

Este projeto pode ser colocado em produção utilizando o Vercel. É necessário criar as variáveis de ambiente para configurar o acesso as planilhas do Google:

```
SHEET_CLIENT_EMAIL=client email do service credential
SHEET_PRIVATE_KEY=private key do service credential - lembrar de substituir \n por quebras de linha e de codificar em base 64
SHEET_DOC_ID=id da planilha
```

## Construído com:

* [NextJS](https://nextjs.org/) -The React Framework.
* [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for
rapidly building custom designs.
* [Figma](https://figma.com/) - Online prototyping tool.
* [Google Sheets](https://drive.google.com) - Planilhas online do Google

## Author:

* **Matheus Pedroso** - [LinkedIn](https://www.linkedin.com/in/matheuspedrosoo/)


## Licença

Este projeto é licenciado sobre a licença MIT - veja [LICENSE.md](LICENSE.md) para mais informações.

## Acknowledgments

* Este projeto foi construído durante a Semana Fullstack Master do [DevPleno](https://devpleno.com) por orientação de Tulio Faria - [LinkedIn](https://www.linkedin.com/in/tuliofaria/) / [Github](https://github.com/tuliofaria)
