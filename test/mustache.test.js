import Mustache from "mustache"
import fs from "fs/promises"

test("menggunakan mustache", () => {
    const data = Mustache.render("Hello {{name}}",{name : 'ichwan'})

    expect(data).toBe('Hello ichwan')
})

test("menggunakan mustache Cache", () => {
    Mustache.parse("Hello {{name}}")

    const data = Mustache.render("Hello {{name}}",{name : 'ichwan'})
    
    expect(data).toBe('Hello ichwan')
})


test("Tags", () => {
    const data = Mustache.render("Hello {{name}}, my Hobby is {{{hobby}}}",{
        name : 'ichwan',
        hobby : '<b>Programming</b>'
})
    console.log(data)
    expect(data).toBe('Hello ichwan, my Hobby is <b>Programming</b>')
})

test('sections Not Show', async() => {
    const helloTemplate = await fs.readFile('./templates/person.mustache')
        .then(data => data.toString())

    const data = Mustache.render(helloTemplate,{})
    console.info(data)
    expect(data).not.toContain('hello person')
})

test('sections Show', async() => {
    const helloTemplate = await fs.readFile('./templates/person.mustache')
        .then(data => data.toString())

    const data = Mustache.render(helloTemplate,{
        person:{
            name : 'ichwan'
        }
    })
    console.info(data)
    expect(data).toContain('Hello Person')
})

test('sections Data', async() => {
    const helloTemplate = await fs.readFile('./templates/person.mustache')
        .then(data => data.toString())

    const data = Mustache.render(helloTemplate,{
        person:{
            name : 'ichwan'
        }
    })
    console.info(data)
    expect(data).toContain('Hello Person ichwan')
})

test('sections Data', async() => {
    const helloTemplate = await fs.readFile('./templates/person.mustache')
        .then(data => data.toString())

    const data = Mustache.render(helloTemplate,{})
    console.info(data)
    expect(data).toContain('Hello Guest')
})

test('List', async() => {
    const helloTemplate = await fs.readFile('./templates/hobbies.mustache')
        .then(data => data.toString())

    const data = Mustache.render(helloTemplate,{
        hobbies :['programming', 'reading' , 'gaming']
    })
    console.info(data)
    expect(data).toContain('programming')
    expect(data).toContain('reading')
    expect(data).toContain('gaming')
})


test('List Object', async() => {
    const helloTemplate = await fs.readFile('./templates/students.mustache')
        .then(data => data.toString())

    const data = Mustache.render(helloTemplate,{
        students : [
            {name:'ichwan',value:100},
            {name:'toni', value:100}
        ]
    })
    console.info(data)
    expect(data).toContain('ichwan')
    expect(data).toContain('toni')
    expect(data).toContain('100')
})
test('functions', async() => {
    const parameter = {
        name : 'ichwan',
        upper : () => {
            return (text,render) => {
                return render(text).toUpperCase();
            }
        }
    }

    const data = Mustache.render('Hello {{#upper}}ichwan{{/upper}}', parameter)
    console.log(data)
    expect(data).toContain('ICHWAN')
})

test('functions', async() => {
    const helloTemplate = await fs.readFile('./templates/comment.mustache')
                            .then(data => data.toString());

    const data = Mustache.render(helloTemplate,{title:'Programmer Zaman Now'})
    console.log(data)
    expect(data).toContain('Programmer Zaman Now')
    expect(data).not.toContain('this comment')
})

test.only('Partials', async() => {
    const headerTemplate = await fs.readFile('./templates/header.mustache')
        .then(data => data.toString());
    const footerTemplate = await fs.readFile('./templates/footer.mustache')
        .then(data => data.toString());
    const contentTemplate = await fs.readFile('./templates/content.mustache')
        .then(data => data.toString());
    

    const data = Mustache.render(contentTemplate,{
        title : "Belajar Partials",
        content : "Belajar Programming memanglah susah"
    },
    {
        header : headerTemplate,
        footer : footerTemplate

    })
    console.info(data)
    expect(data).toContain('Belajar Partials')
    expect(data).toContain('Belajar Programming memanglah susah')
})
