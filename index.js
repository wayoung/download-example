const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

const port = 3000

// Routes

app.get('/download', (req, res) => {
    res.attachment('download.pdf')
    res.sendFile(path.join(__dirname, 'pdfs','BlackScholesFormula.pdf'))
})

app.get('/download2', function (req, res) {
   fs.readFile(path.join(__dirname,'pdfs','BlackScholesFormula.pdf'), function (err, content) {
       if (err) {
           res.writeHead(400, {'Content-type':'text/html'})
           console.log(err);
           res.end("No such file");    
       } else {
           res.setHeader('Content-disposition', 'attachment; filename=download.pdf');
           res.end(content);
       }
   });
})

// Listen

app.listen(port, () => {
    console.log(`app is now listening on port ${port}`)
})