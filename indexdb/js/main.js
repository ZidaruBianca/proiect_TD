
import productDB, {
    bulkcreate,
    getData,
    createElement
} from './Module.js';

//baza de date
let db = productDB("ChocolateFactory", {
    product : '++id, chocolateName, producerName, chocoType, price, netWeight, stock'
});

// input tags
const productid = document.getElementById("productid");
const productName = document.getElementById("productName");
const producerName = document.getElementById("producerName");
const chocolateType = document.getElementById("chocolateType");
const price = document.getElementById("price");
const weight = document.getElementById("weight");
const stock = document.getElementById("stock");

// buttons
const btncreate = document.getElementById("btn-create");
const btnread = document.getElementById("btn-read");
const btnupdate = document.getElementById("btn-update");
const btndelete = document.getElementById("btn-delete");

// insert value using create button
btncreate.onclick=(event) =>{
    console.log(productName.value)
    let flag = bulkcreate(db.product,{
        chocolateName : productName.value, 
        producerName : producerName.value,
        chocoType : chocolateType.value,
        price : price.value,
        netWeight : weight.value,
        stock : stock.value
    })
    console.log(flag);

    productName.value = producerName.value = chocolateType.value = price.value = weight.value = stock.value = "";
    getData(db.product,(data)=>{
        productid.value = data.id + 1 || 1;
    });
}

//create event on btn read button
btnread.onclick = table;

function table(){
    const tbody = document.getElementById("tbody");

    while(tbody.hasChildNodes()){
        tbody.removeChild(tbody.firstChild);
    }


    getData(db.product,(data)=>{
        if(data){
            createElement("tr",tbody,tr=>{
                for(const value in data){
                    createElement("td",tr,td=>{
                        td.textContent = data[value];
                    })
                }
                createElement("td",tr,td=>{
                    createElement("i",td,i=>{
                        i.className += "fas fa-edit btnedit";
                    })
                })
                createElement("td",tr,td=>{
                    createElement("i",td,i=>{
                        i.className += "fas fa-trash-alt btndelete";
                    })
                })
            })
        }
    })

}