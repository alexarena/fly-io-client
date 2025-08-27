// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { FlyIoClient } from '../client';

export abstract class APIResource {
  protected _client: FlyIoClient;

  constructor(client: FlyIoClient) {
    this._client = client;
  }
}
