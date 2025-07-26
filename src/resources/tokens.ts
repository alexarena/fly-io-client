// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Tokens extends APIResource {
  /**
   * This site hosts documentation generated from the Fly.io Machines API OpenAPI
   * specification. Visit our complete
   * [Machines API docs](https://fly.io/docs/machines/api/apps-resource/) for details
   * about using the Apps resource.
   *
   * @example
   * ```ts
   * const response = await client.tokens.requestKms();
   * ```
   */
  requestKms(options?: RequestOptions): APIPromise<string> {
    return this._client.post('/tokens/kms', options);
  }

  /**
   * Request an Open ID Connect token for your machine. Customize the audience claim
   * with the `aud` parameter. This returns a JWT token. Learn more about
   * [using OpenID Connect](/docs/reference/openid-connect/) on Fly.io.
   *
   * @example
   * ```ts
   * const response = await client.tokens.requestOidc();
   * ```
   */
  requestOidc(body: TokenRequestOidcParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post('/tokens/oidc', { body, ...options });
  }

  /**
   * Get information about the current macaroon token(s), including organizations,
   * apps, and whether each token is from a user or machine
   *
   * @example
   * ```ts
   * const response = await client.tokens.retrieveCurrent();
   * ```
   */
  retrieveCurrent(options?: RequestOptions): APIPromise<TokenRetrieveCurrentResponse> {
    return this._client.get('/v1/tokens/current', options);
  }
}

export type TokenRequestKmsResponse = string;

export type TokenRequestOidcResponse = string;

export interface TokenRetrieveCurrentResponse {
  tokens?: Array<TokenRetrieveCurrentResponse.Token>;
}

export namespace TokenRetrieveCurrentResponse {
  export interface Token {
    apps?: Array<string>;

    org_slug?: string;

    organization?: string;

    /**
     * Machine the token is restricted to (FromMachine caveat)
     */
    restricted_to_machine?: string;

    /**
     * Machine making the request
     */
    source_machine_id?: string;

    token_id?: string;

    /**
     * User identifier if token is for a user
     */
    user?: string;
  }
}

export interface TokenRequestOidcParams {
  aud?: string;

  aws_principal_tags?: boolean;
}

export declare namespace Tokens {
  export {
    type TokenRequestKmsResponse as TokenRequestKmsResponse,
    type TokenRequestOidcResponse as TokenRequestOidcResponse,
    type TokenRetrieveCurrentResponse as TokenRetrieveCurrentResponse,
    type TokenRequestOidcParams as TokenRequestOidcParams,
  };
}
