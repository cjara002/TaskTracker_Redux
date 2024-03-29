const storeJs = require('./store.js');
export default class Api {
    constructor(options) {
      this.tableName = options.tableName ? options.tableName : 'Api';    
      this.delay = options.delay ? options.delay : 0;                         
      this.empty = options.fields;                                            
      this.empty._id = null;                                                  
    }

    resolveWithDelay(resolve, data) {
        if (this.delay > 0) {
          window.setTimeout(function() {
            resolve(data);
          }, this.delay);
        } else {
          resolve(data);
        }
      }

      getDb() {
        let dbContent = storeJs.get(this.tableName);
        if (!dbContent) {
          this.commitDb();
        };
        return dbContent;
      }

      commitDb(dbContent = []) {
        storeJs.set(this.tableName, dbContent);
      }
      // getAll() {
      //   return new Promise((resolve, reject) => {
      //     this.resolveWithDelay(resolve, this.getDb());
      //   });
      // }
    
      // get(id) {
      //   return new Promise((resolve, reject) => {
      //     if (!id) {
      //       // return a new empty one
      //       this.resolveWithDelay(resolve, this.empty);
      //     } else {
      //       let dbContent = this.getDb();
      //       // eslint-disable-next-line no-undef
      //       this.resolveWithDelay(resolve, _.find(dbContent, ['_id', id]));
      //     }
      //   });
      // }
    
      // remove(id) {
      //   return new Promise((resolve, reject) => {
      //     let dbContent = this.getDb();
      //     if (id) {
      //       // eslint-disable-next-line no-undef
      //       let index = _.findIndex(dbContent, ['_id', id]);
      //       if (index > -1) {
      //         dbContent.splice(index, 1);
      //       }
      //     }
    
      //     this.commitDb(dbContent);
    
      //     // return the new db
      //     this.resolveWithDelay(resolve, dbContent);
      //   });
      // }
    
      save(values) {
        debugger;
        return new Promise((resolve, reject) => {
          let dbContent = this.getDb();
          let item = null;
    
          // adding
          if (!values._id) {
            let newId = 1;
            if (dbContent.length > 0) {
              let maxIdDevice = dbContent.reduce((prev, current) => (prev.y > current.y) ? prev : current);
              newId = 1 + maxIdDevice._id;
            }
    
            item = { ...values, _id: newId};
            dbContent.push(item);
    
          } 
          // else {  // saving
          //   // eslint-disable-next-line no-undef
          //   item = _.find(dbContent, ['_id', values._id]);
          //   if (item) {
          //     // update current values by new ones
          //     for (var prop in values) {
          //       if (values.hasOwnProperty(prop)) {
          //         item[prop] = values[prop];
          //       }
          //     }
          //   }
          // }
    
          this.commitDb(dbContent);
          this.resolveWithDelay(resolve, item);
    
        });
    
      }
    
    }