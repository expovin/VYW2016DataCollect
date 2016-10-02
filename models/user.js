var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var passportLocalMongoose = require('passport-local-mongoose');


var choice = new Schema({
    alt : {
       type: String
    },
    id: {
      type: Number
    },
    img : {
      type: String
    },
    numq : {
      type: String
    },
    value : [Number,Number,Number,Number]
});


var question = new Schema({
    id: {
      type: Number
    },
    text : {
       type: String
    },
    QRCode : {
      type : String
    },
    choices : [choice]
});


var User = new Schema({
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    Company : {
      type : String,
    },
    QRCode : {
      type : String,
      required : true
    },
    shortCode : {
      type : String,
      required : true
    },
    Profile : {
      type : String
    },
    Phone : {
      type : String
    },
    Account : {
      type : String
    },
    ContactOwner : {
      type : String
    },
    Sal : {
      type : String
    },
    MemberFirstAssociatedDate : {
      type : String
    },
    MemberType : {
      type : String
    },
    MemberStatusUpdateDate : {
      type : String
    },
    MemberStatus : {
      type : String
    },
    ContactId : {
      type : String
    },
    Email : {
      type : String
    },
    CampaignName : {
      type : String
    },
    Address : {
      City : { type : String },
      CAP : { type : String},
      Country : {type : String},
      Prov : {type : String},
      Line1 : {type : String},
      Line2 : {type : String},
      Line3 : {type : String},
      Line4 : {type : String}
    },
    Survey : {
      title : {
        type : String
      },
      questions : [question]
    }
}, {
    timestamps: true
});


User.methods.getName = function() {
    return (this.firstname + ' ' + this.lastname);
};

//User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);