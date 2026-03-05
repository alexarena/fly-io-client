// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Secretkeys extends APIResource {
  /**
   * Get an app's secret key
   */
  retrieve(
    secretName: string,
    params: SecretkeyRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SecretKey> {
    const { app_name, ...query } = params;
    return this._client.get(path`/apps/${app_name}/secretkeys/${secretName}`, { query, ...options });
  }

  /**
   * List secret keys belonging to an app
   */
  list(
    appName: string,
    query: SecretkeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SecretkeyListResponse> {
    return this._client.get(path`/apps/${appName}/secretkeys`, { query, ...options });
  }

  /**
   * Delete an app's secret key
   */
  delete(secretName: string, params: SecretkeyDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { app_name } = params;
    return this._client.delete(path`/apps/${app_name}/secretkeys/${secretName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create or update a secret key
   */
  createOrUpdate(
    secretName: string,
    params: SecretkeyCreateOrUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SetSecretkeyResponse> {
    const { app_name, ...body } = params;
    return this._client.post(path`/apps/${app_name}/secretkeys/${secretName}`, { body, ...options });
  }

  /**
   * Decrypt with a secret key
   */
  decrypt(
    secretName: string,
    params: SecretkeyDecryptParams,
    options?: RequestOptions,
  ): APIPromise<SecretkeyDecryptResponse> {
    const { app_name, min_version, ...body } = params;
    return this._client.post(path`/apps/${app_name}/secretkeys/${secretName}/decrypt`, {
      query: { min_version },
      body,
      ...options,
    });
  }

  /**
   * Encrypt with a secret key
   */
  encrypt(
    secretName: string,
    params: SecretkeyEncryptParams,
    options?: RequestOptions,
  ): APIPromise<SecretkeyEncryptResponse> {
    const { app_name, min_version, ...body } = params;
    return this._client.post(path`/apps/${app_name}/secretkeys/${secretName}/encrypt`, {
      query: { min_version },
      body,
      ...options,
    });
  }

  /**
   * Generate a random secret key
   */
  generate(
    secretName: string,
    params: SecretkeyGenerateParams,
    options?: RequestOptions,
  ): APIPromise<SetSecretkeyResponse> {
    const { app_name, ...body } = params;
    return this._client.post(path`/apps/${app_name}/secretkeys/${secretName}/generate`, { body, ...options });
  }

  /**
   * Sign with a secret key
   */
  sign(
    secretName: string,
    params: SecretkeySignParams,
    options?: RequestOptions,
  ): APIPromise<SecretkeySignResponse> {
    const { app_name, min_version, ...body } = params;
    return this._client.post(path`/apps/${app_name}/secretkeys/${secretName}/sign`, {
      query: { min_version },
      body,
      ...options,
    });
  }

  /**
   * Verify with a secret key
   */
  verify(secretName: string, params: SecretkeyVerifyParams, options?: RequestOptions): APIPromise<void> {
    const { app_name, min_version, ...body } = params;
    return this._client.post(path`/apps/${app_name}/secretkeys/${secretName}/verify`, {
      query: { min_version },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SecretKey {
  name?: string;

  public_key?: Array<number>;

  type?: string;
}

export interface SetSecretkeyRequest {
  type?: string;

  value?: Array<number>;
}

export interface SetSecretkeyResponse {
  name?: string;

  public_key?: Array<number>;

  type?: string;

  version?: number;
}

export interface SecretkeyListResponse {
  secret_keys?: Array<SecretKey>;
}

export interface SecretkeyDecryptResponse {
  plaintext?: Array<number>;
}

export interface SecretkeyEncryptResponse {
  ciphertext?: Array<number>;
}

export interface SecretkeySignResponse {
  signature?: Array<number>;
}

export interface SecretkeyRetrieveParams {
  /**
   * Path param: Fly App Name
   */
  app_name: string;

  /**
   * Query param: Minimum secrets version to return. Returned when setting a new
   * secret
   */
  min_version?: string;
}

export interface SecretkeyListParams {
  /**
   * Minimum secrets version to return. Returned when setting a new secret
   */
  min_version?: string;

  /**
   * Comma-seperated list of secret keys to list
   */
  types?: string;
}

export interface SecretkeyDeleteParams {
  /**
   * Fly App Name
   */
  app_name: string;
}

export interface SecretkeyCreateOrUpdateParams {
  /**
   * Path param: Fly App Name
   */
  app_name: string;

  /**
   * Body param
   */
  type?: string;

  /**
   * Body param
   */
  value?: Array<number>;
}

export interface SecretkeyDecryptParams {
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
   * Body param
   */
  associated_data?: Array<number>;

  /**
   * Body param
   */
  ciphertext?: Array<number>;
}

export interface SecretkeyEncryptParams {
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
   * Body param
   */
  associated_data?: Array<number>;

  /**
   * Body param
   */
  plaintext?: Array<number>;
}

export interface SecretkeyGenerateParams {
  /**
   * Path param: Fly App Name
   */
  app_name: string;

  /**
   * Body param
   */
  type?: string;

  /**
   * Body param
   */
  value?: Array<number>;
}

export interface SecretkeySignParams {
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
   * Body param
   */
  plaintext?: Array<number>;
}

export interface SecretkeyVerifyParams {
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
   * Body param
   */
  plaintext?: Array<number>;

  /**
   * Body param
   */
  signature?: Array<number>;
}

export declare namespace Secretkeys {
  export {
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
}
