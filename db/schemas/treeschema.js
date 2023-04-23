const mongoose = require('mongoose')


// DEFINE A SCHEMA
const Schema = mongoose.Schema

const treeSchema = new Schema(
    {
        name: Schema.Types.Mixed,
        parent: Schema.Types.Mixed,
        married: Schema.Types.String,
        spouse: Schema.Types.String,
        children: Schema.Types.Mixed
      }
)
module.exports = {treeSchema}