
//COLUMN HEADS
const headerA = document.getElementById('c1h-el')
const headerB = document.getElementById('c2h-el')
const headerC = document.getElementById('c3h-el')


//TEXT
const textA = document.getElementById('c1p-el')
const textB = document.getElementById('c2p-el')
const textC = document.getElementById('c3p-el')

//INPUTS
const inputA = document.getElementById('c1i-el')
const inputB = document.getElementById('c2i-el')
const inputC = document.getElementById('c3i-el')

//UNIQUE IDENTIFIER
let count = 0
//OBJECT ARRAYS
let listA = {}
let listB = {}
let listC = {}

//remove handler
const rmvButton = document.getElementById('rmv');

// const handleRemove = e => {
//     const item = e.target.closest('.item');
//
//     // Remove the listener, to avoid memory leaks.
//     item.querySelector('.remove-btn')
//         .removeEventListener('click', handleRemove);
//
//     item.parentElement.removeChild(item);
// };


function submit(){
    count += 1
    //console.log(count)
    if(inputA.value){
        const keyA = `A${count}`
        const valueA = inputA.value
        listA[keyA] = {valueA}
        //console.log(`Stored in A ${Object.keys(listA)}`)
        }
    if(inputB.value){
        const keyB = `B${count}`
        const valueB = inputB.value
        listB[keyB] = {valueB}
        //console.log(`Stored in A ${Object.keys(listA)}`)
    }
    if(inputC.value){
        const keyC = `C${count}`
        const valueC = inputC.value
        listC[keyC] = {valueC}
        //console.log(`Stored in A ${Object.keys(listA)}`)
    }
    updateListDOM()
}

function updateListDOM(){

    for (let key in listA){
        const myID = document.getElementById(`${key}`)
        if(!myID){
            const para = document.createElement(`para${key}`);
            para.id = `${key}`
            para.innerHTML = `${listA[key].valueA}`
            document.getElementById("displayListA").appendChild(para)

            // const remove = document.createElement('button');
            // remove.classList.add('remove-btn');
            // remove.textContent = 'Remove';
            // remove.addEventListener('click', handleRemove);
            // document.getElementById("displayListA").appendChild(remove);

            const br = document.createElement("br");
            br.id = `${key}`
            document.getElementById("displayListA").appendChild(br)

        }
    }

    for (let key in listB){
        const myID = document.getElementById(`${key}`)
        if(!myID){
            const para = document.createElement(`para${key}`);
            para.id = `${key}`
            para.innerHTML = `${listB[key].valueB}`
            document.getElementById("displayListB").appendChild(para)

            // const remove = document.createElement('button');
            // remove.classList.add('remove-btn');
            // remove.textContent = 'Remove';
            // remove.addEventListener('click', handleRemove);
            // document.getElementById("displayListB").appendChild(remove);

            const br = document.createElement("br");
            br.id = `${key}`
            document.getElementById("displayListB").appendChild(br)

        }
    }

    for (let key in listC){
        const myID = document.getElementById(`${key}`)
        if(!myID){
            const para = document.createElement(`para${key}`);
            para.id = `${key}`
            para.innerHTML = `${listC[key].valueC}`
            document.getElementById("displayListC").appendChild(para)

            // const remove = document.createElement('button');
            // remove.classList.add('remove-btn');
            // remove.textContent = 'Remove';
            // remove.addEventListener('click', handleRemove);
            // document.getElementById("displayListC").appendChild(remove);

            const br = document.createElement("br");
            br.id = `${key}`
            document.getElementById("displayListC").appendChild(br)

        }
    }

    //console.log(showListA)
    //textB.innerText = listB
    //textC.innerText = listC
}

