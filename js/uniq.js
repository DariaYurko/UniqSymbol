/////////////////////////////////////////////////////////////////////////////////////////
function getParseText(text) {
   let textWithoutSigns = text.replace(/[^а-яА-Яa-zA-Z]/gm, ' ');
   let arrayOfWords = textWithoutSigns.split(' ');
   return arrayOfWords;
}
//////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////
function getUniqueSymbol(word) {
   let uniqueChar = '';
   for (let index = 0; index < word.length; index++) {
      if (word.indexOf(word[index]) === word.lastIndexOf(word[index])) {    
         uniqueChar = word[index];
         return uniqueChar;
      }
   }
   return uniqueChar;
}
/////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////// очистка текстового поля при нажатии на кнопку/////////////////
function cleanTextArea() {                                                       
   document.getElementById('text').value = '';
   document.getElementById('strOfuniq').lastChild.innerText = ' ';
   document.getElementById('firstUniqSymb').lastChild.innerText = ' ';
}
///////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////
function runProgram() {
   let firstUniqChar;
   let strOfUniqChar;
   let arrayOfUniqChar = [];
   let sometext = document.getElementById('text').value;
   let arrayOfWords = getParseText(sometext);

   for (let i = 0; i < arrayOfWords.length; i++) {
      let uniqSymbol;
      if (arrayOfWords[i] === '') {
         continue;
      } else {   
         uniqSymbol = getUniqueSymbol(arrayOfWords[i]);
         arrayOfUniqChar.push(uniqSymbol);
      } 
   }

   strOfUniqChar = arrayOfUniqChar.join('');
   firstUniqChar = getUniqueSymbol(strOfUniqChar);

   if (strOfUniqChar.length <= 0) {
      strOfUniqChar = 'отриманий набір символів не містить унікальних'
      firstUniqChar = 'відсутній'
   } 
   if (!firstUniqChar) {
      firstUniqChar = 'відсутній'
   }

   document.getElementById('strOfuniq').lastChild.innerText = strOfUniqChar;
   document.getElementById('firstUniqSymb').lastChild.innerText = firstUniqChar;
}
///////////////////////////////////////////////////////////////////////////////////////////////

