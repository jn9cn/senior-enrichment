'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'http://www.iconsdb.com/icons/preview/orange/planet-xxl.png',
    validate: {
        isUrl: true
    }
  }
})

// Previous model work below. Scrapped due to time.

// urlTitle: {
//       type: Sequelize.STRING,
//       allowNull: false,
//       unique: true
//   },
//   route: {
//     type: Sequelize.VIRTUAL,
//     get() {
//         return "campuses" + this.urlTitle;
//     }
//   }
// }, {
//     hooks: {
//         beforeValidate: campus => {
//             if (campus.name) campus.urlTitle = campus.name.replace(/\s/g, "_").replace(/\W/g, "");
//         }
//     }
// });
