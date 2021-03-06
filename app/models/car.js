/** 
 * Mongoose Schema for the Entity Car
 * @author Lin Zhai
 * @version 0.0.1
 * 
 * @Oct. 17th : add comments according review feedback, define car Schema
 * 
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CarSchema   = new Schema({
//     make: String,
//     model: String,
//     license: String,
//     doorCount: Number,
//     driver: { type: Schema.Types.ObjectId, ref: 'Driver' }
// });
    driver: { type: Schema.Types.ObjectId, ref: 'Driver' },
    license: {type: String, maxlength: 10, required: true},
    doorCount: {type: Number, min: 1, max: 8, required: true, trim: true },      
    make: {type: String, maxlength: 8, required: true},
    model: {type: String, maxlength: 18, required: true},
});

module.exports = mongoose.model('Car', CarSchema);