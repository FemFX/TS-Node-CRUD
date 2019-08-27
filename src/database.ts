import mongoose from 'mongoose';

export default async function connect() {
  await mongoose
    .connect(
      'mongodb+srv://Ivan:123123951@crud-app-vqrsh.mongodb.net/test?retryWrites=true&w=majority',
      { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
}
