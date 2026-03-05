// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FlyIoClient from '@alexarena/fly-io-client';

const client = new FlyIoClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource machines', () => {
  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.apps.machines.create('app_name', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.apps.machines.retrieve('machine_id', { app_name: 'app_name' });
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
    const response = await client.apps.machines.retrieve('machine_id', { app_name: 'app_name' });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.apps.machines.update('machine_id', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.apps.machines.update('machine_id', {
      app_name: 'app_name',
      config: {
        auto_destroy: true,
        checks: {
          foo: {
            grace_period: { 'time.Duration': 0 },
            headers: [{ name: 'name', values: ['string'] }],
            interval: { 'time.Duration': 0 },
            kind: 'informational',
            method: 'method',
            path: 'path',
            port: 0,
            protocol: 'protocol',
            timeout: { 'time.Duration': 0 },
            tls_server_name: 'tls_server_name',
            tls_skip_verify: true,
            type: 'type',
          },
        },
        containers: [
          {
            cmd: ['string'],
            depends_on: [{ condition: 'exited_successfully', name: 'name' }],
            entrypoint: ['string'],
            env: { foo: 'string' },
            env_from: [{ env_var: 'env_var', field_ref: 'id' }],
            exec: ['string'],
            files: [
              {
                guest_path: 'guest_path',
                image_config: 'image_config',
                mode: 0,
                raw_value: 'raw_value',
                secret_name: 'secret_name',
              },
            ],
            healthchecks: [
              {
                exec: { command: ['string'] },
                failure_threshold: 0,
                grace_period: 0,
                http: {
                  headers: [{ name: 'name', values: ['string'] }],
                  method: 'method',
                  path: 'path',
                  port: 0,
                  scheme: 'http',
                  tls_server_name: 'tls_server_name',
                  tls_skip_verify: true,
                },
                interval: 0,
                kind: 'readiness',
                name: 'name',
                success_threshold: 0,
                tcp: { port: 0 },
                timeout: 0,
                unhealthy: 'stop',
              },
            ],
            image: 'image',
            name: 'name',
            restart: {
              gpu_bid_price: 0,
              max_retries: 0,
              policy: 'no',
            },
            secrets: [{ env_var: 'env_var', name: 'name' }],
            stop: {
              signal: 'signal',
              timeout: { 'time.Duration': 0 },
            },
            user: 'user',
          },
        ],
        disable_machine_autostart: true,
        dns: {
          dns_forward_rules: [{ addr: 'addr', basename: 'basename' }],
          hostname: 'hostname',
          hostname_fqdn: 'hostname_fqdn',
          nameservers: ['string'],
          options: [{ name: 'name', value: 'value' }],
          searches: ['string'],
          skip_registration: true,
        },
        env: { foo: 'string' },
        files: [
          {
            guest_path: 'guest_path',
            image_config: 'image_config',
            mode: 0,
            raw_value: 'raw_value',
            secret_name: 'secret_name',
          },
        ],
        guest: {
          cpu_kind: 'cpu_kind',
          cpus: 0,
          gpu_kind: 'gpu_kind',
          gpus: 0,
          host_dedication_id: 'host_dedication_id',
          kernel_args: ['string'],
          memory_mb: 0,
        },
        image: 'image',
        init: {
          cmd: ['string'],
          entrypoint: ['string'],
          exec: ['string'],
          kernel_args: ['string'],
          swap_size_mb: 0,
          tty: true,
        },
        metadata: { foo: 'string' },
        metrics: {
          https: true,
          path: 'path',
          port: 0,
        },
        mounts: [
          {
            add_size_gb: 0,
            encrypted: true,
            extend_threshold_percent: 0,
            name: 'name',
            path: 'path',
            size_gb: 0,
            size_gb_limit: 0,
            volume: 'volume',
          },
        ],
        processes: [
          {
            cmd: ['string'],
            entrypoint: ['string'],
            env: { foo: 'string' },
            env_from: [{ env_var: 'env_var', field_ref: 'id' }],
            exec: ['string'],
            ignore_app_secrets: true,
            secrets: [{ env_var: 'env_var', name: 'name' }],
            user: 'user',
          },
        ],
        restart: {
          gpu_bid_price: 0,
          max_retries: 0,
          policy: 'no',
        },
        schedule: 'schedule',
        services: [
          {
            autostart: true,
            autostop: 'off',
            checks: [
              {
                grace_period: { 'time.Duration': 0 },
                headers: [{ name: 'name', values: ['string'] }],
                interval: { 'time.Duration': 0 },
                method: 'method',
                path: 'path',
                port: 0,
                protocol: 'protocol',
                timeout: { 'time.Duration': 0 },
                tls_server_name: 'tls_server_name',
                tls_skip_verify: true,
                type: 'type',
              },
            ],
            concurrency: {
              hard_limit: 0,
              soft_limit: 0,
              type: 'type',
            },
            force_instance_description: 'force_instance_description',
            force_instance_key: 'force_instance_key',
            internal_port: 0,
            min_machines_running: 0,
            ports: [
              {
                end_port: 0,
                force_https: true,
                handlers: ['string'],
                http_options: {
                  compress: true,
                  h2_backend: true,
                  headers_read_timeout: 0,
                  idle_timeout: 0,
                  response: {
                    headers: { foo: {} },
                    pristine: true,
                  },
                },
                port: 0,
                proxy_proto_options: { version: 'version' },
                start_port: 0,
                tls_options: {
                  alpn: ['string'],
                  default_self_signed: true,
                  versions: ['string'],
                },
              },
            ],
            protocol: 'protocol',
          },
        ],
        size: 'size',
        standbys: ['string'],
        statics: [
          {
            guest_path: 'guest_path',
            url_prefix: 'url_prefix',
            index_document: 'index_document',
            tigris_bucket: 'tigris_bucket',
          },
        ],
        stop_config: {
          signal: 'signal',
          timeout: { 'time.Duration': 0 },
        },
      },
      current_version: 'current_version',
      lease_ttl: 0,
      lsvd: true,
      min_secrets_version: 0,
      name: 'name',
      region: 'region',
      skip_launch: true,
      skip_secrets: true,
      skip_service_registration: true,
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.apps.machines.list('app_name');
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
      client.apps.machines.list(
        'app_name',
        {
          include_deleted: true,
          region: 'region',
          state: 'state',
          summary: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FlyIoClient.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('cordon: only required params', async () => {
    const responsePromise = client.apps.machines.cordon('machine_id', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('cordon: required and optional params', async () => {
    const response = await client.apps.machines.cordon('machine_id', { app_name: 'app_name' });
  });

  // Mock server tests are disabled
  test.skip('destroy: only required params', async () => {
    const responsePromise = client.apps.machines.destroy('machine_id', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('destroy: required and optional params', async () => {
    const response = await client.apps.machines.destroy('machine_id', { app_name: 'app_name', force: true });
  });

  // Mock server tests are disabled
  test.skip('executeCommand: only required params', async () => {
    const responsePromise = client.apps.machines.executeCommand('machine_id', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('executeCommand: required and optional params', async () => {
    const response = await client.apps.machines.executeCommand('machine_id', {
      app_name: 'app_name',
      cmd: 'cmd',
      command: ['string'],
      container: 'container',
      stdin: 'stdin',
      timeout: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('listEvents: only required params', async () => {
    const responsePromise = client.apps.machines.listEvents('machine_id', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listEvents: required and optional params', async () => {
    const response = await client.apps.machines.listEvents('machine_id', { app_name: 'app_name', limit: 0 });
  });

  // Mock server tests are disabled
  test.skip('listProcesses: only required params', async () => {
    const responsePromise = client.apps.machines.listProcesses('machine_id', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listProcesses: required and optional params', async () => {
    const response = await client.apps.machines.listProcesses('machine_id', {
      app_name: 'app_name',
      order: 'order',
      sort_by: 'sort_by',
    });
  });

  // Mock server tests are disabled
  test.skip('listVersions: only required params', async () => {
    const responsePromise = client.apps.machines.listVersions('machine_id', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listVersions: required and optional params', async () => {
    const response = await client.apps.machines.listVersions('machine_id', { app_name: 'app_name' });
  });

  // Mock server tests are disabled
  test.skip('restart: only required params', async () => {
    const responsePromise = client.apps.machines.restart('machine_id', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('restart: required and optional params', async () => {
    const response = await client.apps.machines.restart('machine_id', {
      app_name: 'app_name',
      signal: 'signal',
      timeout: 'timeout',
    });
  });

  // Mock server tests are disabled
  test.skip('signal: only required params', async () => {
    const responsePromise = client.apps.machines.signal('machine_id', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('signal: required and optional params', async () => {
    const response = await client.apps.machines.signal('machine_id', {
      app_name: 'app_name',
      signal: 'SIGABRT',
    });
  });

  // Mock server tests are disabled
  test.skip('start: only required params', async () => {
    const responsePromise = client.apps.machines.start('machine_id', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('start: required and optional params', async () => {
    const response = await client.apps.machines.start('machine_id', { app_name: 'app_name' });
  });

  // Mock server tests are disabled
  test.skip('stop: only required params', async () => {
    const responsePromise = client.apps.machines.stop('machine_id', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('stop: required and optional params', async () => {
    const response = await client.apps.machines.stop('machine_id', {
      app_name: 'app_name',
      signal: 'signal',
      timeout: { 'time.Duration': 0 },
    });
  });

  // Mock server tests are disabled
  test.skip('suspend: only required params', async () => {
    const responsePromise = client.apps.machines.suspend('machine_id', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('suspend: required and optional params', async () => {
    const response = await client.apps.machines.suspend('machine_id', { app_name: 'app_name' });
  });

  // Mock server tests are disabled
  test.skip('uncordon: only required params', async () => {
    const responsePromise = client.apps.machines.uncordon('machine_id', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('uncordon: required and optional params', async () => {
    const response = await client.apps.machines.uncordon('machine_id', { app_name: 'app_name' });
  });

  // Mock server tests are disabled
  test.skip('waitForState: only required params', async () => {
    const responsePromise = client.apps.machines.waitForState('machine_id', { app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('waitForState: required and optional params', async () => {
    const response = await client.apps.machines.waitForState('machine_id', {
      app_name: 'app_name',
      instance_id: 'instance_id',
      state: 'started',
      timeout: 0,
    });
  });
});
