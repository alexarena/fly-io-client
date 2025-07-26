# Apps

Types:

- <code><a href="./src/resources/apps/apps.ts">AppRetrieveResponse</a></code>
- <code><a href="./src/resources/apps/apps.ts">AppListResponse</a></code>
- <code><a href="./src/resources/apps/apps.ts">AppCreateDeployTokenResponse</a></code>

Methods:

- <code title="post /apps">client.apps.<a href="./src/resources/apps/apps.ts">create</a>({ ...params }) -> void</code>
- <code title="get /apps/{app_name}">client.apps.<a href="./src/resources/apps/apps.ts">retrieve</a>(appName) -> AppRetrieveResponse</code>
- <code title="get /apps">client.apps.<a href="./src/resources/apps/apps.ts">list</a>({ ...params }) -> AppListResponse</code>
- <code title="delete /apps/{app_name}">client.apps.<a href="./src/resources/apps/apps.ts">delete</a>(appName) -> void</code>
- <code title="post /apps/{app_name}/deploy_token">client.apps.<a href="./src/resources/apps/apps.ts">createDeployToken</a>(appName, { ...params }) -> AppCreateDeployTokenResponse</code>

## Machines

Types:

- <code><a href="./src/resources/apps/machines/machines.ts">Duration</a></code>
- <code><a href="./src/resources/apps/machines/machines.ts">EnvFrom</a></code>
- <code><a href="./src/resources/apps/machines/machines.ts">File</a></code>
- <code><a href="./src/resources/apps/machines/machines.ts">Machine</a></code>
- <code><a href="./src/resources/apps/machines/machines.ts">MachineConfig</a></code>
- <code><a href="./src/resources/apps/machines/machines.ts">MachineEvent</a></code>
- <code><a href="./src/resources/apps/machines/machines.ts">MachineHTTPHeader</a></code>
- <code><a href="./src/resources/apps/machines/machines.ts">MachineRestart</a></code>
- <code><a href="./src/resources/apps/machines/machines.ts">MachineSecret</a></code>
- <code><a href="./src/resources/apps/machines/machines.ts">StopConfig</a></code>
- <code><a href="./src/resources/apps/machines/machines.ts">MachineListResponse</a></code>
- <code><a href="./src/resources/apps/machines/machines.ts">MachineExecuteCommandResponse</a></code>
- <code><a href="./src/resources/apps/machines/machines.ts">MachineListEventsResponse</a></code>
- <code><a href="./src/resources/apps/machines/machines.ts">MachineListProcessesResponse</a></code>
- <code><a href="./src/resources/apps/machines/machines.ts">MachineListVersionsResponse</a></code>

Methods:

- <code title="post /apps/{app_name}/machines">client.apps.machines.<a href="./src/resources/apps/machines/machines.ts">create</a>(appName, { ...params }) -> Machine</code>
- <code title="get /apps/{app_name}/machines/{machine_id}">client.apps.machines.<a href="./src/resources/apps/machines/machines.ts">retrieve</a>(machineID, { ...params }) -> Machine</code>
- <code title="post /apps/{app_name}/machines/{machine_id}">client.apps.machines.<a href="./src/resources/apps/machines/machines.ts">update</a>(machineID, { ...params }) -> Machine</code>
- <code title="get /apps/{app_name}/machines">client.apps.machines.<a href="./src/resources/apps/machines/machines.ts">list</a>(appName, { ...params }) -> MachineListResponse</code>
- <code title="post /apps/{app_name}/machines/{machine_id}/cordon">client.apps.machines.<a href="./src/resources/apps/machines/machines.ts">cordon</a>(machineID, { ...params }) -> void</code>
- <code title="delete /apps/{app_name}/machines/{machine_id}">client.apps.machines.<a href="./src/resources/apps/machines/machines.ts">destroy</a>(machineID, { ...params }) -> void</code>
- <code title="post /apps/{app_name}/machines/{machine_id}/exec">client.apps.machines.<a href="./src/resources/apps/machines/machines.ts">executeCommand</a>(machineID, { ...params }) -> MachineExecuteCommandResponse</code>
- <code title="get /apps/{app_name}/machines/{machine_id}/events">client.apps.machines.<a href="./src/resources/apps/machines/machines.ts">listEvents</a>(machineID, { ...params }) -> MachineListEventsResponse</code>
- <code title="get /apps/{app_name}/machines/{machine_id}/ps">client.apps.machines.<a href="./src/resources/apps/machines/machines.ts">listProcesses</a>(machineID, { ...params }) -> MachineListProcessesResponse</code>
- <code title="get /apps/{app_name}/machines/{machine_id}/versions">client.apps.machines.<a href="./src/resources/apps/machines/machines.ts">listVersions</a>(machineID, { ...params }) -> MachineListVersionsResponse</code>
- <code title="post /apps/{app_name}/machines/{machine_id}/restart">client.apps.machines.<a href="./src/resources/apps/machines/machines.ts">restart</a>(machineID, { ...params }) -> void</code>
- <code title="post /apps/{app_name}/machines/{machine_id}/signal">client.apps.machines.<a href="./src/resources/apps/machines/machines.ts">signal</a>(machineID, { ...params }) -> void</code>
- <code title="post /apps/{app_name}/machines/{machine_id}/start">client.apps.machines.<a href="./src/resources/apps/machines/machines.ts">start</a>(machineID, { ...params }) -> void</code>
- <code title="post /apps/{app_name}/machines/{machine_id}/stop">client.apps.machines.<a href="./src/resources/apps/machines/machines.ts">stop</a>(machineID, { ...params }) -> void</code>
- <code title="post /apps/{app_name}/machines/{machine_id}/suspend">client.apps.machines.<a href="./src/resources/apps/machines/machines.ts">suspend</a>(machineID, { ...params }) -> void</code>
- <code title="post /apps/{app_name}/machines/{machine_id}/uncordon">client.apps.machines.<a href="./src/resources/apps/machines/machines.ts">uncordon</a>(machineID, { ...params }) -> void</code>
- <code title="get /apps/{app_name}/machines/{machine_id}/wait">client.apps.machines.<a href="./src/resources/apps/machines/machines.ts">waitForState</a>(machineID, { ...params }) -> void</code>

### Lease

Types:

- <code><a href="./src/resources/apps/machines/lease.ts">Lease</a></code>

Methods:

- <code title="post /apps/{app_name}/machines/{machine_id}/lease">client.apps.machines.lease.<a href="./src/resources/apps/machines/lease.ts">create</a>(machineID, { ...params }) -> Lease</code>
- <code title="get /apps/{app_name}/machines/{machine_id}/lease">client.apps.machines.lease.<a href="./src/resources/apps/machines/lease.ts">retrieve</a>(machineID, { ...params }) -> Lease</code>
- <code title="delete /apps/{app_name}/machines/{machine_id}/lease">client.apps.machines.lease.<a href="./src/resources/apps/machines/lease.ts">release</a>(machineID, { ...params }) -> void</code>

### Metadata

Types:

- <code><a href="./src/resources/apps/machines/metadata.ts">MetadataRetrieveResponse</a></code>

Methods:

- <code title="get /apps/{app_name}/machines/{machine_id}/metadata">client.apps.machines.metadata.<a href="./src/resources/apps/machines/metadata.ts">retrieve</a>(machineID, { ...params }) -> MetadataRetrieveResponse</code>
- <code title="post /apps/{app_name}/machines/{machine_id}/metadata/{key}">client.apps.machines.metadata.<a href="./src/resources/apps/machines/metadata.ts">update</a>(key, { ...params }) -> void</code>
- <code title="delete /apps/{app_name}/machines/{machine_id}/metadata/{key}">client.apps.machines.metadata.<a href="./src/resources/apps/machines/metadata.ts">delete</a>(key, { ...params }) -> void</code>

## Secretkeys

Types:

- <code><a href="./src/resources/apps/secretkeys.ts">SecretKey</a></code>
- <code><a href="./src/resources/apps/secretkeys.ts">SetSecretkeyRequest</a></code>
- <code><a href="./src/resources/apps/secretkeys.ts">SetSecretkeyResponse</a></code>
- <code><a href="./src/resources/apps/secretkeys.ts">SecretkeyListResponse</a></code>
- <code><a href="./src/resources/apps/secretkeys.ts">SecretkeyDecryptResponse</a></code>
- <code><a href="./src/resources/apps/secretkeys.ts">SecretkeyEncryptResponse</a></code>
- <code><a href="./src/resources/apps/secretkeys.ts">SecretkeySignResponse</a></code>

Methods:

- <code title="get /apps/{app_name}/secretkeys/{secret_name}">client.apps.secretkeys.<a href="./src/resources/apps/secretkeys.ts">retrieve</a>(secretName, { ...params }) -> SecretKey</code>
- <code title="get /apps/{app_name}/secretkeys">client.apps.secretkeys.<a href="./src/resources/apps/secretkeys.ts">list</a>(appName, { ...params }) -> SecretkeyListResponse</code>
- <code title="delete /apps/{app_name}/secretkeys/{secret_name}">client.apps.secretkeys.<a href="./src/resources/apps/secretkeys.ts">delete</a>(secretName, { ...params }) -> void</code>
- <code title="post /apps/{app_name}/secretkeys/{secret_name}">client.apps.secretkeys.<a href="./src/resources/apps/secretkeys.ts">createOrUpdate</a>(secretName, { ...params }) -> SetSecretkeyResponse</code>
- <code title="post /apps/{app_name}/secretkeys/{secret_name}/decrypt">client.apps.secretkeys.<a href="./src/resources/apps/secretkeys.ts">decrypt</a>(secretName, { ...params }) -> SecretkeyDecryptResponse</code>
- <code title="post /apps/{app_name}/secretkeys/{secret_name}/encrypt">client.apps.secretkeys.<a href="./src/resources/apps/secretkeys.ts">encrypt</a>(secretName, { ...params }) -> SecretkeyEncryptResponse</code>
- <code title="post /apps/{app_name}/secretkeys/{secret_name}/generate">client.apps.secretkeys.<a href="./src/resources/apps/secretkeys.ts">generate</a>(secretName, { ...params }) -> SetSecretkeyResponse</code>
- <code title="post /apps/{app_name}/secretkeys/{secret_name}/sign">client.apps.secretkeys.<a href="./src/resources/apps/secretkeys.ts">sign</a>(secretName, { ...params }) -> SecretkeySignResponse</code>
- <code title="post /apps/{app_name}/secretkeys/{secret_name}/verify">client.apps.secretkeys.<a href="./src/resources/apps/secretkeys.ts">verify</a>(secretName, { ...params }) -> void</code>

## Secrets

Types:

- <code><a href="./src/resources/apps/secrets.ts">AppSecret</a></code>
- <code><a href="./src/resources/apps/secrets.ts">SecretListResponse</a></code>
- <code><a href="./src/resources/apps/secrets.ts">SecretCreateOrUpdateResponse</a></code>

Methods:

- <code title="get /apps/{app_name}/secrets/{secret_name}">client.apps.secrets.<a href="./src/resources/apps/secrets.ts">retrieve</a>(secretName, { ...params }) -> AppSecret</code>
- <code title="get /apps/{app_name}/secrets">client.apps.secrets.<a href="./src/resources/apps/secrets.ts">list</a>(appName, { ...params }) -> SecretListResponse</code>
- <code title="delete /apps/{app_name}/secrets/{secret_name}">client.apps.secrets.<a href="./src/resources/apps/secrets.ts">delete</a>(secretName, { ...params }) -> void</code>
- <code title="post /apps/{app_name}/secrets/{secret_name}">client.apps.secrets.<a href="./src/resources/apps/secrets.ts">createOrUpdate</a>(secretName, { ...params }) -> SecretCreateOrUpdateResponse</code>

## Volumes

Types:

- <code><a href="./src/resources/apps/volumes/volumes.ts">MachineGuest</a></code>
- <code><a href="./src/resources/apps/volumes/volumes.ts">Volume</a></code>
- <code><a href="./src/resources/apps/volumes/volumes.ts">VolumeListResponse</a></code>
- <code><a href="./src/resources/apps/volumes/volumes.ts">VolumeExtendResponse</a></code>

Methods:

- <code title="post /apps/{app_name}/volumes">client.apps.volumes.<a href="./src/resources/apps/volumes/volumes.ts">create</a>(appName, { ...params }) -> Volume</code>
- <code title="get /apps/{app_name}/volumes/{volume_id}">client.apps.volumes.<a href="./src/resources/apps/volumes/volumes.ts">retrieve</a>(volumeID, { ...params }) -> Volume</code>
- <code title="put /apps/{app_name}/volumes/{volume_id}">client.apps.volumes.<a href="./src/resources/apps/volumes/volumes.ts">update</a>(volumeID, { ...params }) -> Volume</code>
- <code title="get /apps/{app_name}/volumes">client.apps.volumes.<a href="./src/resources/apps/volumes/volumes.ts">list</a>(appName, { ...params }) -> VolumeListResponse</code>
- <code title="delete /apps/{app_name}/volumes/{volume_id}">client.apps.volumes.<a href="./src/resources/apps/volumes/volumes.ts">destroy</a>(volumeID, { ...params }) -> Volume</code>
- <code title="put /apps/{app_name}/volumes/{volume_id}/extend">client.apps.volumes.<a href="./src/resources/apps/volumes/volumes.ts">extend</a>(volumeID, { ...params }) -> VolumeExtendResponse</code>

### Snapshots

Types:

- <code><a href="./src/resources/apps/volumes/snapshots.ts">SnapshotListResponse</a></code>

Methods:

- <code title="post /apps/{app_name}/volumes/{volume_id}/snapshots">client.apps.volumes.snapshots.<a href="./src/resources/apps/volumes/snapshots.ts">create</a>(volumeID, { ...params }) -> void</code>
- <code title="get /apps/{app_name}/volumes/{volume_id}/snapshots">client.apps.volumes.snapshots.<a href="./src/resources/apps/volumes/snapshots.ts">list</a>(volumeID, { ...params }) -> SnapshotListResponse</code>

# Platform

Types:

- <code><a href="./src/resources/platform.ts">PlatformListRegionsResponse</a></code>
- <code><a href="./src/resources/platform.ts">PlatformPlacePlacementsResponse</a></code>

Methods:

- <code title="get /platform/regions">client.platform.<a href="./src/resources/platform.ts">listRegions</a>({ ...params }) -> PlatformListRegionsResponse</code>
- <code title="post /platform/placements">client.platform.<a href="./src/resources/platform.ts">placePlacements</a>({ ...params }) -> PlatformPlacePlacementsResponse</code>

# Tokens

Types:

- <code><a href="./src/resources/tokens.ts">TokenRequestKmsResponse</a></code>
- <code><a href="./src/resources/tokens.ts">TokenRequestOidcResponse</a></code>
- <code><a href="./src/resources/tokens.ts">TokenRetrieveCurrentResponse</a></code>

Methods:

- <code title="post /tokens/kms">client.tokens.<a href="./src/resources/tokens.ts">requestKms</a>() -> string</code>
- <code title="post /tokens/oidc">client.tokens.<a href="./src/resources/tokens.ts">requestOidc</a>({ ...params }) -> string</code>
- <code title="get /v1/tokens/current">client.tokens.<a href="./src/resources/tokens.ts">retrieveCurrent</a>() -> TokenRetrieveCurrentResponse</code>
