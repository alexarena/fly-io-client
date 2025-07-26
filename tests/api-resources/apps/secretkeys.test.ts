// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ArenaFlyIo from 'arena-fly-io';

const client = new ArenaFlyIo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource secretkeys', () => {
  // skipped: tests are disabled for the time being
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

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.apps.secretkeys.retrieve('secret_name', {
      app_name: 'app_name',
      min_version: 'min_version',
    });
  });

  // skipped: tests are disabled for the time being
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

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.secretkeys.list(
        'app_name',
        { min_version: 'min_version', types: 'types' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ArenaFlyIo.NotFoundError);
  });

  // skipped: tests are disabled for the time being
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

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.apps.secretkeys.delete('secret_name', { app_name: 'app_name' });
  });

  // skipped: tests are disabled for the time being
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

  // skipped: tests are disabled for the time being
  test.skip('createOrUpdate: required and optional params', async () => {
    const response = await client.apps.secretkeys.createOrUpdate('secret_name', {
      app_name: 'app_name',
      type: 'type',
      value: [0],
    });
  });

  // skipped: tests are disabled for the time being
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

  // skipped: tests are disabled for the time being
  test.skip('decrypt: required and optional params', async () => {
    const response = await client.apps.secretkeys.decrypt('secret_name', {
      app_name: 'app_name',
      min_version: 'min_version',
      associated_data: [0],
      ciphertext: [0],
    });
  });

  // skipped: tests are disabled for the time being
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

  // skipped: tests are disabled for the time being
  test.skip('encrypt: required and optional params', async () => {
    const response = await client.apps.secretkeys.encrypt('secret_name', {
      app_name: 'app_name',
      min_version: 'min_version',
      associated_data: [0],
      plaintext: [0],
    });
  });

  // skipped: tests are disabled for the time being
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

  // skipped: tests are disabled for the time being
  test.skip('generate: required and optional params', async () => {
    const response = await client.apps.secretkeys.generate('secret_name', {
      app_name: 'app_name',
      type: 'type',
      value: [0],
    });
  });

  // skipped: tests are disabled for the time being
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

  // skipped: tests are disabled for the time being
  test.skip('sign: required and optional params', async () => {
    const response = await client.apps.secretkeys.sign('secret_name', {
      app_name: 'app_name',
      min_version: 'min_version',
      plaintext: [0],
    });
  });

  // skipped: tests are disabled for the time being
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

  // skipped: tests are disabled for the time being
  test.skip('verify: required and optional params', async () => {
    const response = await client.apps.secretkeys.verify('secret_name', {
      app_name: 'app_name',
      min_version: 'min_version',
      plaintext: [0],
      signature: [0],
    });
  });
});
