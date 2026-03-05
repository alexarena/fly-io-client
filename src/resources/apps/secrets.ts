// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Secrets extends APIResource {
  /**
   * Get an app secret
   */
  retrieve(
    secretName: string,
    params: SecretRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AppSecret> {
    const { app_name, ...query } = params;
    return this._client.get(path`/apps/${app_name}/secrets/${secretName}`, { query, ...options });
  }

  /**
   * List app secrets belonging to an app
   */
  list(
    appName: string,
    query: SecretListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SecretListResponse> {
    return this._client.get(path`/apps/${appName}/secrets`, { query, ...options });
  }

  /**
   * Delete an app secret
   */
  delete(secretName: string, params: SecretDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { app_name } = params;
    return this._client.delete(path`/apps/${app_name}/secrets/${secretName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create or update Secret
   */
  createOrUpdate(
    secretName: string,
    params: SecretCreateOrUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SecretCreateOrUpdateResponse> {
    const { app_name, ...body } = params;
    return this._client.post(path`/apps/${app_name}/secrets/${secretName}`, { body, ...options });
  }
}

export interface AppSecret {
  digest?: string;

  name?: string;

  value?: string;
}

export interface SecretListResponse {
  secrets?: Array<AppSecret>;
}

export interface SecretCreateOrUpdateResponse {
  digest?: string;

  name?: string;

  value?: string;

  version?: number;
}

export interface SecretRetrieveParams {
  /**
   * Path param: Fly App Name
   */
  app_name: string;

  /**
   * Query param: Minimum secrets version to return. Returned when setting a new
   * secret
   */
  min_version?: string;

  /**
   * Query param: Show the secret value.
   */
  show_secrets?: boolean;
}

export interface SecretListParams {
  /**
   * Minimum secrets version to return. Returned when setting a new secret
   */
  min_version?: string;

  /**
   * Show the secret values.
   */
  show_secrets?: boolean;
}

export interface SecretDeleteParams {
  /**
   * Fly App Name
   */
  app_name: string;
}

export interface SecretCreateOrUpdateParams {
  /**
   * Path param: Fly App Name
   */
  app_name: string;

  /**
   * Body param
   */
  value?: string;
}

export declare namespace Secrets {
  export {
    type AppSecret as AppSecret,
    type SecretListResponse as SecretListResponse,
    type SecretCreateOrUpdateResponse as SecretCreateOrUpdateResponse,
    type SecretRetrieveParams as SecretRetrieveParams,
    type SecretListParams as SecretListParams,
    type SecretDeleteParams as SecretDeleteParams,
    type SecretCreateOrUpdateParams as SecretCreateOrUpdateParams,
  };
}
