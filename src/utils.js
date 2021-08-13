const yaml = require('js-yaml');

export async function yamlParser(path){
    let parseResult = await fetch(process.env.PUBLIC_URL + path)
    .then(r => r.text())
    .then(text => {
      return yaml.load(text)
    });
    // console.log(parseResult)
    return parseResult
}