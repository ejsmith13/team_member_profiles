function createPage(data){
    const {name, id, email} = data
    const html= `
    <html>
        <body>
            <h1>${name}</h1>
            <p>${id}</p>
            <p>${email}</p>
        </body>
    </html>
    `

    return html
}

module.exports= {createPage}