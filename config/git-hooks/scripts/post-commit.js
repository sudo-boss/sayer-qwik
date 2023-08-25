// @ts-check
const fs = require('fs');
const path = require('path');
const git = require('git-last-commit');

/** */
async function main() {
  await getGitInfo();
}

main();

/** Extrae info del autor, hora, id y comentario del ultimo commit realizado en el repo */
function getGitInfo() {
  try {
    git.getLastCommit(function (er, commit) {
      const fullFile = path.join(__dirname, '../../../src/appConfig/health/appVersion.ts');
      // read commit object properties
      const commitID = commit?.hash;

      const commitMssg = commit?.subject;

      const commitDate = new Date().toString();

      const commitAuthor = commit?.author?.name;

      const commitBranch = commit?.branch;

      const file = `export const commitID = ${'`'}${commitID}${'`'};
    
  export const commitMssg = ${'`'}${commitMssg}${'`'};
  
  export const commitDate = ${'`'}${commitDate}${'`'};
  
  export const commitAuthor = ${'`'}${commitAuthor}${'`'};
  
  export const commitBranch = ${'`'}${commitBranch}${'`'};
    `;

      fs.writeFile(fullFile, file, (err) => {
        if (err) throw err;
        console.log('Archivo de version creado en ->', fullFile);
      });
    });
  } catch (err) {
    console.log('Error extrayendo info the git o creando el archivo :C');
    console.log(err);
  }
}
