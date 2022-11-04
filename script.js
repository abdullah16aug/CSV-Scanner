const form=document.getElementById('form');
const csv_file=document.getElementById('csv_file');
const clearBtn=document.getElementById('clear');
const element = document.getElementById("container");
const copy = document.getElementById("copy");
let table = document.getElementById("demoTable");



 form.addEventListener('submit',function(e){
    console.log('document submitted successfully')
    e.preventDefault()
    const input = csv_file.files[0]
    const reader = new FileReader()
    //read csv on file pick
    reader.onload=function(e){
        let csvRes =reader.result;
        // console.log(csvRes)
        table.innerHTML = "";
        let rows = csvRes.split("\r\n");
        for (let row of rows) {
            let cols = row.match(/(?:\"([^\"]*(?:\"\"[^\"]*)*)\")|([^\",]+)/g);
            if (cols!=null) {
                let tr = table.insertRow();
                for (let col of cols) {
                    let td = tr.insertCell();
                    td.innerHTML = col.replace(/(^"|"$)/g, "");}}}
    }
    reader.readAsText(input)
 })

clearBtn.addEventListener('click',function(e){
    console.log('cleared successfully')
    e.preventDefault()
let para=element.children[0];
element.removeChild(table)
})

