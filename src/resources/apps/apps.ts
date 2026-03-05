// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SecretkeysAPI from './secretkeys';
import {
  SecretKey,
  SecretkeyCreateOrUpdateParams,
  SecretkeyDecryptParams,
  SecretkeyDecryptResponse,
  SecretkeyDeleteParams,
  SecretkeyEncryptParams,
  SecretkeyEncryptResponse,
  SecretkeyGenerateParams,
  SecretkeyListParams,
  SecretkeyListResponse,
  SecretkeyRetrieveParams,
  SecretkeySignParams,
  SecretkeySignResponse,
  SecretkeyVerifyParams,
  Secretkeys,
  SetSecretkeyRequest,
  SetSecretkeyResponse,
} from './secretkeys';
import * as SecretsAPI from './secrets';
import {
  AppSecret,
  SecretCreateOrUpdateParams,
  SecretCreateOrUpdateResponse,
  SecretDeleteParams,
  SecretListParams,
  SecretListResponse,
  SecretRetrieveParams,
  Secrets,
} from './secrets';
import * as MachinesAPI from './machines/machines';
import {
  Duration,
  EnvFrom,
  File,
  Machine,
  MachineConfig,
  MachineCordonParams,
  MachineCreateParams,
  MachineDestroyParams,
  MachineEvent,
  MachineExecuteCommandParams,
  MachineExecuteCommandResponse,
  MachineHTTPHeader,
  MachineListEventsParams,
  MachineListEventsResponse,
  MachineListParams,
  MachineListProcessesParams,
  MachineListProcessesResponse,
  MachineListResponse,
  MachineListVersionsParams,
  MachineListVersionsResponse,
  MachineRestart,
  MachineRestartParams,
  MachineRetrieveParams,
  MachineSecret,
  MachineSignalParams,
  MachineStartParams,
  MachineStopParams,
  MachineSuspendParams,
  MachineUncordonParams,
  MachineUpdateParams,
  MachineWaitForStateParams,
  Machines,
  StopConfig,
} from './machines/machines';
import * as VolumesAPI from './volumes/volumes';
import {
  MachineGuest,
  Volume,
  VolumeCreateParams,
  VolumeDestroyParams,
  VolumeExtendParams,
  VolumeExtendResponse,
  VolumeListParams,
  VolumeListResponse,
  VolumeRetrieveParams,
  VolumeUpdateParams,
  Volumes,
} from './volumes/volumes';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * This site hosts documentation generated from the Fly.io Machines API OpenAPI specification. Visit our complete [Machines API docs](https://fly.io/docs/machines/api/apps-resource/) for details about using the Apps resource.
 */
export class Apps extends APIResource {
  machines: MachinesAPI.Machines = new MachinesAPI.Machines(this._client);
  secretkeys: SecretkeysAPI.Secretkeys = new SecretkeysAPI.Secretkeys(this._client);
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);
  volumes: VolumesAPI.Volumes = new VolumesAPI.Volumes(this._client);

  /**
   * Create an app with the specified details in the request body.
   */
  create(body: AppCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/apps', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve details about a specific app by its name.
   */
  retrieve(appName: string, options?: RequestOptions): APIPromise<AppRetrieveResponse> {
    return this._client.get(path`/apps/${appName}`, options);
  }

  /**
   * List all apps with the ability to filter by organization slug.
   */
  list(query: AppListParams, options?: RequestOptions): APIPromise<AppListResponse> {
    return this._client.get('/apps', { query, ...options });
  }

  /**
   * Delete an app by its name.
   */
  delete(appName: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/apps/${appName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create App deploy token
   */
  createDeployToken(
    appName: string,
    body: AppCreateDeployTokenParams,
    options?: RequestOptions,
  ): APIPromise<AppCreateDeployTokenResponse> {
    return this._client.post(path`/apps/${appName}/deploy_token`, { body, ...options });
  }
}

export interface AppRetrieveResponse {
  id?: string;

  name?: string;

  organization?: AppRetrieveResponse.Organization;

  status?: string;
}

export namespace AppRetrieveResponse {
  export interface Organization {
    name?: string;

    slug?: string;
  }
}

export interface AppListResponse {
  apps?: Array<AppListResponse.App>;

  total_apps?: number;
}

export namespace AppListResponse {
  export interface App {
    id?: string;

    machine_count?: number;

    name?: string;

    network?: unknown;
  }
}

export interface AppCreateDeployTokenResponse {
  token?: string;
}

export interface AppCreateParams {
  app_name?: string;

  enable_subdomains?: boolean;

  network?: string;

  org_slug?: string;
}

export interface AppListParams {
  /**
   * The org slug, or 'personal', to filter apps
   */
  org_slug: string;
}

export interface AppCreateDeployTokenParams {
  expiry?: string;
}

Apps.Machines = Machines;
Apps.Secretkeys = Secretkeys;
Apps.Secrets = Secrets;
Apps.Volumes = Volumes;

export declare namespace Apps {
  export {
    type AppRetrieveResponse as AppRetrieveResponse,
    type AppListResponse as AppListResponse,
    type AppCreateDeployTokenResponse as AppCreateDeployTokenResponse,
    type AppCreateParams as AppCreateParams,
    type AppListParams as AppListParams,
    type AppCreateDeployTokenParams as AppCreateDeployTokenParams,
  };

  export {
    Machines as Machines,
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
    Secretkeys as Secretkeys,
    type SecretKey as SecretKey,
    type SetSecretkeyRequest as SetSecretkeyRequest,
    type SetSecretkeyResponse as SetSecretkeyResponse,
    type SecretkeyListResponse as SecretkeyListResponse,
    type SecretkeyDecryptResponse as SecretkeyDecryptResponse,
    type SecretkeyEncryptResponse as SecretkeyEncryptResponse,
    type SecretkeySignResponse as SecretkeySignResponse,
    type SecretkeyRetrieveParams as SecretkeyRetrieveParams,
    type SecretkeyListParams as SecretkeyListParams,
    type SecretkeyDeleteParams as SecretkeyDeleteParams,
    type SecretkeyCreateOrUpdateParams as SecretkeyCreateOrUpdateParams,
    type SecretkeyDecryptParams as SecretkeyDecryptParams,
    type SecretkeyEncryptParams as SecretkeyEncryptParams,
    type SecretkeyGenerateParams as SecretkeyGenerateParams,
    type SecretkeySignParams as SecretkeySignParams,
    type SecretkeyVerifyParams as SecretkeyVerifyParams,
  };

  export {
    Secrets as Secrets,
    type AppSecret as AppSecret,
    type SecretListResponse as SecretListResponse,
    type SecretCreateOrUpdateResponse as SecretCreateOrUpdateResponse,
    type SecretRetrieveParams as SecretRetrieveParams,
    type SecretListParams as SecretListParams,
    type SecretDeleteParams as SecretDeleteParams,
    type SecretCreateOrUpdateParams as SecretCreateOrUpdateParams,
  };

  export {
    Volumes as Volumes,
    type MachineGuest as MachineGuest,
    type Volume as Volume,
    type VolumeListResponse as VolumeListResponse,
    type VolumeExtendResponse as VolumeExtendResponse,
    type VolumeCreateParams as VolumeCreateParams,
    type VolumeRetrieveParams as VolumeRetrieveParams,
    type VolumeUpdateParams as VolumeUpdateParams,
    type VolumeListParams as VolumeListParams,
    type VolumeDestroyParams as VolumeDestroyParams,
    type VolumeExtendParams as VolumeExtendParams,
  };
}
