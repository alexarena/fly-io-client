// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { ArenaFlyIo } from '../client';

export abstract class APIResource {
  protected _client: ArenaFlyIo;

  constructor(client: ArenaFlyIo) {
    this._client = client;
  }
}
