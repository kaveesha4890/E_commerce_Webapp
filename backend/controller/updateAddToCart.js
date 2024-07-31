const addToCartModel = require("../model/cartProduct")

const updateAddToCart = async(req,res)=>{
    try{
        const currentUserID = req.userId
        const addToCartProductId = req?.body?._id

        const qty = req.body.quantity

        const updateProduct = await addToCartModel.updateOne({_id : addToCartProductId},{
            ...(qty &&{quantity:qty})
        })
        res.json({
            message : "product update",
            data : updateProduct,
            error : false,
            success : true
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = updateAddToCart