const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServicesSchema = new Schema(
  {

    SERVICE_NAME: {
      type: String,
      required: true
    },

    STATE: {
      type: String,
      required: true,
    },

    TYPE: String

  }

);

const ServiceTypesSchema = new Schema(
  {
    Windows: [
      {
        TC: [ServicesSchema],

        AW: [ServicesSchema],

        DB: [ServicesSchema],

        _id: false
      },
    ]
  },
);

module.exports = mongoose.model("ServiceType", ServiceTypesSchema);