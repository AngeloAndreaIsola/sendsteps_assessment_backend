/**
 * Required External Modules
 */
const app = require('express')()
const cors = require('cors')
import { Request, Response } from 'express'
export default app

/**
 * App Variables
 */
const PORT = 8080


/**
 *  App Configuration
 */

app.use(cors())

/**
 * Server Activation
 */
app.listen(
  PORT,
  () => console.log('sendsteps_assessment_backend API live on: http://localhost:' + PORT)
)


app.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'Hello World, this is my sendsteps assesment' });
});



app.get('/word-pattern/:word/:root', (req: Request, res: Response) => {
  //  var overlap_number = 0;
  //  var overlaping_charaters = []
  //  var is_partial = false;
  //  var after_last_letter_found_pos = 0;
  //  var after_last_letter_found_pos_cleaning = 0;

  var root = ''
  var word = ''
  var order_number

  //Get words from URL
  //  var word1 = req.params.word;
  //  var word2 = req.params.root;

  var word = req.params.word;
  var root = req.params.root;

  //Split string into arrays
  //  var arr_word = word.split("");
  //  var arr_root = root.split("");
  //  console.log('word '+ arr_word);
  //  console.log('root '+ arr_root);
  //  console.log(arr_word.length);
  //  console.log(arr_root.length);

  if (word === null) {
    console.log("word can't be null");
    return res.status(422).json({ message: "word can't be null" });
  }

  if (root === null) {
    console.log("root can't be null");
    return res.status(422).json({ message: "root can't be null" });
  }



  //    var word = "client";
  // var root = "ice";

  var result = longestSubseq(word, root);
  let overlap_number = result.length;
  let is_partial = true;
  if (overlap_number === word.length || overlap_number === root.length) {
    is_partial = false;
  }




  return res.json({
    word: word,
    root: root,
    overlaping_charaters: result,
    overlap_number: overlap_number,
    is_partial: is_partial
  });




  //Itirate over the array to find patterns
  //Example with device - ice
  /*
    searching for 'i'
    i=0, j=0
    i=0, j=1
    i=0, j=2
    i=0, j=3
    'i' found, will keep searching only after the 'i'
 
    searching for 'c'
    i=1, j=4
    'c' found, will keep searching only after the 'd'
 
    searching for 'e'
    i=2, j=5
    'e' found, will keep searching only after the 'e'
  */
  //  for (let i = 0; i < arr_root.length; i++) {
  //    for (let j = after_last_letter_found_pos; j < arr_word.length; j++) {



  // for (let i=0; i<arr_word.length; i++){

  //   for(let j=after_last_letter_found_pos; j< arr_root.length; j++){



  //      console.log('(word[i] === root[j]) ' + arr_word[i] + ' === ' + arr_root[j] +': ' +(arr_root[j] === arr_word[i]));
  //      if (arr_root[j] === arr_word[i]) {
  //        //Increment overlap count
  //        overlap_number++;
  //        //overlaping_charaters.push(arr_root[i])
  //        overlaping_charaters.push(arr_word[i])

  //        //changin j pos to look only after the first found letter, instead of re-itererating the wole array
  //        after_last_letter_found_pos = j+1;

  //        console.log('letter found: ' + arr_root[j]);
  //        console.log('overlap number: ' + overlap_number);
  //        console.log('after_last_letter_found_pos: ' + after_last_letter_found_pos);




  //      }
  //    }

  //  }


  // for (let i = 0; i <  arr_word.length; i++) {
  //   for (let j = 0; j < arr_root.length; j++) {
  //     console.log(arr_word[i] +' : ' + arr_root[j] + ' - '+ (arr_word[i] === arr_root[j]))

  //      if (arr_root[j] === arr_word[i]) {
  //          overlap_number++;

  //          let item = {
  //           'char': arr_word[i], 
  //           'position_word': i,
  //           'position_root': j,

  //          }
  //          overlaping_charaters.push(item)

  //         // overlaping_charaters.push(arr_word[i])

  //          after_last_letter_found_pos = j+1;

  //          console.log('letter found: ' + arr_root[j] + ' in position ' + j);
  //          console.log('overlap number: ' + overlap_number);
  //          console.log('after_last_letter_found_pos: ' + after_last_letter_found_pos);

  //          break
  //      }

  //   }
  // }



  // console.log('**********************************************************************************');

  // console.log('cleaning the matches');

  // //var result = cleanOverlappinCharFromDuplicates(overlaping_charaters, arr_root)







  // console.log('----------------------------------------------------------');

  //  if (overlap_number !== arr_root.length) {
  //    is_partial = true;
  //  }

  // //  return res.json({
  // //    word: word,
  // //    root: root,
  // //    overlaping_charaters: overlaping_charaters,
  // //    overlap_number: overlap_number,
  // //    is_partial: is_partial
  // //  });

});

function cleanOverlappinCharFromDuplicates(arr_word: string[] = [], arr_root: string[] = []) {
  var last_letter_found_pos = 0;
  var overlaping_charaters = []

  console.log('overlapping_chararters: ' + arr_word);
  console.log('root: ' + arr_root);



  // //Get words from URL
  // var word = "orne";
  // var root = "rhinoceros";

  // //Split string into arrays
  // var arr_word = word.split("");
  // var arr_root = root.split("");


  // for (let i = 0; i < arr_root.length; i++) {
  //   for (let j = last_letter_found_pos; j < arr_word.length; j++) {
  //     if (arr_root[i] === arr_word[j]) {
  //       overlaping_charaters.push(arr_root[i])
  //       last_letter_found_pos = j+1;
  //     }
  //   }
  // }
  // return overlaping_charaters

  return arr_word
}

function longestSubseq(s1: string, s2: string, s1StartIdx = 0, s2StartIdx = 0) {
  const results = [];

  for (let s1Idx = s1StartIdx; s1Idx < s1.length; s1Idx++) {
    const s1Char = s1[s1Idx];
    const s2Idx = s2.indexOf(s1Char, s2StartIdx);
    let result = [];
    if (s2Idx !== -1) {
      result.push(s1Char, ...longestSubseq(s1, s2, s1Idx + 1, s2Idx + 1));
    }
    results.push(result);
  }

  const findLongestResult = findLongest(results);

  console.log("longest " + findLongestResult.longest.join(""));
  return findLongestResult.longest.join("");
}

function findLongest(arr: any) {
  let longest = [];
  //let equal_length = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    let candidate = arr[i];
    if (candidate.length > longest.length) {
      longest = candidate;
    }
  }

  return {
    longest: longest,
    //equal_length: equal_length
  };
}

