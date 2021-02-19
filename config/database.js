const crypto = require('crypto').randomBytes(256).toString('hex'); 









module.exports={

uri:'mongodb://localhost:27017/STP',

secret: crypto,
db :'STP' 
} 




/*





const crypto = require('crypto').randomBytes(256).toString('hex'); 








let db='STP'
module.exports={

uri:`mongodb://localhost:27017/${db}`,

secret: crypto,
db 
} 







*/ 