import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    //const conn = await mongoose.connect(process.env.MONGO_URI);
    //console.log(conn.Connection.MONGO_URI);
    //console.log(`Mongodb Connected: ${conn.Connection.host}`);
    mongoose
      .connect(process.env.MONGO_URI)
      .then((conn) => {
        //console.log(conn);
        console.log(`Mongodb Connected: ${conn.connection.host}`);
      })
      .catch('db connection error');
  } catch (error) {
    console.log(`Error ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
