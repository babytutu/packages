var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},classCallCheck=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")},createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),defineProperty=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a},_extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},get=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(e===void 0){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if("value"in e)return e.value;var g=e.get;return void 0===g?void 0:g.call(d)},inherits=function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)},possibleConstructorReturn=function(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a},Barcode=function a(b,c){classCallCheck(this,a),this.data=b,this.text=c.text||b,this.options=c},CODE39=function(a){function b(a,c){return classCallCheck(this,b),a=a.toUpperCase(),c.mod43&&(a+=getCharacter(mod43checksum(a))),possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a,c))}return inherits(b,a),createClass(b,[{key:"encode",value:function(){for(var a=getEncoding("*"),b=0;b<this.data.length;b++)a+=getEncoding(this.data[b])+"0";return a+=getEncoding("*"),{data:a,text:this.text}}},{key:"valid",value:function(){return-1!==this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/)}}]),b}(Barcode),characters=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-","."," ","$","/","+","%","*"],encodings=[20957,29783,23639,30485,20951,29813,23669,20855,29789,23645,29975,23831,30533,22295,30149,24005,21623,29981,23837,22301,30023,23879,30545,22343,30161,24017,21959,30065,23921,22385,29015,18263,29141,17879,29045,18293,17783,29021,18269,17477,17489,17681,20753,35770];function getEncoding(a){return getBinary(characterValue(a))}function getBinary(a){return encodings[a].toString(2)}function getCharacter(a){return characters[a]}function characterValue(a){return characters.indexOf(a)}function mod43checksum(a){for(var b=0,c=0;c<a.length;c++)b+=characterValue(a[c]);return b%=43,b}var _SET_BY_CODE,SET_A=0,SET_B=1,SET_C=2,SHIFT=98,START_A=103,START_B=104,START_C=105,MODULO=103,STOP=106,FNC1=207,SET_BY_CODE=(_SET_BY_CODE={},defineProperty(_SET_BY_CODE,103,0),defineProperty(_SET_BY_CODE,104,1),defineProperty(_SET_BY_CODE,105,2),_SET_BY_CODE),SWAP={101:0,100:1,99:2},A_START_CHAR="\xD0",B_START_CHAR="\xD1",C_START_CHAR="\xD2",A_CHARS="[\0-_\xC8-\xCF]",B_CHARS="[ -\x7F\xC8-\xCF]",C_CHARS="(\xCF*[0-9]{2}\xCF*)",BARS=[11011001100,11001101100,11001100110,10010011e3,10010001100,10001001100,10011001e3,10011000100,10001100100,11001001e3,11001000100,11000100100,10110011100,10011011100,10011001110,10111001100,10011101100,10011100110,11001110010,11001011100,11001001110,11011100100,11001110100,11101101110,11101001100,11100101100,11100100110,11101100100,11100110100,11100110010,11011011e3,11011000110,11000110110,10100011e3,10001011e3,10001000110,10110001e3,10001101e3,10001100010,11010001e3,11000101e3,11000100010,10110111e3,10110001110,10001101110,10111011e3,10111000110,10001110110,11101110110,11010001110,11000101110,11011101e3,11011100010,11011101110,11101011e3,11101000110,11100010110,11101101e3,11101100010,11100011010,11101111010,11001000010,11110001010,1010011e4,10100001100,1001011e4,10010000110,10000101100,10000100110,1011001e4,10110000100,1001101e4,10011000010,10000110100,10000110010,11000010010,1100101e4,11110111010,11000010100,10001111010,10100111100,10010111100,10010011110,10111100100,10011110100,10011110010,11110100100,11110010100,11110010010,11011011110,11011110110,11110110110,10101111e3,10100011110,10001011110,10111101e3,10111100010,11110101e3,11110100010,10111011110,10111101110,11101011110,11110101110,11010000100,1101001e4,11010011100,1100011101011],CODE128=function(a){function b(a,c){classCallCheck(this,b);var d=possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a.substring(1),c));return d.bytes=a.split("").map(function(a){return a.charCodeAt(0)}),d}return inherits(b,a),createClass(b,[{key:"valid",value:function(){return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)}},{key:"encode",value:function(){var a=this.bytes,c=a.shift()-105,d=SET_BY_CODE[c];if(void 0===d)throw new RangeError("The encoding does not start with a start character.");!0===this.shouldEncodeAsEan128()&&a.unshift(FNC1);var e=b.next(a,1,d);return{text:this.text===this.data?this.text.replace(/[^\x20-\x7E]/g,""):this.text,data:b.getBar(c)+e.result+b.getBar((e.checksum+c)%MODULO)+b.getBar(STOP)}}},{key:"shouldEncodeAsEan128",value:function(){var a=this.options.ean128||!1;return"string"==typeof a&&(a="true"===a.toLowerCase()),a}}],[{key:"getBar",value:function(a){return BARS[a]?BARS[a].toString():""}},{key:"correctIndex",value:function(a,b){if(b===SET_A){var c=a.shift();return 32>c?c+64:c-32}return b===SET_B?a.shift()-32:10*(a.shift()-48)+a.shift()-48}},{key:"next",value:function(a,c,d){if(!a.length)return{result:"",checksum:0};var e,f;if(200<=a[0]){f=a.shift()-105;var g=SWAP[f];void 0===g?((d===SET_A||d===SET_B)&&f===SHIFT&&(a[0]=d===SET_A?95<a[0]?a[0]-96:a[0]:32>a[0]?a[0]+96:a[0]),e=b.next(a,c+1,d)):e=b.next(a,c+1,g)}else f=b.correctIndex(a,d),e=b.next(a,c+1,d);var h=b.getBar(f),i=f*c;return{result:h+e.result,checksum:i+e.checksum}}}]),b}(Barcode),matchSetALength=function(a){return a.match(/^[\0-_È-Ï]*/)[0].length},matchSetBLength=function(a){return a.match(/^[ -È-Ï]*/)[0].length},matchSetC=function(a){return a.match(/^(Ï*[0-9]{2}Ï*)*/)[0]};function autoSelectFromAB(a,b){var c=b?A_CHARS:B_CHARS,d=a.match(new RegExp("^("+c+"+?)(([0-9]{2}){2,})([^0-9]|$)"));if(d)return d[1]+"\xCC"+autoSelectFromC(a.substring(d[1].length));var e=a.match(new RegExp("^"+c+"+"))[0];return e.length===a.length?a:e+String.fromCharCode(b?205:206)+autoSelectFromAB(a.substring(e.length),!b)}function autoSelectFromC(a){var b=matchSetC(a),c=b.length;if(c===a.length)return a;a=a.substring(c);var d=matchSetALength(a)>=matchSetBLength(a);return b+String.fromCharCode(d?206:205)+autoSelectFromAB(a,d)}var autoSelectModes=function(a){var b=void 0,c=matchSetC(a).length;if(2<=c)b=C_START_CHAR+autoSelectFromC(a);else{var d=matchSetALength(a)>matchSetBLength(a);b=(d?A_START_CHAR:B_START_CHAR)+autoSelectFromAB(a,d)}return b.replace(/[\xCD\xCE]([^])[\xCD\xCE]/,function(a,b){return"\xCB"+b})},CODE128AUTO=function(a){function b(a,c){if(classCallCheck(this,b),/^[\x00-\x7F\xC8-\xD3]+$/.test(a))var d=possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,autoSelectModes(a),c));else var d=possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a,c));return possibleConstructorReturn(d)}return inherits(b,a),b}(CODE128),CODE128A=function(a){function b(a,c){return classCallCheck(this,b),possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,A_START_CHAR+a,c))}return inherits(b,a),createClass(b,[{key:"valid",value:function(){return /^[\0-_È-Ï]+$/.test(this.data)}}]),b}(CODE128),CODE128B=function(a){function b(a,c){return classCallCheck(this,b),possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,B_START_CHAR+a,c))}return inherits(b,a),createClass(b,[{key:"valid",value:function(){return /^[ -È-Ï]+$/.test(this.data)}}]),b}(CODE128),CODE128C=function(a){function b(a,c){return classCallCheck(this,b),possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,C_START_CHAR+a,c))}return inherits(b,a),createClass(b,[{key:"valid",value:function(){return /^(Ï*[0-9]{2}Ï*)+$/.test(this.data)}}]),b}(CODE128),SIDE_BIN="101",MIDDLE_BIN="01010",BINARIES={L:["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],G:["0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111"],R:["1110010","1100110","1101100","1000010","1011100","1001110","1010000","1000100","1001000","1110100"],O:["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],E:["0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111"]},EAN2_STRUCTURE=["LL","LG","GL","GG"],EAN5_STRUCTURE=["GGLLL","GLGLL","GLLGL","GLLLG","LGGLL","LLGGL","LLLGG","LGLGL","LGLLG","LLGLG"],EAN13_STRUCTURE=["LLLLLL","LLGLGG","LLGGLG","LLGGGL","LGLLGG","LGGLLG","LGGGLL","LGLGLG","LGLGGL","LGGLGL"],encode=function(a,b,c){var d=a.split("").map(function(a,c){return BINARIES[b[c]]}).map(function(b,c){return b?b[a[c]]:""});if(c){var e=a.length-1;d=d.map(function(a,b){return b<e?a+c:a})}return d.join("")},EAN=function(a){function b(a,c){classCallCheck(this,b);var d=possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a,c));return d.fontSize=!c.flat&&c.fontSize>10*c.width?10*c.width:c.fontSize,d.guardHeight=c.height+d.fontSize/2+c.textMargin,d}return inherits(b,a),createClass(b,[{key:"encode",value:function(){return this.options.flat?this.encodeFlat():this.encodeGuarded()}},{key:"leftText",value:function(a,b){return this.text.substr(a,b)}},{key:"leftEncode",value:function(a,b){return encode(a,b)}},{key:"rightText",value:function(a,b){return this.text.substr(a,b)}},{key:"rightEncode",value:function(a,b){return encode(a,b)}},{key:"encodeGuarded",value:function(){var a={fontSize:this.fontSize},b={height:this.guardHeight};return[{data:SIDE_BIN,options:b},{data:this.leftEncode(),text:this.leftText(),options:a},{data:MIDDLE_BIN,options:b},{data:this.rightEncode(),text:this.rightText(),options:a},{data:SIDE_BIN,options:b}]}},{key:"encodeFlat",value:function(){var a=[SIDE_BIN,this.leftEncode(),MIDDLE_BIN,this.rightEncode(),SIDE_BIN];return{data:a.join(""),text:this.text}}}]),b}(Barcode),checksum=function(a){var b=a.substr(0,12).split("").map(function(a){return+a}).reduce(function(b,c,a){return a%2?b+3*c:b+c},0);return(10-b%10)%10},EAN13=function(a){function b(a,c){classCallCheck(this,b),-1!==a.search(/^[0-9]{12}$/)&&(a+=checksum(a));var d=possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a,c));return d.lastChar=c.lastChar,d}return inherits(b,a),createClass(b,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{13}$/)&&+this.data[12]===checksum(this.data)}},{key:"leftText",value:function(){return get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"leftText",this).call(this,1,6)}},{key:"leftEncode",value:function(){var a=this.data.substr(1,6),c=EAN13_STRUCTURE[this.data[0]];return get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"leftEncode",this).call(this,a,c)}},{key:"rightText",value:function(){return get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"rightText",this).call(this,7,6)}},{key:"rightEncode",value:function(){var a=this.data.substr(7,6);return get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"rightEncode",this).call(this,a,"RRRRRR")}},{key:"encodeGuarded",value:function(){var a=get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"encodeGuarded",this).call(this);return this.options.displayValue&&(a.unshift({data:"000000000000",text:this.text.substr(0,1),options:{textAlign:"left",fontSize:this.fontSize}}),this.options.lastChar&&(a.push({data:"00"}),a.push({data:"00000",text:this.options.lastChar,options:{fontSize:this.fontSize}}))),a}}]),b}(EAN),checksum$1=function(a){var b=a.substr(0,7).split("").map(function(a){return+a}).reduce(function(b,c,a){return a%2?b+c:b+3*c},0);return(10-b%10)%10},EAN8=function(a){function b(a,c){return classCallCheck(this,b),-1!==a.search(/^[0-9]{7}$/)&&(a+=checksum$1(a)),possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a,c))}return inherits(b,a),createClass(b,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{8}$/)&&+this.data[7]===checksum$1(this.data)}},{key:"leftText",value:function(){return get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"leftText",this).call(this,0,4)}},{key:"leftEncode",value:function(){var a=this.data.substr(0,4);return get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"leftEncode",this).call(this,a,"LLLL")}},{key:"rightText",value:function(){return get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"rightText",this).call(this,4,4)}},{key:"rightEncode",value:function(){var a=this.data.substr(4,4);return get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"rightEncode",this).call(this,a,"RRRR")}}]),b}(EAN),checksum$2=function(a){var b=a.split("").map(function(a){return+a}).reduce(function(b,c,a){return a%2?b+9*c:b+3*c},0);return b%10},EAN5=function(a){function b(a,c){return classCallCheck(this,b),possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a,c))}return inherits(b,a),createClass(b,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{5}$/)}},{key:"encode",value:function(){var a=EAN5_STRUCTURE[checksum$2(this.data)];return{data:"1011"+encode(this.data,a,"01"),text:this.text}}}]),b}(Barcode),EAN2=function(a){function b(a,c){return classCallCheck(this,b),possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a,c))}return inherits(b,a),createClass(b,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{2}$/)}},{key:"encode",value:function(){var a=EAN2_STRUCTURE[parseInt(this.data)%4];return{data:"1011"+encode(this.data,a,"01"),text:this.text}}}]),b}(Barcode),UPC=function(a){function b(a,c){classCallCheck(this,b),-1!==a.search(/^[0-9]{11}$/)&&(a+=checksum$3(a));var d=possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a,c));return d.displayValue=c.displayValue,d.fontSize=c.fontSize>10*c.width?10*c.width:c.fontSize,d.guardHeight=c.height+d.fontSize/2+c.textMargin,d}return inherits(b,a),createClass(b,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{12}$/)&&this.data[11]==checksum$3(this.data)}},{key:"encode",value:function(){return this.options.flat?this.flatEncoding():this.guardedEncoding()}},{key:"flatEncoding",value:function(){var a="";return a+="101",a+=encode(this.data.substr(0,6),"LLLLLL"),a+="01010",a+=encode(this.data.substr(6,6),"RRRRRR"),a+="101",{data:a,text:this.text}}},{key:"guardedEncoding",value:function(){var a=[];return this.displayValue&&a.push({data:"00000000",text:this.text.substr(0,1),options:{textAlign:"left",fontSize:this.fontSize}}),a.push({data:"101"+encode(this.data[0],"L"),options:{height:this.guardHeight}}),a.push({data:encode(this.data.substr(1,5),"LLLLL"),text:this.text.substr(1,5),options:{fontSize:this.fontSize}}),a.push({data:"01010",options:{height:this.guardHeight}}),a.push({data:encode(this.data.substr(6,5),"RRRRR"),text:this.text.substr(6,5),options:{fontSize:this.fontSize}}),a.push({data:encode(this.data[11],"R")+"101",options:{height:this.guardHeight}}),this.displayValue&&a.push({data:"00000000",text:this.text.substr(11,1),options:{textAlign:"right",fontSize:this.fontSize}}),a}}]),b}(Barcode);function checksum$3(a){var b,c=0;for(b=1;11>b;b+=2)c+=parseInt(a[b]);for(b=0;11>b;b+=2)c+=3*parseInt(a[b]);return(10-c%10)%10}var EXPANSIONS=["XX00000XXX","XX10000XXX","XX20000XXX","XXX00000XX","XXXX00000X","XXXXX00005","XXXXX00006","XXXXX00007","XXXXX00008","XXXXX00009"],PARITIES=[["EEEOOO","OOOEEE"],["EEOEOO","OOEOEE"],["EEOOEO","OOEEOE"],["EEOOOE","OOEEEO"],["EOEEOO","OEOOEE"],["EOOEEO","OEEOOE"],["EOOOEE","OEEEOO"],["EOEOEO","OEOEOE"],["EOEOOE","OEOEEO"],["EOOEOE","OEEOEO"]],UPCE=function(a){function b(a,c){classCallCheck(this,b);var d=possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a,c));if(d.isValid=!1,-1!==a.search(/^[0-9]{6}$/))d.middleDigits=a,d.upcA=expandToUPCA(a,"0"),d.text=c.text||""+d.upcA[0]+a+d.upcA[d.upcA.length-1],d.isValid=!0;else{if(-1===a.search(/^[01][0-9]{7}$/))return possibleConstructorReturn(d);if(d.middleDigits=a.substring(1,a.length-1),d.upcA=expandToUPCA(d.middleDigits,a[0]),d.upcA[d.upcA.length-1]===a[a.length-1])d.isValid=!0;else return possibleConstructorReturn(d)}return d.displayValue=c.displayValue,d.fontSize=c.fontSize>10*c.width?10*c.width:c.fontSize,d.guardHeight=c.height+d.fontSize/2+c.textMargin,d}return inherits(b,a),createClass(b,[{key:"valid",value:function(){return this.isValid}},{key:"encode",value:function(){return this.options.flat?this.flatEncoding():this.guardedEncoding()}},{key:"flatEncoding",value:function(){var a="";return a+="101",a+=this.encodeMiddleDigits(),a+="010101",{data:a,text:this.text}}},{key:"guardedEncoding",value:function(){var a=[];return this.displayValue&&a.push({data:"00000000",text:this.text[0],options:{textAlign:"left",fontSize:this.fontSize}}),a.push({data:"101",options:{height:this.guardHeight}}),a.push({data:this.encodeMiddleDigits(),text:this.text.substring(1,7),options:{fontSize:this.fontSize}}),a.push({data:"010101",options:{height:this.guardHeight}}),this.displayValue&&a.push({data:"00000000",text:this.text[7],options:{textAlign:"right",fontSize:this.fontSize}}),a}},{key:"encodeMiddleDigits",value:function(){var a=this.upcA[0],b=this.upcA[this.upcA.length-1],c=PARITIES[parseInt(b)][parseInt(a)];return encode(this.middleDigits,c)}}]),b}(Barcode);function expandToUPCA(a,b){for(var d,e=parseInt(a[a.length-1]),f=EXPANSIONS[e],g="",h=0,j=0;j<f.length;j++)d=f[j],g+="X"===d?a[h++]:d;return g=""+b+g,""+g+checksum$3(g)}var ITF14=function(a){function b(a,c){classCallCheck(this,b),-1!==a.search(/^[0-9]{13}$/)&&(a+=checksum$4(a));var d=possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a,c));return d.binaryRepresentation={0:"00110",1:"10001",2:"01001",3:"11000",4:"00101",5:"10100",6:"01100",7:"00011",8:"10010",9:"01010"},d}return inherits(b,a),createClass(b,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{14}$/)&&this.data[13]==checksum$4(this.data)}},{key:"encode",value:function(){for(var a="1010",b=0;14>b;b+=2)a+=this.calculatePair(this.data.substr(b,2));return a+="11101",{data:a,text:this.text}}},{key:"calculatePair",value:function(a){for(var b="",c=this.binaryRepresentation[a[0]],d=this.binaryRepresentation[a[1]],e=0;5>e;e++)b+="1"==c[e]?"111":"1",b+="1"==d[e]?"000":"0";return b}}]),b}(Barcode);function checksum$4(a){for(var b=0,c=0;13>c;c++)b+=parseInt(a[c])*(3-2*(c%2));return 10*Math.ceil(b/10)-b}var ITF=function(a){function b(a,c){classCallCheck(this,b);var d=possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a,c));return d.binaryRepresentation={0:"00110",1:"10001",2:"01001",3:"11000",4:"00101",5:"10100",6:"01100",7:"00011",8:"10010",9:"01010"},d}return inherits(b,a),createClass(b,[{key:"valid",value:function(){return-1!==this.data.search(/^([0-9]{2})+$/)}},{key:"encode",value:function(){for(var a="1010",b=0;b<this.data.length;b+=2)a+=this.calculatePair(this.data.substr(b,2));return a+="11101",{data:a,text:this.text}}},{key:"calculatePair",value:function(a){for(var b="",c=this.binaryRepresentation[a[0]],d=this.binaryRepresentation[a[1]],e=0;5>e;e++)b+="1"==c[e]?"111":"1",b+="1"==d[e]?"000":"0";return b}}]),b}(Barcode),MSI=function(a){function b(a,c){return classCallCheck(this,b),possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a,c))}return inherits(b,a),createClass(b,[{key:"encode",value:function(){for(var a="110",c=0;c<this.data.length;c++){var d=parseInt(this.data[c]),e=d.toString(2);e=addZeroes(e,4-e.length);for(var f=0;f<e.length;f++)a+="0"==e[f]?"100":"110"}return a+="1001",{data:a,text:this.text}}},{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]+$/)}}]),b}(Barcode);function addZeroes(a,b){for(var c=0;c<b;c++)a="0"+a;return a}function mod10(a){for(var b,c=0,d=0;d<a.length;d++)b=parseInt(a[d]),c+=0==(d+a.length)%2?b:2*b%10+Math.floor(2*b/10);return(10-c%10)%10}function mod11(a){for(var b,c=0,d=[2,3,4,5,6,7],e=0;e<a.length;e++)b=parseInt(a[a.length-1-e]),c+=d[e%d.length]*b;return(11-c%11)%11}var MSI10=function(a){function b(a,c){return classCallCheck(this,b),possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a+mod10(a),c))}return inherits(b,a),b}(MSI),MSI11=function(a){function b(a,c){return classCallCheck(this,b),possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a+mod11(a),c))}return inherits(b,a),b}(MSI),MSI1010=function(a){function b(a,c){return classCallCheck(this,b),a+=mod10(a),a+=mod10(a),possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a,c))}return inherits(b,a),b}(MSI),MSI1110=function(a){function b(a,c){return classCallCheck(this,b),a+=mod11(a),a+=mod10(a),possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a,c))}return inherits(b,a),b}(MSI),pharmacode=function(a){function b(a,c){classCallCheck(this,b);var d=possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a,c));return d.number=parseInt(a,10),d}return inherits(b,a),createClass(b,[{key:"encode",value:function(){for(var a=this.number,b="";!isNaN(a)&&0!=a;)0==a%2?(b="11100"+b,a=(a-2)/2):(b="100"+b,a=(a-1)/2);return b=b.slice(0,-2),{data:b,text:this.text}}},{key:"valid",value:function(){return 3<=this.number&&131070>=this.number}}]),b}(Barcode),codabar=function(a){function b(a,c){classCallCheck(this,b),0===a.search(/^[0-9\-\$\:\.\+\/]+$/)&&(a="A"+a+"A");var d=possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a.toUpperCase(),c));return d.text=d.options.text||d.text.replace(/[A-D]/g,""),d}return inherits(b,a),createClass(b,[{key:"valid",value:function(){return-1!==this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/)}},{key:"encode",value:function(){for(var a=[],b=this.getEncodings(),c=0;c<this.data.length;c++)a.push(b[this.data.charAt(c)]),c!==this.data.length-1&&a.push("0");return{text:this.text,data:a.join("")}}},{key:"getEncodings",value:function(){return{0:"101010011",1:"101011001",2:"101001011",3:"110010101",4:"101101001",5:"110101001",6:"100101011",7:"100101101",8:"100110101",9:"110100101","-":"101001101",$:"101100101",":":"1101011011","/":"1101101011",".":"1101101101","+":"101100110011",A:"1011001001",B:"1001001011",C:"1010010011",D:"1010011001"}}}]),b}(Barcode),GenericBarcode=function(a){function b(a,c){return classCallCheck(this,b),possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a,c))}return inherits(b,a),createClass(b,[{key:"encode",value:function(){return{data:"10101010101010101010101010101010101010101",text:this.text}}},{key:"valid",value:function(){return!0}}]),b}(Barcode),barcodes={CODE39:CODE39,CODE128:CODE128AUTO,CODE128A:CODE128A,CODE128B:CODE128B,CODE128C:CODE128C,EAN13:EAN13,EAN8:EAN8,EAN5:EAN5,EAN2:EAN2,UPC:UPC,UPCE:UPCE,ITF14:ITF14,ITF:ITF,MSI:MSI,MSI10:MSI10,MSI11:MSI11,MSI1010:MSI1010,MSI1110:MSI1110,pharmacode:pharmacode,codabar:codabar,GenericBarcode:GenericBarcode},merge=function(a,b){return _extends({},a,b)};function linearizeEncodings(a){function b(a){if(Array.isArray(a))for(var d=0;d<a.length;d++)b(a[d]);else a.text=a.text||"",a.data=a.data||"",c.push(a)}var c=[];return b(a),c}function fixOptions(a){return a.marginTop=a.marginTop||a.margin,a.marginBottom=a.marginBottom||a.margin,a.marginRight=a.marginRight||a.margin,a.marginLeft=a.marginLeft||a.margin,a}function optionsFromStrings(a){var b=["width","height","textMargin","fontSize","margin","marginTop","marginBottom","marginLeft","marginRight"];for(var c in b)b.hasOwnProperty(c)&&(c=b[c],"string"==typeof a[c]&&(a[c]=parseInt(a[c],10)));return"string"==typeof a.displayValue&&(a.displayValue="false"!=a.displayValue),a}var defaults$1={width:2,height:100,format:"auto",displayValue:!0,fontOptions:"",font:"monospace",text:void 0,textAlign:"center",textPosition:"bottom",textMargin:2,fontSize:20,background:"#ffffff",lineColor:"#000000",margin:10,marginTop:void 0,marginBottom:void 0,marginLeft:void 0,marginRight:void 0,valid:function(){}};function getOptionsFromElement(a){var b={};for(var c in defaults$1)defaults$1.hasOwnProperty(c)&&(a.hasAttribute("jsbarcode-"+c.toLowerCase())&&(b[c]=a.getAttribute("jsbarcode-"+c.toLowerCase())),a.hasAttribute("data-"+c.toLowerCase())&&(b[c]=a.getAttribute("data-"+c.toLowerCase())));return b.value=a.getAttribute("jsbarcode-value")||a.getAttribute("data-value"),b=optionsFromStrings(b),b}function getEncodingHeight(a,b){return b.height+(b.displayValue&&0<a.text.length?b.fontSize+b.textMargin:0)+b.marginTop+b.marginBottom}function getBarcodePadding(a,b,c){var d=Math.floor;if(c.displayValue&&b<a){if("center"==c.textAlign)return d((a-b)/2);if("left"==c.textAlign)return 0;if("right"==c.textAlign)return d(a-b)}return 0}function calculateEncodingAttributes(a,b,c){for(var d=0;d<a.length;d++){var e,f=a[d],g=merge(b,f.options);e=g.displayValue?messureText(f.text,g,c):0;var h=f.data.length*g.width;f.width=Math.ceil(Math.max(e,h)),f.height=getEncodingHeight(f,g),f.barcodePadding=getBarcodePadding(e,h,g)}}function getTotalWidthOfEncodings(a){for(var b=0,c=0;c<a.length;c++)b+=a[c].width;return b}function getMaximumHeightOfEncodings(a){for(var b=0,c=0;c<a.length;c++)a[c].height>b&&(b=a[c].height);return b}function messureText(a,b,c){var d;if(c)d=c;else if("undefined"!=typeof document)d=document.createElement("canvas").getContext("2d");else return 0;d.font=b.fontOptions+" "+b.fontSize+"px "+b.font;var e=d.measureText(a).width;return e}var CanvasRenderer=function(){function a(b,c,d){classCallCheck(this,a),this.canvas=b,this.encodings=c,this.options=d}return createClass(a,[{key:"render",value:function(){if(!this.canvas.getContext)throw new Error("The browser does not support canvas.");this.prepareCanvas();for(var a,b=0;b<this.encodings.length;b++)a=merge(this.options,this.encodings[b].options),this.drawCanvasBarcode(a,this.encodings[b]),this.drawCanvasText(a,this.encodings[b]),this.moveCanvasDrawing(this.encodings[b]);this.restoreCanvas()}},{key:"prepareCanvas",value:function(){var a=this.canvas.getContext("2d");a.save(),calculateEncodingAttributes(this.encodings,this.options,a);var b=getTotalWidthOfEncodings(this.encodings),c=getMaximumHeightOfEncodings(this.encodings);this.canvas.width=b+this.options.marginLeft+this.options.marginRight,this.canvas.height=c,a.clearRect(0,0,this.canvas.width,this.canvas.height),this.options.background&&(a.fillStyle=this.options.background,a.fillRect(0,0,this.canvas.width,this.canvas.height)),a.translate(this.options.marginLeft,0)}},{key:"drawCanvasBarcode",value:function(a,c){var d,e=this.canvas.getContext("2d"),f=c.data;d="top"==a.textPosition?a.marginTop+a.fontSize+a.textMargin:a.marginTop,e.fillStyle=a.lineColor;for(var g,h=0;h<f.length;h++)g=h*a.width+c.barcodePadding,"1"===f[h]?e.fillRect(g,d,a.width,a.height):f[h]&&e.fillRect(g,d,a.width,a.height*f[h])}},{key:"drawCanvasText",value:function(a,b){var c=this.canvas.getContext("2d"),d=a.fontOptions+" "+a.fontSize+"px "+a.font;if(a.displayValue){var e,f;f="top"==a.textPosition?a.marginTop+a.fontSize-a.textMargin:a.height+a.textMargin+a.marginTop+a.fontSize,c.font=d,"left"==a.textAlign||0<b.barcodePadding?(e=0,c.textAlign="left"):"right"==a.textAlign?(e=b.width-1,c.textAlign="right"):(e=b.width/2,c.textAlign="center"),c.fillText(b.text,e,f)}}},{key:"moveCanvasDrawing",value:function(a){var b=this.canvas.getContext("2d");b.translate(a.width,0)}},{key:"restoreCanvas",value:function(){var a=this.canvas.getContext("2d");a.restore()}}]),a}(),svgns="http://www.w3.org/2000/svg",SVGRenderer=function(){function a(b,c,d){classCallCheck(this,a),this.svg=b,this.encodings=c,this.options=d,this.document=d.xmlDocument||document}return createClass(a,[{key:"render",value:function(){var a=this.options.marginLeft;this.prepareSVG();for(var b=0;b<this.encodings.length;b++){var c=this.encodings[b],d=merge(this.options,c.options),e=this.createGroup(a,d.marginTop,this.svg);this.setGroupOptions(e,d),this.drawSvgBarcode(e,d,c),this.drawSVGText(e,d,c),a+=c.width}}},{key:"prepareSVG",value:function(){for(;this.svg.firstChild;)this.svg.removeChild(this.svg.firstChild);calculateEncodingAttributes(this.encodings,this.options);var a=getTotalWidthOfEncodings(this.encodings),b=getMaximumHeightOfEncodings(this.encodings),c=a+this.options.marginLeft+this.options.marginRight;this.setSvgAttributes(c,b),this.options.background&&this.drawRect(0,0,c,b,this.svg).setAttribute("style","fill:"+this.options.background+";")}},{key:"drawSvgBarcode",value:function(a,c,d){var e,f=d.data;e="top"==c.textPosition?c.fontSize+c.textMargin:0;for(var g=0,h=0,i=0;i<f.length;i++)h=i*c.width+d.barcodePadding,"1"===f[i]?g++:0<g&&(this.drawRect(h-c.width*g,e,c.width*g,c.height,a),g=0);0<g&&this.drawRect(h-c.width*(g-1),e,c.width*g,c.height,a)}},{key:"drawSVGText",value:function(a,b,c){var d=this.document.createElementNS(svgns,"text");if(b.displayValue){var e,f;d.setAttribute("style","font:"+b.fontOptions+" "+b.fontSize+"px "+b.font),f="top"==b.textPosition?b.fontSize-b.textMargin:b.height+b.textMargin+b.fontSize,"left"==b.textAlign||0<c.barcodePadding?(e=0,d.setAttribute("text-anchor","start")):"right"==b.textAlign?(e=c.width-1,d.setAttribute("text-anchor","end")):(e=c.width/2,d.setAttribute("text-anchor","middle")),d.setAttribute("x",e),d.setAttribute("y",f),d.appendChild(this.document.createTextNode(c.text)),a.appendChild(d)}}},{key:"setSvgAttributes",value:function(a,b){var c=this.svg;c.setAttribute("width",a+"px"),c.setAttribute("height",b+"px"),c.setAttribute("x","0px"),c.setAttribute("y","0px"),c.setAttribute("viewBox","0 0 "+a+" "+b),c.setAttribute("xmlns",svgns),c.setAttribute("version","1.1"),c.setAttribute("style","transform: translate(0,0)")}},{key:"createGroup",value:function(a,b,c){var d=this.document.createElementNS(svgns,"g");return d.setAttribute("transform","translate("+a+", "+b+")"),c.appendChild(d),d}},{key:"setGroupOptions",value:function(a,b){a.setAttribute("style","fill:"+b.lineColor+";")}},{key:"drawRect",value:function(a,b,c,d,e){var f=this.document.createElementNS(svgns,"rect");return f.setAttribute("x",a),f.setAttribute("y",b),f.setAttribute("width",c),f.setAttribute("height",d),e.appendChild(f),f}}]),a}(),ObjectRenderer=function(){function a(b,c,d){classCallCheck(this,a),this.object=b,this.encodings=c,this.options=d}return createClass(a,[{key:"render",value:function(){this.object.encodings=this.encodings}}]),a}(),renderers={CanvasRenderer:CanvasRenderer,SVGRenderer:SVGRenderer,ObjectRenderer:ObjectRenderer},InvalidInputException=function(a){function b(a,c){classCallCheck(this,b);var d=possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return d.name="InvalidInputException",d.symbology=a,d.input=c,d.message="\""+d.input+"\" is not a valid input for "+d.symbology,d}return inherits(b,a),b}(Error),InvalidElementException=function(a){function b(){classCallCheck(this,b);var a=possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return a.name="InvalidElementException",a.message="Not supported type to render on",a}return inherits(b,a),b}(Error),NoElementException=function(a){function b(){classCallCheck(this,b);var a=possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return a.name="NoElementException",a.message="No element to render on.",a}return inherits(b,a),b}(Error);function getRenderProperties(a){if("string"==typeof a)return querySelectedRenderProperties(a);if(Array.isArray(a)){for(var b=[],c=0;c<a.length;c++)b.push(getRenderProperties(a[c]));return b}if("undefined"!=typeof HTMLCanvasElement&&a instanceof HTMLImageElement)return newCanvasRenderProperties(a);if(a&&"svg"===a.nodeName||"undefined"!=typeof SVGElement&&a instanceof SVGElement)return{element:a,options:getOptionsFromElement(a),renderer:renderers.SVGRenderer};if("undefined"!=typeof HTMLCanvasElement&&a instanceof HTMLCanvasElement)return{element:a,options:getOptionsFromElement(a),renderer:renderers.CanvasRenderer};if(a&&a.getContext)return{element:a,renderer:renderers.CanvasRenderer};if(a&&"object"===("undefined"==typeof a?"undefined":_typeof(a))&&!a.nodeName)return{element:a,renderer:renderers.ObjectRenderer};throw new InvalidElementException}function querySelectedRenderProperties(a){var b=document.querySelectorAll(a);if(0!==b.length){for(var c=[],d=0;d<b.length;d++)c.push(getRenderProperties(b[d]));return c}}function newCanvasRenderProperties(a){var b=document.createElement("canvas");return{element:b,options:getOptionsFromElement(a),renderer:renderers.CanvasRenderer,afterRender:function(){a.setAttribute("src",b.toDataURL())}}}var ErrorHandler=function(){function a(b){classCallCheck(this,a),this.api=b}return createClass(a,[{key:"handleCatch",value:function(a){if("InvalidInputException"!==a.name)throw a;else if(this.api._options.valid!==this.api._defaults.valid)this.api._options.valid(!1);else throw a.message;this.api.render=function(){}}},{key:"wrapBarcodeCall",value:function(a){try{var b=a.apply(void 0,arguments);return this.api._options.valid(!0),b}catch(a){return this.handleCatch(a),this.api}}}]),a}(),API=function(){},JsBarcode=function(a,b,c){var d=new API;if("undefined"==typeof a)throw Error("No element to render on was provided.");return d._renderProperties=getRenderProperties(a),d._encodings=[],d._options=defaults$1,d._errorHandler=new ErrorHandler(d),"undefined"!=typeof b&&(c=c||{},!c.format&&(c.format=autoSelectBarcode()),d.options(c)[c.format](b,c).render()),d};for(var name in JsBarcode.getModule=function(a){return barcodes[a]},barcodes)barcodes.hasOwnProperty(name)&&registerBarcode(barcodes,name);function registerBarcode(a,b){API.prototype[b]=API.prototype[b.toUpperCase()]=API.prototype[b.toLowerCase()]=function(c,d){var e=this;return e._errorHandler.wrapBarcodeCall(function(){d.text="undefined"==typeof d.text?void 0:""+d.text;var f=merge(e._options,d);f=optionsFromStrings(f);var g=a[b],h=encode$1(c,g,f);return e._encodings.push(h),e})}}function encode$1(a,b,c){a=""+a;var d=new b(a,c);if(!d.valid())throw new InvalidInputException(d.constructor.name,a);var e=d.encode();e=linearizeEncodings(e);for(var f=0;f<e.length;f++)e[f].options=merge(c,e[f].options);return e}function autoSelectBarcode(){return barcodes.CODE128?"CODE128":Object.keys(barcodes)[0]}API.prototype.options=function(a){return this._options=merge(this._options,a),this},API.prototype.blank=function(a){var b=Array(a+1).join("0");return this._encodings.push({data:b}),this},API.prototype.init=function(){if(this._renderProperties){Array.isArray(this._renderProperties)||(this._renderProperties=[this._renderProperties]);var a;for(var b in this._renderProperties){a=this._renderProperties[b];var c=merge(this._options,a.options);"auto"==c.format&&(c.format=autoSelectBarcode()),this._errorHandler.wrapBarcodeCall(function(){var b=c.value,d=barcodes[c.format.toUpperCase()],e=encode$1(b,d,c);render(a,e,c)})}}},API.prototype.render=function(){if(!this._renderProperties)throw new NoElementException;if(Array.isArray(this._renderProperties))for(var a=0;a<this._renderProperties.length;a++)render(this._renderProperties[a],this._encodings,this._options);else render(this._renderProperties,this._encodings,this._options);return this},API.prototype._defaults=defaults$1;function render(a,b,c){b=linearizeEncodings(b);for(var d=0;d<b.length;d++)b[d].options=merge(c,b[d].options),fixOptions(b[d].options);fixOptions(c);var e=a.renderer,f=new e(a.element,b,c);f.render(),a.afterRender&&a.afterRender()}"undefined"!=typeof window&&(window.JsBarcode=JsBarcode),"undefined"!=typeof jQuery&&(jQuery.fn.JsBarcode=function(a,b){var c=[];return jQuery(this).each(function(){c.push(this)}),JsBarcode(c,a,b)}),module.exports=JsBarcode;var index={name:"barcode",props:{value:{type:[Number,String],default:" "},type:{type:String,default:"canvas"},options:Object},mounted:function(){this.createBarcode()},render:function(a){return a(this.type,this.$slots.default)},methods:{createBarcode:function(){JsBarcode(this.$el,this.value||" ",this.options)}},watch:{value:function(){this.createBarcode()},options:function(){this.createBarcode()}}};export default index;
