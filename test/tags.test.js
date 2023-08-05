import Mustache from "mustache";
import fs from "fs/promises"


test('mustache file', async() => {
    const helloTemplate = await fs.readFile('./templates/hello.mustache')
        .then(data => data.toString())

    const data = Mustache.render(helloTemplate,{
        title:'ichwan'
    })
    console.info(data)
    expect(data).toContain('ichwan')
})