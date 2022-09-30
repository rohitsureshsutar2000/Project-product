const express = require("express");
const bodyparser = require("body-parser");
const cors=require("cors");
const mysql = require("mysql2")


const app=express();

app.use(cors());
app.use(bodyparser.json());

// database connection
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"productdetail",
    port:3306
})
 
db.query('select * from product',(err,result,fields)=>{
    if (err){
        return console.log(err)
    }
    return console.log(result)
})

// check database connection
db.connect(err=>{
    if (err){console.log(err,'dberr');}
    console.log('database connected...');
})

app.get("/product",(req,res)=>{

    let qr= select* from;
    db.query(qr,(err,result)=>{
        if(err)
        {
            console.log(err,"errs");
        }
        if (result.length>0)
        {
            res.send({
                message:"all product data",
                data:result
            });
        }
    });
});



// single data
app.get('/product/:id', (req, res)=>{

    let gID= req.params.productid;
    
    let qr = 'select* from product where id= ${gID}';
    
    db.query(qr, (err, result)=>{
    
    if (err) {console.log(err); }
    
        if(result.length>0)
        {
            res.send({
            
            message: "get single data",
             data:result
            
            });
        
        }
        
        else
        {
            res.send({
                message: 'data not found'
            });
        }

    });
});


// post

app.post('/product', (req, res)=>{

    console.log(req.body, "createdata");
    
    let productID = req.body.productid;
    let productName = req.body.productname;
    let productType= req.body.producttype;
    let productCategory= req.body.productcategory;
    let productPrice= req.body.productprice;

    
    let qr = "insert into product (Product ID, Product Name, Product Type,Product Category,Product Price)  value('${productID}','${productName}','${productType}','${productCategory}','${productPrice}') ";
   console.log(qr,"qr") 


    db.query(qr, (err, result)=>{
    
        if(err) { console.log(err);}
        console.log(result,"result")
        res.send({
            message:"Data Inserted"
        })
    });
});

//update
app.put('/product',(req,res)=>{
    console.log(req.body,"Update Data");
    
    let productID = req.body.productid;
    let productName = req.body.productname;
    let productType= req.body.producttype;
    let productCategory= req.body.productcategory;
    let productPrice= req.body.productprice;

    let qr = "update product set productid='${productID}',productname='${productName}',producttype='${productType}', productcategory='${productCategory}', productprice='${productPrice}'"
    db.query(qr,(err,result)=>{
        if (err){console.log(err);}

        res.send({
            message:"Data"
        })
    })

});


//delete
app.delete('/product/:id', (req, res)=>{

    let productID= req.params.productid;
    
    let qr= "delete from product where productid='${productID}'";
    db.query(qr, (err, result)=>{ 
        if(err) {console.log(err);}
        
            res.send({
            
            message: 'data deleted'
            }
            )
        });
    
    });







app.listen(3000,()=>{
    console.log("server running..");
})