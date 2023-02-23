const mongoose = require('mongoose');

// Define the schema for the HotelUser entity
const hotelUserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  hotel_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true }
});

// Define the schema for the Hotel entity
const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String },
  country: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  rating: { type: Number },
  image: { type: String },
  amenities: { type: [String] },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  user_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'HotelUser', required: true }]
});

// Define the models for each entity using their respective schemas
const HotelUser = mongoose.model('HotelUser', hotelUserSchema);




// Define the schema for the Room entity
const roomSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, default: "available" },
  hotel_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }]
});

// Define the schema for the Booking entity
const bookingSchema = new mongoose.Schema({
  check_in_date: { type: Date, required: true },
  check_out_date: { type: Date, required: true },
  room_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  total_price: { type: Number, required: true }
});

// Define the models for each entity using their respective schemas
const Hotel = mongoose.model('Hotel', hotelSchema);
const Room = mongoose.model('Room', roomSchema);
const Booking = mongoose.model('Booking', bookingSchema);
