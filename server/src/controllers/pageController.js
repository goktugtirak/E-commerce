import Product from '../models/productModel.js';

const getIndexPage = async (req,res) => {
    try{
        const products = await Product.find();
        res.render('index',{
            products: products,
            user: req.user
        });
    }catch(error){
        console.error(error);
        res.status(500).send('Sunucu Hatası');
    }
        console.log('REQUEST USER:::', req.user);
}

export {getIndexPage}