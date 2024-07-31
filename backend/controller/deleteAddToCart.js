const addToCartModel = require("../model/cartProduct")

const deleteAddToCart = async(req,res)=>{
    try{
        const currentUserId = req.userId
        const addToCartProductId = req.body._id

        const deleteProduct = await addToCartModel.deleteOne({_id:addToCartProductId})

        res.json({
            message : "Product Delete from cart ",
            error : false,
            success : true,
            data : deleteProduct
        })

    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}
module.exports = deleteAddToCart