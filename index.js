// Code your solution in this file!
function distanceFromHqInBlocks(block){
  if(block<42){
    return 42-block;
  }
  else if(block>42){
    return block-42;
  }
}

function distanceFromHqInFeet(block1, block2){
  if(block1>block2){
    return (block1 - block2)*264;
  }
  else if(block2>block1){
    return (block2 - block1)*264;
  }
  
}