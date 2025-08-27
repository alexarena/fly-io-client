// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FlyIoClient from '@alexarena/fly-io-client';

const client = new FlyIoClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource platform', () => {
  // Prism tests are disabled
  test.skip('listRegions', async () => {
    const responsePromise = client.platform.listRegions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listRegions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.platform.listRegions(
        { cpu_kind: 'cpu_kind', cpus: 0, gpu_kind: 'gpu_kind', gpus: 0, memory_mb: 0, size: 'size' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FlyIoClient.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('placePlacements: only required params', async () => {
    const responsePromise = client.platform.placePlacements({ org_slug: 'personal' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('placePlacements: required and optional params', async () => {
    const response = await client.platform.placePlacements({
      org_slug: 'personal',
      compute: {
        cpu_kind: 'cpu_kind',
        cpus: 0,
        gpu_kind: 'gpu_kind',
        gpus: 0,
        host_dedication_id: 'host_dedication_id',
        kernel_args: ['string'],
        memory_mb: 0,
      },
      count: 0,
      region: 'lhr,eu',
      volume_name: '',
      volume_size_bytes: 0,
      weights: { region: 1000, spread: 0 },
    });
  });
});
