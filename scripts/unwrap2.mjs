import fs from 'fs';
const data = JSON.parse(fs.readFileSync('src/data/pages.json', 'utf8'));
let modified = false;

for (const key in data) {
  let content = data[key].content;
  const regex = /<script type="text\/template">([\s\S]*?)<\/script>/g;
  let match;
  let newContent = content;
  
  while ((match = regex.exec(content)) !== null) {
    let scriptContent = match[1].trim();
    if (scriptContent.startsWith('"') && scriptContent.endsWith('"')) {
        try {
            const decodedHtml = JSON.parse(scriptContent);
            newContent = newContent.replace(match[0], decodedHtml);
            modified = true;
        } catch(e) {
        }
    }
  }
  
  if (newContent !== content) {
      data[key].content = newContent;
  }
}

if (modified) {
   fs.writeFileSync('src/data/pages.json', JSON.stringify(data, null, 2));
   console.log('Successfully unwrapped remaining templates.');
} else {
   console.log('No templates needed unwrapping.');
}
