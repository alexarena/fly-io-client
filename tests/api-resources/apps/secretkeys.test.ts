// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FlyIoClient from '@alexarena/fly-io-client';

const client = new FlyIoClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource secretkeys', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.apps.secretkeys.retrieve('secret_name', { app_name: 'app_name' });
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
    const response = await client.apps.secretkeys.retrieve('secret_name', {
      app_name: 'app_name',
      min_version: 'min_version',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.apps.secretkeys.list('app_name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.secretkeys.list(
        'app_name',
        { min_version: 'min_version', types: 'types' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FlyIoClient.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.apps.secretkeys.delete('secret_name', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.apps.secretkeys.delete('secret_name', { app_name: 'app_name' });
  });

  // Mock server tests are disabled
  test.skip('createOrUpdate: only required params', async () => {
    const responsePromise = client.apps.secretkeys.createOrUpdate('secret_name', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createOrUpdate: required and optional params', async () => {
    const response = await client.apps.secretkeys.createOrUpdate('secret_name', {
      app_name: 'app_name',
      type: 'type',
      value: [0],
    });
  });

  // Mock server tests are disabled
  test.skip('decrypt: only required params', async () => {
    const responsePromise = client.apps.secretkeys.decrypt('secret_name', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('decrypt: required and optional params', async () => {
    const response = await client.apps.secretkeys.decrypt('secret_name', {
      app_name: 'app_name',
      min_version: 'min_version',
      associated_data: [0],
      ciphertext: [0],
    });
  });

  // Mock server tests are disabled
  test.skip('encrypt: only required params', async () => {
    const responsePromise = client.apps.secretkeys.encrypt('secret_name', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('encrypt: required and optional params', async () => {
    const response = await client.apps.secretkeys.encrypt('secret_name', {
      app_name: 'app_name',
      min_version: 'min_version',
      associated_data: [0],
      plaintext: [0],
    });
  });

  // Mock server tests are disabled
  test.skip('generate: only required params', async () => {
    const responsePromise = client.apps.secretkeys.generate('secret_name', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('generate: required and optional params', async () => {
    const response = await client.apps.secretkeys.generate('secret_name', {
      app_name: 'app_name',
      type: 'type',
      value: [0],
    });
  });

  // Mock server tests are disabled
  test.skip('sign: only required params', async () => {
    const responsePromise = client.apps.secretkeys.sign('secret_name', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('sign: required and optional params', async () => {
    const response = await client.apps.secretkeys.sign('secret_name', {
      app_name: 'app_name',
      min_version: 'min_version',
      plaintext: [0],
    });
  });

  // Mock server tests are disabled
  test.skip('verify: only required params', async () => {
    const responsePromise = client.apps.secretkeys.verify('secret_name', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('verify: required and optional params', async () => {
    const response = await client.apps.secretkeys.verify('secret_name', {
      app_name: 'app_name',
      min_version: 'min_version',
      plaintext: [0],
      signature: [0],
    });
  });
});
