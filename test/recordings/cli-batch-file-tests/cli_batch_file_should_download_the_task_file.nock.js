// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForFileTests/tasks/xplatTask/files/wd%2FtaskOut.txt?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "test \r\n", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  'last-modified': 'Mon, 11 Apr 2016 18:52:27 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '765b8f16-663c-425a-ab09-b487c0e38d74',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'dfec4ca8-1000-4c1c-af8c-f55550ef32f5',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Mon, 11 Apr 2016 18:52:27 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Fjstesteastus2.eastus2.batch.azure.com%2Fjobs%2FxplatJobForFileTests%2Ftasks%2FxplatTask%2Ffiles%2Fwd%2FtaskOut.txt',
  date: 'Mon, 11 Apr 2016 18:52:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForFileTests/tasks/xplatTask/files/wd%2FtaskOut.txt?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "test \r\n", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  'last-modified': 'Mon, 11 Apr 2016 18:52:27 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '765b8f16-663c-425a-ab09-b487c0e38d74',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'dfec4ca8-1000-4c1c-af8c-f55550ef32f5',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Mon, 11 Apr 2016 18:52:27 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Fjstesteastus2.eastus2.batch.azure.com%2Fjobs%2FxplatJobForFileTests%2Ftasks%2FxplatTask%2Ffiles%2Fwd%2FtaskOut.txt',
  date: 'Mon, 11 Apr 2016 18:52:34 GMT',
  connection: 'close' });
 return result; }]];