/*
 * takes a simplified message sequence chart program and translates
 * to an mscgen program
 */
/* jshint indent:4 */
/* jshint node:true */
var ast2genny = require ("../render/text/ast2msgenny");

var gInput = "";

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
    gInput += chunk;
});

process.stdin.on('end', function() {
    var lAST = JSON.parse(gInput);
    process.stdout.write(ast2genny.render (lAST));
    process.stdin.pause();
});

/*
    This file is part of mscgen_js.

    mscgen_js is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    mscgen_js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with mscgen_js.  If not, see <http://www.gnu.org/licenses/>.
*/
