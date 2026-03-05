// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * This site hosts documentation generated from the Fly.io Machines API OpenAPI specification. Visit our complete [Machines API docs](https://fly.io/docs/machines/api/volumes-resource/) for details about using the Volumes resource.
 */
export class Snapshots extends APIResource {
  /**
   * Create a snapshot for a specific volume within an app.
   */
  create(volumeID: string, params: SnapshotCreateParams, options?: RequestOptions): APIPromise<void> {
    const { app_name } = params;
    return this._client.post(path`/apps/${app_name}/volumes/${volumeID}/snapshots`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List all snapshots for a specific volume within an app.
   */
  list(
    volumeID: string,
    params: SnapshotListParams,
    options?: RequestOptions,
  ): APIPromise<SnapshotListResponse> {
    const { app_name } = params;
    return this._client.get(path`/apps/${app_name}/volumes/${volumeID}/snapshots`, options);
  }
}

export type SnapshotListResponse = Array<SnapshotListResponse.SnapshotListResponseItem>;

export namespace SnapshotListResponse {
  export interface SnapshotListResponseItem {
    id?: string;

    created_at?: string;

    digest?: string;

    retention_days?: number;

    size?: number;

    status?: string;
  }
}

export interface SnapshotCreateParams {
  /**
   * Fly App Name
   */
  app_name: string;
}

export interface SnapshotListParams {
  /**
   * Fly App Name
   */
  app_name: string;
}

export declare namespace Snapshots {
  export {
    type SnapshotListResponse as SnapshotListResponse,
    type SnapshotCreateParams as SnapshotCreateParams,
    type SnapshotListParams as SnapshotListParams,
  };
}
