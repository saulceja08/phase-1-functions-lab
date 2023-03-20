// Code your solution in this file!

const blocks = 42;

function distanceFromHqInBlocks(num1){
    if(num1 >= blocks){
        return num1 - blocks;
    }
    else if(num1<= blocks){
        return blocks - num1;
    }
}

function distanceFromHqInFeet(endBlock){
    if(endBlock >= blocks){
        return (endBlock- blocks)*264;
    }
    else if(endBlock<= blocks){
        return (blocks - endBlock)*264;
    }
}

function distanceTravelledInFeet(startDistance, endDistance){
    if(startDistance>=endDistance){
        return (startDistance-endDistance)*264
    }
    else if(startDistance<=endDistance){
        return (endDistance-startDistance)*264
    }
}

function calculatesFarePrice(start, destination){
    let distance = Math.abs(destination - start)*264;

    if(distance <= 400){
        return 0;
    }
    else if(distance > 400 && distance <= 2000){
        return (distance-400)*0.02;
    }
    else if(distance > 2000 && distance <= 2500){
        return 25;
    }
    else{
        return "cannot travel that far"
    }
    
    
}

distanceFromHqInFeet()
distanceFromHqInBlocks()
distanceTravelledInFeet()
calculatesFarePrice()