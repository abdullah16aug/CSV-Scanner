const form=document.getElementById('form');
const csv_file=document.getElementById('csv_file');
const clearBtn=document.getElementById('clear');
const element = document.getElementById("container");
const copy = document.getElementById("copy");

form.addEventListener('submit',function(e){
    console.log('document submitted successfully')
    e.preventDefault()
    const input = csv_file.files[0]
    const reader = new FileReader()

    reader.onload=function(e){
       let csvRes=reader.result;
       console.log(csvRes)
       const para = document.createElement("p");
       const node = document.createTextNode(csvRes);
       para.appendChild(node);
       element.appendChild(para);
       //    console.log(text)
    }
    reader.readAsText(input)
})

clearBtn.addEventListener('click',function(e){
    console.log('cleared successfully')
    e.preventDefault()
let para=element.children[0];
element.removeChild(para)
})


