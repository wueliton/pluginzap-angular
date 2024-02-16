var fs = require('fs');
var path = require('path');

var iconsPath = './src/assets/icons';
var iconListFile = './src/app/common/icon/icon-list.type.ts';

fs.readdir(iconsPath, function (err, files) {
  if (err) {
    console.error('Erro ao ler o diretório', err);
    return;
  }

  var onlyFiles = files
    .filter(function (file) {
      return (
        fs.statSync(path.join(iconsPath, file)).isFile() &&
        file.endsWith('.svg')
      );
    })
    .map(function (icon) {
      return "  '" + icon.replace('.svg', '') + "'";
    })
    .join(',\n');

  var list =
    'export const icons = [\n' +
    onlyFiles +
    "] as const;\nexport type IconTypes = (typeof icons)[number] | ''";

  fs.writeFileSync(iconListFile, list, function (err) {
    if (err) {
      console.error('Erro ao escrever no arquivo', err);
    } else {
      console.log('Arquivo atualizado com sucesso');
    }
  });
});
