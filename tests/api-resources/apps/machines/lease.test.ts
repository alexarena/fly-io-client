// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FlyIoClient from '@alexarena/fly-io-client';

const client = new FlyIoClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lease', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.apps.machines.lease.create('machine_id', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.apps.machines.lease.create('machine_id', {
      app_name: 'app_name',
      description: 'description',
      ttl: 0,
      'fly-machine-lease-nonce': 'fly-machine-lease-nonce',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.apps.machines.lease.retrieve('machine_id', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.apps.machines.lease.retrieve('machine_id', { app_name: 'app_name' });
  });

  // Mock server tests are disabled
  test.skip('release: only required params', async () => {
    const responsePromise = client.apps.machines.lease.release('machine_id', {
      app_name: 'app_name',
      'fly-machine-lease-nonce': 'fly-machine-lease-nonce',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('release: required and optional params', async () => {
    const response = await client.apps.machines.lease.release('machine_id', {
      app_name: 'app_name',
      'fly-machine-lease-nonce': 'fly-machine-lease-nonce',
    });
  });
});
