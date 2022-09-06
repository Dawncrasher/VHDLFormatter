// Calls the VHDLFormatter for the given file
const VHDLformatter = require("./VHDLFormatter.js")
fs = require('fs');
const input = fs.readFileSync(process.argv[2], {encoding:'utf8', flag:'r'});
const settings = fs.readFileSync('./settings.json', {encoding:'utf8', flag:'r'});
const formatter_settings = JSON.parse(settings);
var output = VHDLformatter.beautify(input, formatter_settings);
fs.writeFileSync("./spi.vhd", output);