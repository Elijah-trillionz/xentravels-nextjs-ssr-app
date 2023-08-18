import agility from '@agility/content-fetch';

const instanceGuid = process.env.AGILITY_INSTANCE_GUID;

export const api = agility.getApi({
  guid: instanceGuid,
  apiKey: process.env.AGILITY_API_KEY,
  isPreview: false,
});
