// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FlyIoClient from '@alexarena/fly-io-client';

const client = new FlyIoClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource volumes', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.apps.volumes.create('app_name', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.apps.volumes.retrieve('volume_id', { app_name: 'app_name' });
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
    const response = await client.apps.volumes.retrieve('volume_id', { app_name: 'app_name' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.apps.volumes.update('volume_id', { app_name: 'app_name' });
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
    const response = await client.apps.volumes.update('volume_id', {
      app_name: 'app_name',
      auto_backup_enabled: true,
      snapshot_retention: 0,
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.apps.volumes.list('app_name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.volumes.list('app_name', { summary: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(FlyIoClient.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('destroy: only required params', async () => {
    const responsePromise = client.apps.volumes.destroy('volume_id', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('destroy: required and optional params', async () => {
    const response = await client.apps.volumes.destroy('volume_id', { app_name: 'app_name' });
  });

  // Prism tests are disabled
  test.skip('extend: only required params', async () => {
    const responsePromise = client.apps.volumes.extend('volume_id', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('extend: required and optional params', async () => {
    const response = await client.apps.volumes.extend('volume_id', { app_name: 'app_name', size_gb: 0 });
  });
});
