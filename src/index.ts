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
   var overlap_number = 0;
   var overlaping_charaters = []
   var is_partial = false;
   var after_last_letter_found_pos = 0;
 
   //Get words from URL
   var word = req.params.word;
   var root = req.params.root;
 
   //if word or root are null return 422
 
   //Split string into arrays
   var arr_word = word.split("");
   var arr_root = root.split("");
   console.log(arr_word);
   console.log(arr_root);
   console.log(arr_word.length);
   console.log(arr_root.length);
 
   if (word === null) {
     console.log("word can't be null");
     return res.status(422).json({ message: "word can't be null" });
   }
 
   if (root === null) {
     console.log("root can't be null");
     return res.status(422).json({ message: "root can't be null" });
   }
 
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
 
   for (let i = 0; i < arr_root.length; i++) {
     for (let j = after_last_letter_found_pos; j < arr_word.length; j++) {
       if (arr_root[i] === arr_word[j]) {
         //Increment overlap count
         overlap_number++;
         overlaping_charaters.push(arr_root[i])
 
         //changin j pos to look only after the first found letter, instead of re-itererating the wole array
         after_last_letter_found_pos = j+1;
         break
       }
     }
   }
 
   if (overlap_number !== arr_root.length) {
     is_partial = true;
   }
 
   return res.json({
     word: word,
     root: root,
     overlaping_charaters: overlaping_charaters,
     overlap_number: overlap_number,
     is_partial: is_partial
   });
 });
 
 
 