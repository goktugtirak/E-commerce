import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGO_URI, {})
    .then(() => console.log('MongoDB bağlantısı başarılı!'))
	.catch((err) => console.log('MongoDB bağlantı hatası: ', err));
};

export default connect;