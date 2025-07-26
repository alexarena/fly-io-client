// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MachinesAPI from './machines';
import * as LeaseAPI from './lease';
import { Lease, LeaseCreateParams, LeaseReleaseParams, LeaseResource, LeaseRetrieveParams } from './lease';
import * as MetadataAPI from './metadata';
import {
  Metadata,
  MetadataDeleteParams,
  MetadataRetrieveParams,
  MetadataRetrieveResponse,
  MetadataUpdateParams,
} from './metadata';
import * as VolumesAPI from '../volumes/volumes';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Machines extends APIResource {
  lease: LeaseAPI.LeaseResource = new LeaseAPI.LeaseResource(this._client);
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);

  /**
   * Create a Machine within a specific app using the details provided in the request
   * body.
   *
   * **Important**: This request can fail, and you’re responsible for handling that
   * failure. If you ask for a large Machine, or a Machine in a region we happen to
   * be at capacity for, you might need to retry the request, or to fall back to
   * another region. If you’re working directly with the Machines API, you’re taking
   * some responsibility for your own orchestration!
   */
  create(appName: string, body: MachineCreateParams, options?: RequestOptions): APIPromise<Machine> {
    return this._client.post(path`/apps/${appName}/machines`, { body, ...options });
  }

  /**
   * Get details of a specific Machine within an app by the Machine ID.
   */
  retrieve(machineID: string, params: MachineRetrieveParams, options?: RequestOptions): APIPromise<Machine> {
    const { app_name } = params;
    return this._client.get(path`/apps/${app_name}/machines/${machineID}`, options);
  }

  /**
   * Update a Machine's configuration using the details provided in the request body.
   */
  update(machineID: string, params: MachineUpdateParams, options?: RequestOptions): APIPromise<Machine> {
    const { app_name, ...body } = params;
    return this._client.post(path`/apps/${app_name}/machines/${machineID}`, { body, ...options });
  }

  /**
   * List all Machines associated with a specific app, with optional filters for
   * including deleted Machines and filtering by region.
   */
  list(
    appName: string,
    query: MachineListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MachineListResponse> {
    return this._client.get(path`/apps/${appName}/machines`, { query, ...options });
  }

  /**
   * “Cordoning” a Machine refers to disabling its services, so the Fly Proxy won’t
   * route requests to it. In flyctl this is used by blue/green deployments; one set
   * of Machines is started up with services disabled, and when they are all healthy,
   * the services are enabled on the new Machines and disabled on the old ones.
   */
  cordon(machineID: string, params: MachineCordonParams, options?: RequestOptions): APIPromise<void> {
    const { app_name } = params;
    return this._client.post(path`/apps/${app_name}/machines/${machineID}/cordon`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a specific Machine within an app by Machine ID, with an optional force
   * parameter to force kill the Machine if it's running.
   */
  destroy(machineID: string, params: MachineDestroyParams, options?: RequestOptions): APIPromise<void> {
    const { app_name, force } = params;
    return this._client.delete(path`/apps/${app_name}/machines/${machineID}`, {
      query: { force },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Execute a command on a specific Machine and return the raw command output bytes.
   */
  executeCommand(
    machineID: string,
    params: MachineExecuteCommandParams,
    options?: RequestOptions,
  ): APIPromise<MachineExecuteCommandResponse> {
    const { app_name, ...body } = params;
    return this._client.post(path`/apps/${app_name}/machines/${machineID}/exec`, { body, ...options });
  }

  /**
   * List all events associated with a specific Machine within an app.
   */
  listEvents(
    machineID: string,
    params: MachineListEventsParams,
    options?: RequestOptions,
  ): APIPromise<MachineListEventsResponse> {
    const { app_name, ...query } = params;
    return this._client.get(path`/apps/${app_name}/machines/${machineID}/events`, { query, ...options });
  }

  /**
   * List all processes running on a specific Machine within an app, with optional
   * sorting parameters.
   */
  listProcesses(
    machineID: string,
    params: MachineListProcessesParams,
    options?: RequestOptions,
  ): APIPromise<MachineListProcessesResponse> {
    const { app_name, ...query } = params;
    return this._client.get(path`/apps/${app_name}/machines/${machineID}/ps`, { query, ...options });
  }

  /**
   * List all versions of the configuration for a specific Machine within an app.
   */
  listVersions(
    machineID: string,
    params: MachineListVersionsParams,
    options?: RequestOptions,
  ): APIPromise<MachineListVersionsResponse> {
    const { app_name } = params;
    return this._client.get(path`/apps/${app_name}/machines/${machineID}/versions`, options);
  }

  /**
   * Restart a specific Machine within an app, with an optional timeout parameter.
   */
  restart(machineID: string, params: MachineRestartParams, options?: RequestOptions): APIPromise<void> {
    const { app_name, signal, timeout } = params;
    return this._client.post(path`/apps/${app_name}/machines/${machineID}/restart`, {
      query: { signal, timeout },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Send a signal to a specific Machine within an app using the details provided in
   * the request body.
   */
  signal(machineID: string, params: MachineSignalParams, options?: RequestOptions): APIPromise<void> {
    const { app_name, ...body } = params;
    return this._client.post(path`/apps/${app_name}/machines/${machineID}/signal`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Start a specific Machine within an app.
   */
  start(machineID: string, params: MachineStartParams, options?: RequestOptions): APIPromise<void> {
    const { app_name } = params;
    return this._client.post(path`/apps/${app_name}/machines/${machineID}/start`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Stop a specific Machine within an app, with an optional request body to specify
   * signal and timeout.
   */
  stop(machineID: string, params: MachineStopParams, options?: RequestOptions): APIPromise<void> {
    const { app_name, ...body } = params;
    return this._client.post(path`/apps/${app_name}/machines/${machineID}/stop`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Suspend a specific Machine within an app. The next start operation will attempt
   * (but is not guaranteed) to resume the Machine from a snapshot taken at
   * suspension time, rather than performing a cold boot.
   */
  suspend(machineID: string, params: MachineSuspendParams, options?: RequestOptions): APIPromise<void> {
    const { app_name } = params;
    return this._client.post(path`/apps/${app_name}/machines/${machineID}/suspend`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * “Cordoning” a Machine refers to disabling its services, so the Fly Proxy won’t
   * route requests to it. In flyctl this is used by blue/green deployments; one set
   * of Machines is started up with services disabled, and when they are all healthy,
   * the services are enabled on the new Machines and disabled on the old ones.
   */
  uncordon(machineID: string, params: MachineUncordonParams, options?: RequestOptions): APIPromise<void> {
    const { app_name } = params;
    return this._client.post(path`/apps/${app_name}/machines/${machineID}/uncordon`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Wait for a Machine to reach a specific state. Specify the desired state with the
   * state parameter. See the
   * [Machine states table](https://fly.io/docs/machines/working-with-machines/#machine-states)
   * for a list of possible states. The default for this parameter is `started`.
   *
   * This request will block for up to 60 seconds. Set a shorter timeout with the
   * timeout parameter.
   */
  waitForState(
    machineID: string,
    params: MachineWaitForStateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { app_name, ...query } = params;
    return this._client.get(path`/apps/${app_name}/machines/${machineID}/wait`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Duration {
  'time.Duration'?: number;
}

/**
 * EnvVar defines an environment variable to be populated from a machine field,
 * env_var
 */
export interface EnvFrom {
  /**
   * EnvVar is required and is the name of the environment variable that will be set
   * from the secret. It must be a valid environment variable name.
   */
  env_var?: string;

  /**
   * FieldRef selects a field of the Machine: supports id, version, app_name,
   * private_ip, region, image.
   */
  field_ref?: 'id' | 'version' | 'app_name' | 'private_ip' | 'region' | 'image';
}

/**
 * A file that will be written to the Machine. One of RawValue or SecretName must
 * be set.
 */
export interface File {
  /**
   * GuestPath is the path on the machine where the file will be written and must be
   * an absolute path. For example: /full/path/to/file.json
   */
  guest_path?: string;

  /**
   * The name of an image to use the OCI image config as the file contents.
   */
  image_config?: string;

  /**
   * Mode bits used to set permissions on this file as accepted by chmod(2).
   */
  mode?: number;

  /**
   * The base64 encoded string of the file contents.
   */
  raw_value?: string;

  /**
   * The name of the secret that contains the base64 encoded file contents.
   */
  secret_name?: string;
}

export interface Machine {
  id?: string;

  checks?: Array<Machine.Check>;

  config?: MachineConfig;

  created_at?: string;

  events?: Array<MachineEvent>;

  host_status?: 'ok' | 'unknown' | 'unreachable';

  image_ref?: Machine.ImageRef;

  incomplete_config?: MachineConfig;

  /**
   * InstanceID is unique for each version of the machine
   */
  instance_id?: string;

  name?: string;

  /**
   * Nonce is only every returned on machine creation if a lease_duration was
   * provided.
   */
  nonce?: string;

  /**
   * PrivateIP is the internal 6PN address of the machine.
   */
  private_ip?: string;

  region?: string;

  state?: string;

  updated_at?: string;
}

export namespace Machine {
  export interface Check {
    name?: string;

    output?: string;

    status?: string;

    updated_at?: string;
  }

  export interface ImageRef {
    digest?: string;

    labels?: { [key: string]: string };

    registry?: string;

    repository?: string;

    tag?: string;
  }
}

export interface MachineConfig {
  /**
   * Optional boolean telling the Machine to destroy itself once it’s complete
   * (default false)
   */
  auto_destroy?: boolean;

  /**
   * An optional object that defines one or more named top-level checks. The key for
   * each check is the check name.
   */
  checks?: { [key: string]: MachineConfig.Checks };

  /**
   * Containers are a list of containers that will run in the machine. Currently
   * restricted to only specific organizations.
   */
  containers?: Array<MachineConfig.Container>;

  /**
   * Deprecated: use Service.Autostart instead
   */
  disable_machine_autostart?: boolean;

  dns?: MachineConfig.DNS;

  /**
   * An object filled with key/value pairs to be set as environment variables
   */
  env?: { [key: string]: string };

  files?: Array<File>;

  guest?: VolumesAPI.MachineGuest;

  /**
   * The docker image to run
   */
  image?: string;

  init?: MachineConfig.Init;

  metadata?: { [key: string]: string };

  metrics?: MachineConfig.Metrics;

  mounts?: Array<MachineConfig.Mount>;

  processes?: Array<MachineConfig.Process>;

  /**
   * The Machine restart policy defines whether and how flyd restarts a Machine after
   * its main process exits. See
   * https://fly.io/docs/machines/guides-examples/machine-restart-policy/.
   */
  restart?: MachineRestart;

  schedule?: string;

  services?: Array<MachineConfig.Service>;

  /**
   * Deprecated: use Guest instead
   */
  size?: string;

  /**
   * Standbys enable a machine to be a standby for another. In the event of a
   * hardware failure, the standby machine will be started.
   */
  standbys?: Array<string>;

  statics?: Array<MachineConfig.Static>;

  stop_config?: StopConfig;
}

export namespace MachineConfig {
  export interface Checks {
    /**
     * The time to wait after a VM starts before checking its health
     */
    grace_period?: MachinesAPI.Duration;

    headers?: Array<MachinesAPI.MachineHTTPHeader>;

    /**
     * The time between connectivity checks
     */
    interval?: MachinesAPI.Duration;

    /**
     * Kind of the check (informational, readiness)
     */
    kind?: 'informational' | 'readiness';

    /**
     * For http checks, the HTTP method to use to when making the request
     */
    method?: string;

    /**
     * For http checks, the path to send the request to
     */
    path?: string;

    /**
     * The port to connect to, often the same as internal_port
     */
    port?: number;

    /**
     * For http checks, whether to use http or https
     */
    protocol?: string;

    /**
     * The maximum time a connection can take before being reported as failing its
     * health check
     */
    timeout?: MachinesAPI.Duration;

    /**
     * If the protocol is https, the hostname to use for TLS certificate validation
     */
    tls_server_name?: string;

    /**
     * For http checks with https protocol, whether or not to verify the TLS
     * certificate
     */
    tls_skip_verify?: boolean;

    /**
     * tcp or http
     */
    type?: string;
  }

  export interface Container {
    /**
     * CmdOverride is used to override the default command of the image.
     */
    cmd?: Array<string>;

    /**
     * DependsOn can be used to define dependencies between containers. The container
     * will only be started after all of its dependent conditions have been satisfied.
     */
    depends_on?: Array<Container.DependsOn>;

    /**
     * EntrypointOverride is used to override the default entrypoint of the image.
     */
    entrypoint?: Array<string>;

    /**
     * ExtraEnv is used to add additional environment variables to the container.
     */
    env?: { [key: string]: string };

    /**
     * EnvFrom can be provided to set environment variables from machine fields.
     */
    env_from?: Array<MachinesAPI.EnvFrom>;

    /**
     * Image Config overrides - these fields are used to override the image
     * configuration. If not provided, the image configuration will be used.
     * ExecOverride is used to override the default command of the image.
     */
    exec?: Array<string>;

    /**
     * Files are files that will be written to the container file system.
     */
    files?: Array<MachinesAPI.File>;

    /**
     * Healthchecks determine the health of your containers. Healthchecks can use HTTP,
     * TCP or an Exec command.
     */
    healthchecks?: Array<Container.Healthcheck>;

    /**
     * Image is the docker image to run.
     */
    image?: string;

    /**
     * Name is used to identify the container in the machine.
     */
    name?: string;

    /**
     * The Machine restart policy defines whether and how flyd restarts a Machine after
     * its main process exits. See
     * https://fly.io/docs/machines/guides-examples/machine-restart-policy/.
     */
    restart?: MachinesAPI.MachineRestart;

    /**
     * Secrets can be provided at the process level to explicitly indicate which
     * secrets should be used for the process. If not provided, the secrets provided at
     * the machine level will be used.
     */
    secrets?: Array<MachinesAPI.MachineSecret>;

    /**
     * Stop is used to define the signal and timeout for stopping the container.
     */
    stop?: MachinesAPI.StopConfig;

    /**
     * UserOverride is used to override the default user of the image.
     */
    user?: string;
  }

  export namespace Container {
    export interface DependsOn {
      condition?: 'exited_successfully' | 'healthy' | 'started';

      name?: string;
    }

    export interface Healthcheck {
      exec?: Healthcheck.Exec;

      /**
       * The number of times the check must fail before considering the container
       * unhealthy.
       */
      failure_threshold?: number;

      /**
       * The time in seconds to wait after a container starts before checking its health.
       */
      grace_period?: number;

      http?: Healthcheck.HTTP;

      /**
       * The time in seconds between executing the defined check.
       */
      interval?: number;

      /**
       * Kind of healthcheck (readiness, liveness)
       */
      kind?: 'readiness' | 'liveness';

      /**
       * The name of the check. Must be unique within the container.
       */
      name?: string;

      /**
       * The number of times the check must succeeed before considering the container
       * healthy.
       */
      success_threshold?: number;

      tcp?: Healthcheck.Tcp;

      /**
       * The time in seconds to wait for the check to complete.
       */
      timeout?: number;

      /**
       * Unhealthy policy that determines what action to take if a container is deemed
       * unhealthy
       */
      unhealthy?: 'stop';
    }

    export namespace Healthcheck {
      export interface Exec {
        /**
         * The command to run to check the health of the container (e.g. ["cat",
         * "/tmp/healthy"])
         */
        command?: Array<string>;
      }

      export interface HTTP {
        /**
         * Additional headers to send with the request
         */
        headers?: Array<MachinesAPI.MachineHTTPHeader>;

        /**
         * The HTTP method to use to when making the request
         */
        method?: string;

        /**
         * The path to send the request to
         */
        path?: string;

        /**
         * The port to connect to, often the same as internal_port
         */
        port?: number;

        /**
         * Whether to use http or https
         */
        scheme?: 'http' | 'https';

        /**
         * If the protocol is https, the hostname to use for TLS certificate validation
         */
        tls_server_name?: string;

        /**
         * If the protocol is https, whether or not to verify the TLS certificate
         */
        tls_skip_verify?: boolean;
      }

      export interface Tcp {
        /**
         * The port to connect to, often the same as internal_port
         */
        port?: number;
      }
    }
  }

  export interface DNS {
    dns_forward_rules?: Array<DNS.DNSForwardRule>;

    hostname?: string;

    hostname_fqdn?: string;

    nameservers?: Array<string>;

    options?: Array<DNS.Option>;

    searches?: Array<string>;

    skip_registration?: boolean;
  }

  export namespace DNS {
    export interface DNSForwardRule {
      addr?: string;

      basename?: string;
    }

    export interface Option {
      name?: string;

      value?: string;
    }
  }

  export interface Init {
    cmd?: Array<string>;

    entrypoint?: Array<string>;

    exec?: Array<string>;

    kernel_args?: Array<string>;

    swap_size_mb?: number;

    tty?: boolean;
  }

  export interface Metrics {
    https?: boolean;

    path?: string;

    port?: number;
  }

  export interface Mount {
    add_size_gb?: number;

    encrypted?: boolean;

    extend_threshold_percent?: number;

    name?: string;

    path?: string;

    size_gb?: number;

    size_gb_limit?: number;

    volume?: string;
  }

  export interface Process {
    cmd?: Array<string>;

    entrypoint?: Array<string>;

    env?: { [key: string]: string };

    /**
     * EnvFrom can be provided to set environment variables from machine fields.
     */
    env_from?: Array<MachinesAPI.EnvFrom>;

    exec?: Array<string>;

    /**
     * IgnoreAppSecrets can be set to true to ignore the secrets for the App the
     * Machine belongs to and only use the secrets provided at the process level. The
     * default/legacy behavior is to use the secrets provided at the App level.
     */
    ignore_app_secrets?: boolean;

    /**
     * Secrets can be provided at the process level to explicitly indicate which
     * secrets should be used for the process. If not provided, the secrets provided at
     * the machine level will be used.
     */
    secrets?: Array<MachinesAPI.MachineSecret>;

    user?: string;
  }

  export interface Service {
    autostart?: boolean;

    /**
     * Accepts a string (new format) or a boolean (old format). For backward
     * compatibility with older clients, the API continues to use booleans for "off"
     * and "stop" in responses.
     *
     * - "off" or false - Do not autostop the Machine.
     * - "stop" or true - Automatically stop the Machine.
     * - "suspend" - Automatically suspend the Machine, falling back to a full stop if
     *   this is not possible.
     */
    autostop?: 'off' | 'stop' | 'suspend';

    /**
     * An optional list of service checks
     */
    checks?: Array<Service.Check>;

    concurrency?: Service.Concurrency;

    force_instance_description?: string;

    force_instance_key?: string;

    internal_port?: number;

    min_machines_running?: number;

    ports?: Array<Service.Port>;

    protocol?: string;
  }

  export namespace Service {
    export interface Check {
      /**
       * The time to wait after a VM starts before checking its health
       */
      grace_period?: MachinesAPI.Duration;

      headers?: Array<MachinesAPI.MachineHTTPHeader>;

      /**
       * The time between connectivity checks
       */
      interval?: MachinesAPI.Duration;

      /**
       * For http checks, the HTTP method to use to when making the request
       */
      method?: string;

      /**
       * For http checks, the path to send the request to
       */
      path?: string;

      /**
       * The port to connect to, often the same as internal_port
       */
      port?: number;

      /**
       * For http checks, whether to use http or https
       */
      protocol?: string;

      /**
       * The maximum time a connection can take before being reported as failing its
       * health check
       */
      timeout?: MachinesAPI.Duration;

      /**
       * If the protocol is https, the hostname to use for TLS certificate validation
       */
      tls_server_name?: string;

      /**
       * For http checks with https protocol, whether or not to verify the TLS
       * certificate
       */
      tls_skip_verify?: boolean;

      /**
       * tcp or http
       */
      type?: string;
    }

    export interface Concurrency {
      hard_limit?: number;

      soft_limit?: number;

      type?: string;
    }

    export interface Port {
      end_port?: number;

      force_https?: boolean;

      handlers?: Array<string>;

      http_options?: Port.HTTPOptions;

      port?: number;

      proxy_proto_options?: Port.ProxyProtoOptions;

      start_port?: number;

      tls_options?: Port.TlsOptions;
    }

    export namespace Port {
      export interface HTTPOptions {
        compress?: boolean;

        h2_backend?: boolean;

        headers_read_timeout?: number;

        idle_timeout?: number;

        response?: HTTPOptions.Response;
      }

      export namespace HTTPOptions {
        export interface Response {
          headers?: { [key: string]: unknown };

          pristine?: boolean;
        }
      }

      export interface ProxyProtoOptions {
        version?: string;
      }

      export interface TlsOptions {
        alpn?: Array<string>;

        default_self_signed?: boolean;

        versions?: Array<string>;
      }
    }
  }

  export interface Static {
    guest_path: string;

    url_prefix: string;

    index_document?: string;

    tigris_bucket?: string;
  }
}

export interface MachineEvent {
  id?: string;

  request?: unknown;

  source?: string;

  status?: string;

  timestamp?: number;

  type?: string;
}

/**
 * For http checks, an array of objects with string field Name and array of strings
 * field Values. The key/value pairs specify header and header values that will get
 * passed with the check call.
 */
export interface MachineHTTPHeader {
  /**
   * The header name
   */
  name?: string;

  /**
   * The header value
   */
  values?: Array<string>;
}

/**
 * The Machine restart policy defines whether and how flyd restarts a Machine after
 * its main process exits. See
 * https://fly.io/docs/machines/guides-examples/machine-restart-policy/.
 */
export interface MachineRestart {
  /**
   * GPU bid price for spot Machines.
   */
  gpu_bid_price?: number;

  /**
   * When policy is on-failure, the maximum number of times to attempt to restart the
   * Machine before letting it stop.
   */
  max_retries?: number;

  /**
   * - no - Never try to restart a Machine automatically when its main process exits,
   *   whether that’s on purpose or on a crash.
   * - always - Always restart a Machine automatically and never let it enter a
   *   stopped state, even when the main process exits cleanly.
   * - on-failure - Try up to MaxRetries times to automatically restart the Machine
   *   if it exits with a non-zero exit code. Default when no explicit policy is set,
   *   and for Machines with schedules.
   * - spot-price - Starts the Machine only when there is capacity and the spot price
   *   is less than or equal to the bid price.
   */
  policy?: 'no' | 'always' | 'on-failure' | 'spot-price';
}

/**
 * A Secret needing to be set in the environment of the Machine. env_var is
 * required
 */
export interface MachineSecret {
  /**
   * EnvVar is required and is the name of the environment variable that will be set
   * from the secret. It must be a valid environment variable name.
   */
  env_var?: string;

  /**
   * Name is optional and when provided is used to reference a secret name where the
   * EnvVar is different from what was set as the secret name.
   */
  name?: string;
}

export interface StopConfig {
  signal?: string;

  timeout?: Duration;
}

export type MachineListResponse = Array<Machine>;

export interface MachineExecuteCommandResponse {
  exit_code?: number;

  exit_signal?: number;

  stderr?: string;

  stdout?: string;
}

export type MachineListEventsResponse = Array<MachineEvent>;

export type MachineListProcessesResponse =
  Array<MachineListProcessesResponse.MachineListProcessesResponseItem>;

export namespace MachineListProcessesResponse {
  export interface MachineListProcessesResponseItem {
    command?: string;

    cpu?: number;

    directory?: string;

    listen_sockets?: Array<MachineListProcessesResponseItem.ListenSocket>;

    pid?: number;

    rss?: number;

    rtime?: number;

    stime?: number;
  }

  export namespace MachineListProcessesResponseItem {
    export interface ListenSocket {
      address?: string;

      proto?: string;
    }
  }
}

export type MachineListVersionsResponse = Array<MachineListVersionsResponse.MachineListVersionsResponseItem>;

export namespace MachineListVersionsResponse {
  export interface MachineListVersionsResponseItem {
    user_config?: MachinesAPI.MachineConfig;

    version?: string;
  }
}

export interface MachineCreateParams {
  /**
   * An object defining the Machine configuration
   */
  config?: MachineConfig;

  lease_ttl?: number;

  lsvd?: boolean;

  min_secrets_version?: number;

  /**
   * Unique name for this Machine. If omitted, one is generated for you
   */
  name?: string;

  /**
   * The target region. Omitting this param launches in the same region as your
   * WireGuard peer connection (somewhere near you).
   */
  region?: string;

  skip_launch?: boolean;

  skip_secrets?: boolean;

  skip_service_registration?: boolean;
}

export interface MachineRetrieveParams {
  /**
   * Fly App Name
   */
  app_name: string;
}

export interface MachineUpdateParams {
  /**
   * Path param: Fly App Name
   */
  app_name: string;

  /**
   * Body param: An object defining the Machine configuration
   */
  config?: MachineConfig;

  /**
   * Body param:
   */
  current_version?: string;

  /**
   * Body param:
   */
  lease_ttl?: number;

  /**
   * Body param:
   */
  lsvd?: boolean;

  /**
   * Body param:
   */
  min_secrets_version?: number;

  /**
   * Body param: Unique name for this Machine. If omitted, one is generated for you
   */
  name?: string;

  /**
   * Body param: The target region. Omitting this param launches in the same region
   * as your WireGuard peer connection (somewhere near you).
   */
  region?: string;

  /**
   * Body param:
   */
  skip_launch?: boolean;

  /**
   * Body param:
   */
  skip_secrets?: boolean;

  /**
   * Body param:
   */
  skip_service_registration?: boolean;
}

export interface MachineListParams {
  /**
   * Include deleted machines
   */
  include_deleted?: boolean;

  /**
   * Region filter
   */
  region?: string;

  /**
   * comma separated list of states to filter (created, started, stopped, suspended)
   */
  state?: string;

  /**
   * Only return summary info about machines (omit config, checks, events,
   * host_status, nonce, etc.)
   */
  summary?: boolean;
}

export interface MachineCordonParams {
  /**
   * Fly App Name
   */
  app_name: string;
}

export interface MachineDestroyParams {
  /**
   * Path param: Fly App Name
   */
  app_name: string;

  /**
   * Query param: Force kill the machine if it's running
   */
  force?: boolean;
}

export interface MachineExecuteCommandParams {
  /**
   * Path param: Fly App Name
   */
  app_name: string;

  /**
   * Body param: Deprecated: use Command instead
   */
  cmd?: string;

  /**
   * Body param:
   */
  command?: Array<string>;

  /**
   * Body param:
   */
  container?: string;

  /**
   * Body param:
   */
  stdin?: string;

  /**
   * Body param:
   */
  timeout?: number;
}

export interface MachineListEventsParams {
  /**
   * Path param: Fly App Name
   */
  app_name: string;

  /**
   * Query param: The number of events to fetch (max of 50). If omitted, this is set
   * to 20 by default.
   */
  limit?: number;
}

export interface MachineListProcessesParams {
  /**
   * Path param: Fly App Name
   */
  app_name: string;

  /**
   * Query param: Order
   */
  order?: string;

  /**
   * Query param: Sort by
   */
  sort_by?: string;
}

export interface MachineListVersionsParams {
  /**
   * Fly App Name
   */
  app_name: string;
}

export interface MachineRestartParams {
  /**
   * Path param: Fly App Name
   */
  app_name: string;

  /**
   * Query param: Unix signal name
   */
  signal?: string;

  /**
   * Query param: Restart timeout as a Go duration string or number of seconds
   */
  timeout?: string;
}

export interface MachineSignalParams {
  /**
   * Path param: Fly App Name
   */
  app_name: string;

  /**
   * Body param:
   */
  signal?:
    | 'SIGABRT'
    | 'SIGALRM'
    | 'SIGFPE'
    | 'SIGHUP'
    | 'SIGILL'
    | 'SIGINT'
    | 'SIGKILL'
    | 'SIGPIPE'
    | 'SIGQUIT'
    | 'SIGSEGV'
    | 'SIGTERM'
    | 'SIGTRAP'
    | 'SIGUSR1';
}

export interface MachineStartParams {
  /**
   * Fly App Name
   */
  app_name: string;
}

export interface MachineStopParams {
  /**
   * Path param: Fly App Name
   */
  app_name: string;

  /**
   * Body param:
   */
  signal?: string;

  /**
   * Body param:
   */
  timeout?: Duration;
}

export interface MachineSuspendParams {
  /**
   * Fly App Name
   */
  app_name: string;
}

export interface MachineUncordonParams {
  /**
   * Fly App Name
   */
  app_name: string;
}

export interface MachineWaitForStateParams {
  /**
   * Path param: Fly App Name
   */
  app_name: string;

  /**
   * Query param: 26-character Machine version ID
   */
  instance_id?: string;

  /**
   * Query param: desired state
   */
  state?: 'started' | 'stopped' | 'suspended' | 'destroyed';

  /**
   * Query param: wait timeout. default 60s
   */
  timeout?: number;
}

Machines.LeaseResource = LeaseResource;
Machines.Metadata = Metadata;

export declare namespace Machines {
  export {
    type Duration as Duration,
    type EnvFrom as EnvFrom,
    type File as File,
    type Machine as Machine,
    type MachineConfig as MachineConfig,
    type MachineEvent as MachineEvent,
    type MachineHTTPHeader as MachineHTTPHeader,
    type MachineRestart as MachineRestart,
    type MachineSecret as MachineSecret,
    type StopConfig as StopConfig,
    type MachineListResponse as MachineListResponse,
    type MachineExecuteCommandResponse as MachineExecuteCommandResponse,
    type MachineListEventsResponse as MachineListEventsResponse,
    type MachineListProcessesResponse as MachineListProcessesResponse,
    type MachineListVersionsResponse as MachineListVersionsResponse,
    type MachineCreateParams as MachineCreateParams,
    type MachineRetrieveParams as MachineRetrieveParams,
    type MachineUpdateParams as MachineUpdateParams,
    type MachineListParams as MachineListParams,
    type MachineCordonParams as MachineCordonParams,
    type MachineDestroyParams as MachineDestroyParams,
    type MachineExecuteCommandParams as MachineExecuteCommandParams,
    type MachineListEventsParams as MachineListEventsParams,
    type MachineListProcessesParams as MachineListProcessesParams,
    type MachineListVersionsParams as MachineListVersionsParams,
    type MachineRestartParams as MachineRestartParams,
    type MachineSignalParams as MachineSignalParams,
    type MachineStartParams as MachineStartParams,
    type MachineStopParams as MachineStopParams,
    type MachineSuspendParams as MachineSuspendParams,
    type MachineUncordonParams as MachineUncordonParams,
    type MachineWaitForStateParams as MachineWaitForStateParams,
  };

  export {
    LeaseResource as LeaseResource,
    type Lease as Lease,
    type LeaseCreateParams as LeaseCreateParams,
    type LeaseRetrieveParams as LeaseRetrieveParams,
    type LeaseReleaseParams as LeaseReleaseParams,
  };

  export {
    Metadata as Metadata,
    type MetadataRetrieveResponse as MetadataRetrieveResponse,
    type MetadataRetrieveParams as MetadataRetrieveParams,
    type MetadataUpdateParams as MetadataUpdateParams,
    type MetadataDeleteParams as MetadataDeleteParams,
  };
}
