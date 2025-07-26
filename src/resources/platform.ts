// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as VolumesAPI from './apps/volumes/volumes';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Platform extends APIResource {
  /**
   * List all regions on the platform with their current Machine capacity.
   *
   * @example
   * ```ts
   * const response = await client.platform.listRegions();
   * ```
   */
  listRegions(
    query: PlatformListRegionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlatformListRegionsResponse> {
    return this._client.get('/platform/regions', { query, ...options });
  }

  /**
   * Simulates placing the specified number of machines into regions, depending on
   * available capacity and limits.
   *
   * @example
   * ```ts
   * const response = await client.platform.placePlacements({
   *   org_slug: 'personal',
   * });
   * ```
   */
  placePlacements(
    body: PlatformPlacePlacementsParams,
    options?: RequestOptions,
  ): APIPromise<PlatformPlacePlacementsResponse> {
    return this._client.post('/platform/placements', { body, ...options });
  }
}

export interface PlatformListRegionsResponse {
  regions?: Array<PlatformListRegionsResponse.Region>;
}

export namespace PlatformListRegionsResponse {
  export interface Region {
    capacity?: number;

    code?: string;

    gateway_available?: boolean;

    geo_region?: string;

    latitude?: number;

    longitude?: number;

    name?: string;

    requires_paid_plan?: boolean;
  }
}

export interface PlatformPlacePlacementsResponse {
  regions?: Array<PlatformPlacePlacementsResponse.Region>;
}

export namespace PlatformPlacePlacementsResponse {
  export interface Region {
    /**
     * Hint on the number of machines in this region can be created concurrently. Equal
     * to the number of unique hosts selected for placement.
     */
    concurrency?: number;

    count?: number;

    region?: string;
  }
}

export interface PlatformListRegionsParams {
  /**
   * guest CPU kind
   */
  cpu_kind?: string;

  /**
   * guest CPU count
   */
  cpus?: number;

  /**
   * guest GPU kind
   */
  gpu_kind?: string;

  /**
   * guest GPU count
   */
  gpus?: number;

  /**
   * guest memory in megabytes
   */
  memory_mb?: number;

  /**
   * guest machine size preset. default performance-1x
   */
  size?: string;
}

export interface PlatformPlacePlacementsParams {
  org_slug: string;

  /**
   * Resource requirements for the Machine to simulate. Defaults to a performance-1x
   * machine
   */
  compute?: VolumesAPI.MachineGuest;

  /**
   * Number of machines to simulate placement. Defaults to 0, which returns the
   * org-specific limit for each region.
   */
  count?: number;

  /**
   * Region expression for placement as a comma-delimited set of regions or aliases.
   * Defaults to "[region],any", to prefer the API endpoint's local region with any
   * other region as fallback.
   */
  region?: string;

  volume_name?: string;

  volume_size_bytes?: number;

  /**
   * Optional weights to override default placement preferences.
   */
  weights?: { [key: string]: number };
}

export declare namespace Platform {
  export {
    type PlatformListRegionsResponse as PlatformListRegionsResponse,
    type PlatformPlacePlacementsResponse as PlatformPlacePlacementsResponse,
    type PlatformListRegionsParams as PlatformListRegionsParams,
    type PlatformPlacePlacementsParams as PlatformPlacePlacementsParams,
  };
}
