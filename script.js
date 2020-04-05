let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.append(wrapper);
let buttons = document.createElement("div");
buttons.classList.add("buttons");
wrapper.append(buttons);
let start = document.createElement("button");
start.classList.add("button");
start.classList.add("start");
start.innerText="Размешать и начать";
buttons.append(start);
let stopB = document.createElement("button");
stopB.classList.add("button");
stopB.classList.add("stopB");
stopB.innerText="Стоп";
buttons.append(stopB);
let save = document.createElement("button");
save.classList.add("button");
save.classList.add("save");
save.innerText="Сохранить";
buttons.append(save);
let result = document.createElement("button");
result.classList.add("button");
result.classList.add("save");
result.innerText="Результаты";
buttons.append(result);
let textValue = document.createElement("div");
textValue.classList.add("textValue");
wrapper.append(textValue);
let moves = document.createElement("p");
moves.classList.add("moves");
moves.innerText="Ходов: 0";
textValue.append(moves);
let timeValue = document.createElement("p");
timeValue.classList.add("time");
timeValue.innerText="Время: 0 : 0";
textValue.append(timeValue);
let lines = document.createElement("div");
lines.classList.add("lines");
let firstLine = document.createElement("div");
firstLine.classList.add("line");
let secondLine = document.createElement("div");
secondLine.classList.add("line");
let thirdLine = document.createElement("div");
thirdLine.classList.add("line");
let forthLine = document.createElement("div");
forthLine.classList.add("line");
let fifthLine = document.createElement("div");
fifthLine.classList.add("line"); 
let sixthLine = document.createElement("div");
sixthLine.classList.add("line");
let seventhLine = document.createElement("div");
seventhLine.classList.add("line");
let eighthLine = document.createElement("div");
eighthLine.classList.add("line"); 
let blockSize = document.createElement("div");
blockSize.classList.add("blockSize");
let blockSizes = document.createElement("div");
blockSizes.classList.add("blockSize");
let size = document.createElement("p");
let sizes = document.createElement("p");
sizes.innerText="Другие размеры:";
let sizes3 = document.createElement("p");
sizes3.innerText="3x3";
let sizes4 = document.createElement("p");
sizes4.innerText="4x4";
let sizes5 = document.createElement("p");
sizes5.innerText="5x5";
let sizes6 = document.createElement("p");
sizes6.innerText="6x6";
let sizes7 = document.createElement("p");
sizes7.innerText="7x7";
let sizes8 = document.createElement("p");
sizes8.innerText="8x8";

let saveSeconds = 0;
let minutes = 0;
let valueMoves=0;
let array = [];
let n = 4;
let checkArr=1;
let checkStop = 0;
let startGame1=0;
let row = 0;
let column = 0;
const returnArr = JSON.parse(localStorage.getItem("saveArr"))
if(returnArr!=null){
    n = returnArr[returnArr.length-1];
    returnArr.pop();
    checkArr=0;
    valueMoves = returnArr[returnArr.length-1];
    returnArr.pop();
    minutes = returnArr[returnArr.length-1];
    returnArr.pop();
    saveSeconds = returnArr[returnArr.length-1];
    returnArr.pop();
    column = returnArr[returnArr.length-1];
    returnArr.pop();
    row = returnArr[returnArr.length-1];
    returnArr.pop();
    stopB.innerText="Продолжить";
    checkStop=1;
    startGame1=1;
    moves.innerText=`Ходов: ${valueMoves}`;
    timeValue.innerText=`Время: ${minutes} : ${saveSeconds}`;
}

function changeSize(){
    lines.classList.remove("lines3");
    lines.classList.remove("lines4");
    lines.classList.remove("lines5");
    lines.classList.remove("lines6");
    lines.classList.remove("lines7");
    if(n==4){
        lines.classList.add("lines4");
    }else if(n==3){
        lines.classList.add("lines3");
    }else if(n==5){
        lines.classList.add("lines5");
    }else if(n==6){
        lines.classList.add("lines6");
    }else if(n==7){
        lines.classList.add("lines7");
    }
}
changeSize();

size.innerText=`Размеры поля: ${n}x${n}`;
let index = 1;
function createL(){
    if(n==null || n==0){n=4;}
    for(let j=0; j<n; j++){
        let arr=[];
        for(let i=0; i<n; i++){
            let cell = document.createElement("div");
            cell.classList.add("cell");
            arr[i]= cell;
            if(index<n*n && checkArr)arr[i].innerText=index;
            index++;
            if(j==0)firstLine.append(arr[i]);
            else if(j==1)secondLine.append(arr[i]);
            else if(j==2)thirdLine.append(arr[i]);
            else if(j==3)forthLine.append(arr[i]);
            else if(j==4)fifthLine.append(arr[i]);
            else if(j==5)sixthLine.append(arr[i]);
            else if(j==6)seventhLine.append(arr[i]);
            else if(j==7)eighthLine.append(arr[i]);
        }
        array[j]=arr;
        if(j==0){
            lines.append(firstLine);
        }
        else if(j==1){
            lines.append(secondLine);
        }
        else if(j==2){
            lines.append(thirdLine);
        }
        else if(j==3){
            lines.append(forthLine);
        }
        else if(j==4){
            lines.append(fifthLine);
        }
        else if(j==5){
            lines.append(sixthLine);
        }
        else if(j==6){
            lines.append(seventhLine);
        }
        else if(j==7){
            lines.append(eighthLine);
        }
        wrapper.append(lines);
    }
    blockSize.append(size);
    blockSizes.append(sizes);
    blockSizes.append(sizes3);
    blockSizes.append(sizes4);
    blockSizes.append(sizes5);
    blockSizes.append(sizes6);
    blockSizes.append(sizes7);
    blockSizes.append(sizes8);
    wrapper.append(blockSize);
    wrapper.append(blockSizes);
}
createL();

if(returnArr!=null){
    let index = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<n;j++){
            array[i][j].innerText=returnArr[index];
            index++;
        }
    }
}


function removeL(){
    index=1;
    for(let j=0; j<n; j++){
        for(let i=0; i<n; i++){
            array[j][i].remove();
        }
    }
    firstLine.remove();
    secondLine.remove();
    thirdLine.remove();
    forthLine.remove();
    fifthLine.remove();
    sixthLine.remove();
    seventhLine.remove();
    eighthLine.remove();
    lines.remove();
    blockSize.remove();
    blockSizes.remove();
}

blockSize.append(size);
blockSizes.append(sizes);
blockSizes.append(sizes3);
blockSizes.append(sizes4);
blockSizes.append(sizes5);
blockSizes.append(sizes6);
blockSizes.append(sizes7);
blockSizes.append(sizes8);
wrapper.append(blockSize);
wrapper.append(blockSizes);

blockSizes.addEventListener('click', (e)=>{
    if(e.target.innerText.length==3){
        checkArr=1;
        removeL();
        clearInterval(interval);
        if(!checkStop){
            stopB.click();
        }
        valueMoves=0;
        minutes=0;
        seconds=0;
        saveSeconds=0;
        moves.innerText=`Ходов: ${valueMoves}`;
        timeValue.innerText=`Время: ${minutes} : ${seconds}`;
        for(let i=1; i<7; i++){
            if(blockSizes.children[i]==e.target){
                n=i+2;
            }
        }
        size.innerText=`Размеры поля: ${n}x${n}`;
        changeSize();
        createL();
        change();
    }
});


function change(){
    checkArr=1;
    for(let j=0; j<n; j++){
        for(let i=0; i<n; i++){
            let first = 0;
            let second = 0;
            let third = 0;
            let forth = 0;
            do{
            first = (n-1)*Math.random();
            first = Math.round(first);
            second = (n-1)*Math.random();
            second = Math.round(second);
            third = (n-1)*Math.random();
            third = Math.round(third);
            forth = (n-1)*Math.random();
            forth = Math.round(forth);
            } while(first!=second!=third!=forth);
            let change = array[first][second].innerText;
            array[first][second].innerText = array[third][forth].innerText;
            array[third][forth].innerText = change;
        }
    }
    for(let j=0; j<n; j++){
        for(let i=0; i<n; i++){
            if(array[j][i].innerText==''){row=j;column=i;}
        }
    }
}
if(checkArr)change();


let seconds = 0;
let startGame=0;
let past = 0;
let secondsInterval = 0;
let interval;
let now = 0;
start.addEventListener('click', ()=>{
    checkArr=1;
    if(checkStop){
        stopB.click();
    }
    saveSeconds=0;
    clearInterval(interval);
    game();
    startGame=1;
    startGame1=1;
    change();
    minutes=0;
    seconds=0;
    valueMoves=0;
    moves.innerText=`Ходов: ${valueMoves}`;
    timeValue.innerText=`Время: ${minutes} : ${seconds}`;
});

let saveMinutes = 0;
let saveMoves = 0;

stopB.addEventListener('click', ()=>{
    if(startGame1){
        if(!checkStop){
        startGame=0;
        saveSeconds=seconds;
        clearInterval(interval);
        stopB.innerText="Продолжить";
        checkStop=1;
        } else {
        startGame=1;
        stopB.innerText="Стоп";
        checkStop=0;
        game();
        }
    }
});


function game(){
    past = new Date();
    secondsInterval = 0;
    interval = setInterval(()=>{
        now = new Date();
        seconds = Math.floor((now-past)/1000);
        if((seconds+saveSeconds)%60==0){
            secondsInterval+=60;
            minutes++;
        }
        seconds-= secondsInterval-saveSeconds;
        timeValue.innerText=`Время: ${minutes} : ${seconds}`;
    },1000);
}

let check=1;
wrapper.addEventListener('click', (e)=>{
    if(startGame){
        if(e.target.className=='cell'){
            let a = e.target.innerText;
            for(let j=0; j<n; j++){
                for(let i=0; i<n; i++){
                    if(array[j][i].innerText==a){
                        
                        if(Math.abs(j-row)<=1 && Math.abs(i-column)<=1 && check && !(Math.abs(j-row)==1 && Math.abs(i-column)==1)){
                            valueMoves++;
                            check=0;
                            if(Math.abs(i-column)==1){
                                let direction = '';
                                let margin = 0;
                                let interval = setInterval(()=>{if(margin<=100){
                                    margin+=2;
                                    if((i-column)<0){
                                        direction = 'left';
                                        array[row][column].classList.add("hide");
                                        array[row][column-1].style.marginLeft=`${margin}px`;
                                        array[row][column-1].style.marginRight=`${100-margin}px`;
                                    } else if((i-column>0)){
                                        direction = 'right';
                                        array[row][column].classList.add("hide");
                                        array[row][column+1].style.marginRight=`${margin}px`;
                                        array[row][column+1].style.marginLeft=`${100-margin}px`;
                                    }
                                }else{row = j;
                                    column = i;
                                    array[row][column].style.marginLeft="0px";
                                    array[row][column].style.marginRight="0px";
                                    let change = array[j][i].innerText;
                                    if(direction=='left'){array[j][i].innerText = array[row][column+1].innerText;array[row][column+1].classList.remove("hide");array[row][column+1].innerText = change;}
                                    if(direction=='right'){array[j][i].innerText = array[row][column-1].innerText;array[row][column-1].classList.remove("hide");array[row][column-1].innerText = change;}
                                    clearInterval(interval);
                                    return;
                                    }},8);
                            }
                            if(Math.abs(j-row)==1){
                                array[row][column].classList.add("border");
                                let direction = '';
                                let margin = 0;
                                let interval = setInterval(()=>{if(margin<=100){
                                    margin+=2;
                                    if((j-row)<0){
                                        direction = 'top';
                                        array[row-1][column].style.marginTop=`${margin}px`;
                                        array[row-1][column].style.marginBottom=`${-margin}px`;
                                    } else if((j-row>0)){
                                        direction = 'bottom';
                                        array[row+1][column].style.marginBottom=`${margin}px`;
                                        array[row+1][column].style.marginTop=`${-margin}px`;
                                    }
                                }else{row = j;
                                    column = i;
                                    array[row][column].style.marginTop="0px";
                                    array[row][column].style.marginBottom="0px";
                                    let change = array[j][i].innerText;
                                    if(direction=='top'){array[j][i].innerText = array[row+1][column].innerText;array[row+1][column].classList.remove("border");array[row+1][column].innerText = change;}
                                    if(direction=='bottom'){array[j][i].innerText = array[row-1][column].innerText;array[row-1][column].classList.remove("border");array[row-1][column].innerText = change;}
                                    clearInterval(interval);
                                    return;
                                    }},8);
                            }
                            moves.innerText=`Ходов: ${valueMoves}`;
                        }
                    }
                }
            }
        }
        check=1;
    }
});

save.addEventListener('click', ()=>{
    let saveA=[];
    let index = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<n;j++){
            saveA[index] = array[i][j].innerText;
            index++;
        }
    }
    saveA.push(row);
    saveA.push(column);
    if(!checkStop) stopB.click();
    saveA.push((saveSeconds));
    saveA.push(minutes);
    saveA.push(valueMoves);
    saveA.push(n);
    const saveArr = JSON.stringify(saveA);
    localStorage.setItem("saveArr", saveArr);
});













