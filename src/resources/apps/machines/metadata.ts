// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * This site hosts documentation generated from the Fly.io Machines API OpenAPI specification. Visit our complete [Machines API docs](https://fly.io/docs/machines/api/machines-resource/) for details about using the Machines resource.
 */
export class Metadata extends APIResource {
  /**
   * Retrieve metadata for a specific Machine within an app.
   */
  retrieve(
    machineID: string,
    params: MetadataRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MetadataRetrieveResponse> {
    const { app_name } = params;
    return this._client.get(path`/apps/${app_name}/machines/${machineID}/metadata`, options);
  }

  /**
   * Update metadata for a specific machine within an app by providing a metadata
   * key.
   */
  update(key: string, params: MetadataUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { app_name, machine_id } = params;
    return this._client.post(path`/apps/${app_name}/machines/${machine_id}/metadata/${key}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete metadata for a specific Machine within an app by providing a metadata
   * key.
   */
  delete(key: string, params: MetadataDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { app_name, machine_id } = params;
    return this._client.delete(path`/apps/${app_name}/machines/${machine_id}/metadata/${key}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type MetadataRetrieveResponse = { [key: string]: string };

export interface MetadataRetrieveParams {
  /**
   * Fly App Name
   */
  app_name: string;
}

export interface MetadataUpdateParams {
  /**
   * Fly App Name
   */
  app_name: string;

  /**
   * Machine ID
   */
  machine_id: string;
}

export interface MetadataDeleteParams {
  /**
   * Fly App Name
   */
  app_name: string;

  /**
   * Machine ID
   */
  machine_id: string;
}

export declare namespace Metadata {
  export {
    type MetadataRetrieveResponse as MetadataRetrieveResponse,
    type MetadataRetrieveParams as MetadataRetrieveParams,
    type MetadataUpdateParams as MetadataUpdateParams,
    type MetadataDeleteParams as MetadataDeleteParams,
  };
}
