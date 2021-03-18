const mongoose = require('mongoose');
const mongooseSchema = require('mongoose');
const Schema = mongooseSchema.Schema;

export interface ExhibitionInterface {
  name: string;
  start_date: string
} 

const Exhibition = mongoose.model('exhibitions', new Schema(
  { 
  name: String,
  start_date: String 
  }));

export default Exhibition;