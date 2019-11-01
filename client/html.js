const Html = ({
  body
}) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" type="text/css" href="/css/main.css" /> 
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css">
    </head>
    <body class="bg-shape">
      <div id="root">${body}</div>
      <script type="text/javascript" src="/js/bundle.js?v=COMMITHASH"></script>
    </body>
  </html>
`
}

export default Html
