// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FlyIoClient from '@alexarena/fly-io-client';

const client = new FlyIoClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metadata', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.apps.machines.metadata.retrieve('machine_id', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.apps.machines.metadata.retrieve('machine_id', { app_name: 'app_name' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.apps.machines.metadata.update('key', {
      app_name: 'app_name',
      machine_id: 'machine_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.apps.machines.metadata.update('key', {
      app_name: 'app_name',
      machine_id: 'machine_id',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.apps.machines.metadata.delete('key', {
      app_name: 'app_name',
      machine_id: 'machine_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.apps.machines.metadata.delete('key', {
      app_name: 'app_name',
      machine_id: 'machine_id',
    });
  });
});
