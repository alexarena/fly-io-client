// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SnapshotsAPI from './snapshots';
import { SnapshotCreateParams, SnapshotListParams, SnapshotListResponse, Snapshots } from './snapshots';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * This site hosts documentation generated from the Fly.io Machines API OpenAPI specification. Visit our complete [Machines API docs](https://fly.io/docs/machines/api/volumes-resource/) for details about using the Volumes resource.
 */
export class Volumes extends APIResource {
  snapshots: SnapshotsAPI.Snapshots = new SnapshotsAPI.Snapshots(this._client);

  /**
   * Create a volume for a specific app using the details provided in the request
   * body.
   */
  create(appName: string, body: VolumeCreateParams, options?: RequestOptions): APIPromise<Volume> {
    return this._client.post(path`/apps/${appName}/volumes`, { body, ...options });
  }

  /**
   * Retrieve details about a specific volume by its ID within an app.
   */
  retrieve(volumeID: string, params: VolumeRetrieveParams, options?: RequestOptions): APIPromise<Volume> {
    const { app_name } = params;
    return this._client.get(path`/apps/${app_name}/volumes/${volumeID}`, options);
  }

  /**
   * Update a volume's configuration using the details provided in the request body.
   */
  update(volumeID: string, params: VolumeUpdateParams, options?: RequestOptions): APIPromise<Volume> {
    const { app_name, ...body } = params;
    return this._client.put(path`/apps/${app_name}/volumes/${volumeID}`, { body, ...options });
  }

  /**
   * List all volumes associated with a specific app.
   */
  list(
    appName: string,
    query: VolumeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VolumeListResponse> {
    return this._client.get(path`/apps/${appName}/volumes`, { query, ...options });
  }

  /**
   * Delete a specific volume within an app by volume ID.
   */
  destroy(volumeID: string, params: VolumeDestroyParams, options?: RequestOptions): APIPromise<Volume> {
    const { app_name } = params;
    return this._client.delete(path`/apps/${app_name}/volumes/${volumeID}`, options);
  }

  /**
   * Extend a volume's size within an app using the details provided in the request
   * body.
   */
  extend(
    volumeID: string,
    params: VolumeExtendParams,
    options?: RequestOptions,
  ): APIPromise<VolumeExtendResponse> {
    const { app_name, ...body } = params;
    return this._client.put(path`/apps/${app_name}/volumes/${volumeID}/extend`, { body, ...options });
  }
}

export interface MachineGuest {
  cpu_kind?: string;

  cpus?: number;

  gpu_kind?: string;

  gpus?: number;

  host_dedication_id?: string;

  kernel_args?: Array<string>;

  memory_mb?: number;
}

export interface Volume {
  id?: string;

  attached_alloc_id?: string;

  attached_machine_id?: string;

  auto_backup_enabled?: boolean;

  block_size?: number;

  blocks?: number;

  blocks_avail?: number;

  blocks_free?: number;

  bytes_total?: number;

  bytes_used?: number;

  created_at?: string;

  encrypted?: boolean;

  fstype?: string;

  host_status?: 'ok' | 'unknown' | 'unreachable';

  name?: string;

  region?: string;

  size_gb?: number;

  snapshot_retention?: number;

  state?: string;

  zone?: string;
}

export type VolumeListResponse = Array<Volume>;

export interface VolumeExtendResponse {
  needs_restart?: boolean;

  volume?: Volume;
}

export interface VolumeCreateParams {
  compute?: MachineGuest;

  compute_image?: string;

  encrypted?: boolean;

  fstype?: string;

  name?: string;

  region?: string;

  require_unique_zone?: boolean;

  size_gb?: number;

  /**
   * restore from snapshot
   */
  snapshot_id?: string;

  snapshot_retention?: number;

  /**
   * fork from remote volume
   */
  source_volume_id?: string;

  unique_zone_app_wide?: boolean;
}

export interface VolumeRetrieveParams {
  /**
   * Fly App Name
   */
  app_name: string;
}

export interface VolumeUpdateParams {
  /**
   * Path param: Fly App Name
   */
  app_name: string;

  /**
   * Body param
   */
  auto_backup_enabled?: boolean;

  /**
   * Body param
   */
  snapshot_retention?: number;
}

export interface VolumeListParams {
  /**
   * Only return summary info about volumes (omit blocks, block size, etc)
   */
  summary?: boolean;
}

export interface VolumeDestroyParams {
  /**
   * Fly App Name
   */
  app_name: string;
}

export interface VolumeExtendParams {
  /**
   * Path param: Fly App Name
   */
  app_name: string;

  /**
   * Body param
   */
  size_gb?: number;
}

Volumes.Snapshots = Snapshots;

export declare namespace Volumes {
  export {
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

  export {
    Snapshots as Snapshots,
    type SnapshotListResponse as SnapshotListResponse,
    type SnapshotCreateParams as SnapshotCreateParams,
    type SnapshotListParams as SnapshotListParams,
  };
}
