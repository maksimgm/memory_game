// # 1...add random images to table (30min)...25min
// target the table tag
// generate an array with all the pictures.
// randomize the array using shuffle
// add a class to html which pushes the array into td tags
// when pushed make them hidden in css

// make a css class which displays the elements, on click

// # 2...makes images viewable when clicked (30min)...lik 4 hours ^o^
// make event click which changes image to viewable.aka take out hidden
// look for matches based on the array... 
// store values of the array that match, and keep card faced up
// use conditions to check for truth value, else, change class to hidden again...

// add counter which only allows user to use two clicks... increment

// # 3... reset the board (30min)
// reset board targeting button
// reset the array, and well as the matches

// # 4... keeps score (30min)
// add player display which tracks the amout of pairs made...
// add one for every pair made

var image = ["angel","angel","doc","doc","hearts","hearts","kisses","kisses","nervous","nervous","tounge","tounge","wise","wise","smug","smug"];
var newImg;
var memoryBoxes = document.getElementsByTagName('td');
var winningCombo=[];

//array to score objects left
window.onload = function() {
  newImg = imageRandomizer(image);
  classAdder();


};

function imageRandomizer(img){
  newImg = _.shuffle(img);
  return newImg;
}

// function classAdder(){
// }
// memoryBoxes[i].classList.add("hide");
// var counter = 0;

var firstMoveOfTurn = {};
firstMoveOfTurn.currentWord = "";
function classAdder(){
  for(var i=0;i<memoryBoxes.length; i++){
    memoryBoxes[i].select = newImg[i];
    memoryBoxes[i].val = i;
    memoryBoxes[i].addEventListener('click',function(){
      console.log("THIS--->>>>",this);
    // does not have a select class
      if(firstMoveOfTurn.currentWord===""){
        this.classList.add(this.select);
        firstMoveOfTurn.currentWord = this.select;
        firstMoveOfTurn.selectIndex = this.val;
      }else {
          this.classList.add(this.select);
          if(firstMoveOfTurn.currentWord === this.select){
            //check if 2nd clicked box has the current word
            console.log("|^._.^|");
            this.classList.add(this.select);
          }else{
            // set timeout to let second selection display...
            this.classList.remove(this.select);
            
            memoryBoxes[firstMoveOfTurn.selectIndex].classList.remove(firstMoveOfTurn.currentWord);
          }
        //if not flip both back

        //flip back the memoryBox with index saved in selectIndex
        //clear current word and select index
      //if so 
        //matching flow
      firstMoveOfTurn.currentWord = "";
      firstMoveOfTurn.selectIndex = "";
    }
  
  });
}
}
// var winningMatch = [["angel","angel"],["doc","doc"],["hearts","hearts"],["kisses","kisses"],["nervous","nervous"],["tounge","tounge"]];

// // storing memory values

// var memoryArr = [1,1,2,2,3,3,4,4,5,5,6,6];
//  // target css elements using javascript
// for(var i = 1, j = 0; i <= memoryBoxes.length; i+=2, j++){
//   memoryBoxes[i-1].classList.add("selected"+j);
//   memoryBoxes[i].classList.add("selected"+j);
// }
// var memoryValues = {};
// // add counter. when...when counter reaches 2, reset to 0
// var boxsFlipped = 0;

// var firstClick;
// allcards.eventlisten("click", function() {
//   firstClick = this;
//   allcards.removeeventlisten("click", 
// }
// How do you assign different images to row class?
// Would you use key value pairs?


// Add initial shuffle
// add blank score
// make array using the html td properties


// add event listener which listens for clicks... on td
// if key:value pairs match then stay flipped (condition)
// saves div class to a variable


// add css flipping animation


// reset button which shuffles and...
// resets score