const adminTokenCheckController = (req,res) => {
    try {
        res.json({
            response : true,
            message : "Valid Token"
        })
    } catch(err) {
        res.json({
            response : false,
            message : "Something went wrong !!"
        })
    }
}


module.exports = {
     adminTokenCheckController,
}