/**
* Copyright 2012 Microsoft Corporation
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

require('should');
var cli = require('../cli');
var capture = require('../util').capture;

suite('cli', function(){
  suite('account', function() {       
    suite('import', function() {       
      test('should launch browser when there is no file name', function(done) {
        capture(function() {
          cli.parse('node cli.js account import data/account-credentials.publishsettings'.split(' '));
        }, function (result) {

          done();
        }); 
       });
   });
});


