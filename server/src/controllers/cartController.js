import Product from '../models/productModel.js';
import Cart from '../models/cartModel.js';

const getCartPage = async (req, res) => {
    try{
        const userId = req.user.id;
        const cart = await Cart.findOne({ userId }).populate('products.productId');

        if(!cart){
            return res.render('cart', { cart: { products: [] } });
        }

        res.render('cart', { cart: cart });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Sepet yüklenemedi.', error: err.message });
    }
};

const addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.user.id;
    const quantityNumber = parseInt(quantity);
    try{
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, products: [] });
        }

        const productIndex = cart.products.findIndex(
            (p) => p.productId.toString() === productId
        );
        
        if (productIndex > -1) {
            cart.products[productIndex].quantity += quantityNumber;
            if (cart.products[productIndex].quantity <= 0){
                cart.products.splice(productIndex, 1);
            }
        } else {
            cart.products.push({ productId, quantity });
            }

            await cart.save();
            const returnUrl = req.get('Referer') || '/';
            res.redirect(returnUrl);

        } catch (err) {
            res.status(500).json({ message: 'Sepete ekleme hatası', error: err.message });
        }
    };

const removeFromCart = async (req, res) => {
    try{
        const userId = req.user._id;

        const { productId } = req.body;

        await Cart.findOneAndUpdate(
            { userId: userId },
            {
                $pull: {
                    products: { productId: productId }
                }
            }
        );

        res.redirect('/cart');

    } catch{
        console.error("Ürün silme hatası:", error);
        res.status(500).json({ error: "Ürün sepetten silinemedi." });
    }
}

export {getCartPage, addToCart, removeFromCart};