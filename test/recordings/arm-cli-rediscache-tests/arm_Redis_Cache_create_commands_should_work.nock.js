// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '00977cdb-163f-435f-9c32-39ec8ae61f4d',
    name: 'node',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplatTestCacheRG';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1665?api-version=2015-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Cache/Redis/xplatTestCache1665' under resource group 'xplatTestCacheRG' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '3929606a-36ef-49c5-84f5-c09ae47f5b76',
  'x-ms-correlation-request-id': '3929606a-36ef-49c5-84f5-c09ae47f5b76',
  'x-ms-routing-request-id': 'WESTUS:20151106T043326Z:3929606a-36ef-49c5-84f5-c09ae47f5b76',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 06 Nov 2015 04:33:26 GMT',
  connection: 'close',
  'content-length': '160' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1665?api-version=2015-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Cache/Redis/xplatTestCache1665' under resource group 'xplatTestCacheRG' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '3929606a-36ef-49c5-84f5-c09ae47f5b76',
  'x-ms-correlation-request-id': '3929606a-36ef-49c5-84f5-c09ae47f5b76',
  'x-ms-routing-request-id': 'WESTUS:20151106T043326Z:3929606a-36ef-49c5-84f5-c09ae47f5b76',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 06 Nov 2015 04:33:26 GMT',
  connection: 'close',
  'content-length': '160' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1665?api-version=2015-08-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1665\",\"location\":\"West US\",\"name\":\"xplatTestCache1665\",\"type\":\"Microsoft.Cache/Redis\",\"tags\":{},\"properties\":{\"provisioningState\":\"Creating\",\"redisVersion\":\"3.0\",\"sku\":{\"name\":\"Standard\",\"family\":\"C\",\"capacity\":1},\"enableNonSslPort\":false,\"redisConfiguration\":{\"maxmemory-policy\":\"allkeys-lru\",\"maxclients\":\"1000\",\"maxmemory-reserved\":\"50\",\"maxmemory-delta\":\"50\"},\"accessKeys\":{\"primaryKey\":\"KqgVqcgNf2TdgOHGMqPgqYs0jwW9i5KVgDeIT5pM4Uo=\",\"secondaryKey\":\"EntWaKkX2qGtpZ1pf5yxi4YU8dB5h0siYXZykn3jf4U=\"},\"hostName\":\"xplatTestCache1665.redis.cache.windows.net\",\"port\":6379,\"sslPort\":6380}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '722',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://prod-rp-wus.cacheinfra.windows.net:10225/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1665',
  'x-ms-request-id': 'eb4f22e6-92bc-4d6d-8572-07bb4a34a339',
  'x-rp-server-mvid': '34bb3c7e-5d41-4769-9a39-f21a2e547245',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'df03c645-3248-44b9-8ae3-eb4ab0243f08',
  'x-ms-routing-request-id': 'WESTUS:20151106T043329Z:df03c645-3248-44b9-8ae3-eb4ab0243f08',
  date: 'Fri, 06 Nov 2015 04:33:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1665?api-version=2015-08-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1665\",\"location\":\"West US\",\"name\":\"xplatTestCache1665\",\"type\":\"Microsoft.Cache/Redis\",\"tags\":{},\"properties\":{\"provisioningState\":\"Creating\",\"redisVersion\":\"3.0\",\"sku\":{\"name\":\"Standard\",\"family\":\"C\",\"capacity\":1},\"enableNonSslPort\":false,\"redisConfiguration\":{\"maxmemory-policy\":\"allkeys-lru\",\"maxclients\":\"1000\",\"maxmemory-reserved\":\"50\",\"maxmemory-delta\":\"50\"},\"accessKeys\":{\"primaryKey\":\"KqgVqcgNf2TdgOHGMqPgqYs0jwW9i5KVgDeIT5pM4Uo=\",\"secondaryKey\":\"EntWaKkX2qGtpZ1pf5yxi4YU8dB5h0siYXZykn3jf4U=\"},\"hostName\":\"xplatTestCache1665.redis.cache.windows.net\",\"port\":6379,\"sslPort\":6380}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '722',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://prod-rp-wus.cacheinfra.windows.net:10225/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1665',
  'x-ms-request-id': 'eb4f22e6-92bc-4d6d-8572-07bb4a34a339',
  'x-rp-server-mvid': '34bb3c7e-5d41-4769-9a39-f21a2e547245',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'df03c645-3248-44b9-8ae3-eb4ab0243f08',
  'x-ms-routing-request-id': 'WESTUS:20151106T043329Z:df03c645-3248-44b9-8ae3-eb4ab0243f08',
  date: 'Fri, 06 Nov 2015 04:33:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1999?api-version=2015-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Cache/Redis/xplatTestCache1999' under resource group 'xplatTestCacheRG' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '2da7f97b-fb5f-40ea-91b1-56bfa9577dd6',
  'x-ms-correlation-request-id': '2da7f97b-fb5f-40ea-91b1-56bfa9577dd6',
  'x-ms-routing-request-id': 'WESTUS:20151106T043329Z:2da7f97b-fb5f-40ea-91b1-56bfa9577dd6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 06 Nov 2015 04:33:29 GMT',
  connection: 'close',
  'content-length': '160' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1999?api-version=2015-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Cache/Redis/xplatTestCache1999' under resource group 'xplatTestCacheRG' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '2da7f97b-fb5f-40ea-91b1-56bfa9577dd6',
  'x-ms-correlation-request-id': '2da7f97b-fb5f-40ea-91b1-56bfa9577dd6',
  'x-ms-routing-request-id': 'WESTUS:20151106T043329Z:2da7f97b-fb5f-40ea-91b1-56bfa9577dd6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 06 Nov 2015 04:33:29 GMT',
  connection: 'close',
  'content-length': '160' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1999?api-version=2015-08-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1999\",\"location\":\"West US\",\"name\":\"xplatTestCache1999\",\"type\":\"Microsoft.Cache/Redis\",\"tags\":{},\"properties\":{\"provisioningState\":\"Creating\",\"redisVersion\":\"3.0\",\"sku\":{\"name\":\"Basic\",\"family\":\"C\",\"capacity\":2},\"enableNonSslPort\":true,\"redisConfiguration\":{\"maxmemory-policy\":\"allkeys-random\",\"maxclients\":\"2000\",\"maxmemory-reserved\":\"100\",\"maxmemory-delta\":\"100\"},\"accessKeys\":{\"primaryKey\":\"1i+hRi5W9L7nWkhKmpIy12FpU3aCdkF0ldFhpcfskD4=\",\"secondaryKey\":\"68J27bm+8S4OqhpUpe3l29LpXg58j+vRpsE084Tea7k=\"},\"hostName\":\"xplatTestCache1999.redis.cache.windows.net\",\"port\":6379,\"sslPort\":6380}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '723',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://prod-rp-wus.cacheinfra.windows.net:10225/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1999',
  'x-ms-request-id': '5754c29b-7bec-40ad-b038-743676dcaf6f',
  'x-rp-server-mvid': '34bb3c7e-5d41-4769-9a39-f21a2e547245',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '464b31c0-6569-4000-9513-74da17396308',
  'x-ms-routing-request-id': 'WESTUS:20151106T043332Z:464b31c0-6569-4000-9513-74da17396308',
  date: 'Fri, 06 Nov 2015 04:33:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1999?api-version=2015-08-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1999\",\"location\":\"West US\",\"name\":\"xplatTestCache1999\",\"type\":\"Microsoft.Cache/Redis\",\"tags\":{},\"properties\":{\"provisioningState\":\"Creating\",\"redisVersion\":\"3.0\",\"sku\":{\"name\":\"Basic\",\"family\":\"C\",\"capacity\":2},\"enableNonSslPort\":true,\"redisConfiguration\":{\"maxmemory-policy\":\"allkeys-random\",\"maxclients\":\"2000\",\"maxmemory-reserved\":\"100\",\"maxmemory-delta\":\"100\"},\"accessKeys\":{\"primaryKey\":\"1i+hRi5W9L7nWkhKmpIy12FpU3aCdkF0ldFhpcfskD4=\",\"secondaryKey\":\"68J27bm+8S4OqhpUpe3l29LpXg58j+vRpsE084Tea7k=\"},\"hostName\":\"xplatTestCache1999.redis.cache.windows.net\",\"port\":6379,\"sslPort\":6380}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '723',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://prod-rp-wus.cacheinfra.windows.net:10225/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache1999',
  'x-ms-request-id': '5754c29b-7bec-40ad-b038-743676dcaf6f',
  'x-rp-server-mvid': '34bb3c7e-5d41-4769-9a39-f21a2e547245',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '464b31c0-6569-4000-9513-74da17396308',
  'x-ms-routing-request-id': 'WESTUS:20151106T043332Z:464b31c0-6569-4000-9513-74da17396308',
  date: 'Fri, 06 Nov 2015 04:33:31 GMT',
  connection: 'close' });
 return result; }]];