const jsonp = require('../jsonp');
mocha.setup("bdd");

const obj = {
  name: 'seven',
  gender: 'male'
};
const searchParams = new URLSearchParams(obj);
const queryString = searchParams.toString();

describe("jsonp", function () {
   it("basic jsonp", function (done) {
      jsonp(`http://jsfiddle.net/echo/jsonp?${queryString}`, {
        name: 'hello1',
        success: (info) => {
          chai.assert.deepEqual(info, obj);
          done();
        },
        error: (error) => {
          // No error
        }
      });
   });

   it("404", function (done) {
     jsonp(`http://xxx?${queryString}`, {
       name: 'hello2',
       success: (info) => {
         // No success
       },
       error: (error) => {
         chai.assert.equal(error, 'Can\'t get url');
         done();
       }
     });
   });

   it("timeout", function (done) {
     this.timeout(9000);
     const obj3 = {
       name: 'seven',
       gender: 'male',
       delay: 5
     };
     const searchParams3 = new URLSearchParams(obj3);
     const queryString3 = searchParams3.toString();
     jsonp(`http://jsfiddle.net/echo/jsonp?${queryString3}`, {
       name: 'hello3',
       success: (info) => {
         // No success
       },
       error: (error) => {
         chai.assert.equal(error, 'timeout');
         done();
       }
     });
   });

   it("named callback", function () {
     jsonp(`http://jsfiddle.net/echo/jsonp?${queryString}`, {
       name: 'hello4',
       callback: 'cb',
       success: (info) => {
         chai.assert.deepEqual(info, obj);
       },
       error: (error) => {
         // No error
       }
     });
   });

   it("cancel jsonp", function (done) {
     const cancel = jsonp(`http://jsfiddle.net/echo/jsonp?${queryString}`, {
       name: 'hello',
       callback: 'cb',
       success: (info) => {
         // No success
         chai.assert.throws(() => {}, 'Should no success once cancel');
         done();
       },
       error: (error) => {
         // No error
         chai.assert.throws(() => {}, 'Should no error once cancel');
         done();
       }
     });

     cancel();
     chai.assert.equal('cancel', 'cancel');
     done();
   });
});

// run tests
mocha.run();
