// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/CliGtTestVnet8230/gateway')
  .reply(200, "<Gateway xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><GatewayType>DynamicRouting</GatewayType><LastEvent><Id>23002</Id><Message>Successfully created a gateway for the following virtual network: CliGtTestVnet8230</Message><Timestamp>2015-06-26T06:42:42.5470206Z</Timestamp></LastEvent><State>Provisioned</State><VIPAddress>191.236.122.61</VIPAddress><DefaultSites/><GatewaySize>Default</GatewaySize><GatewayId>7ab28cbc-729d-43a8-8ecb-a29a140ef919</GatewayId></Gateway>", { 'cache-control': 'no-cache',
  'content-length': '525',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '10f6233cc818b16da4892c47a050acd0',
  date: 'Fri, 26 Jun 2015 06:43:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/CliGtTestVnet8230/gateway')
  .reply(200, "<Gateway xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><GatewayType>DynamicRouting</GatewayType><LastEvent><Id>23002</Id><Message>Successfully created a gateway for the following virtual network: CliGtTestVnet8230</Message><Timestamp>2015-06-26T06:42:42.5470206Z</Timestamp></LastEvent><State>Provisioned</State><VIPAddress>191.236.122.61</VIPAddress><DefaultSites/><GatewaySize>Default</GatewaySize><GatewayId>7ab28cbc-729d-43a8-8ecb-a29a140ef919</GatewayId></Gateway>", { 'cache-control': 'no-cache',
  'content-length': '525',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '10f6233cc818b16da4892c47a050acd0',
  date: 'Fri, 26 Jun 2015 06:43:19 GMT',
  connection: 'close' });
 return result; }]];