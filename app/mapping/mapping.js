import { OriginKindEnum } from '../model/enums';
import { mapFacebookEventToPost } from './facebookMapping';

const token = '1126898087427042|6c75ae6050aea3f5ed7ec56365faa649';

export function buildUrl(originId, originKind) {
  if (originKind == OriginKindEnum.FACEBOOK_EVENT)
    return `https://graph.facebook.com/${originId}?fields=cover,description,start_time,end_time,name,place,owner,type&access_token=${token}`;
  if (originKind == OriginKindEnum.FACEBOOK_POST)
    return `https://graph.facebook.com/${originId}?fields=cover,description,start_time,end_time,name,place,owner,type&access_token=${token}`;
}

export function buildPost(originKind, event) {
  if (originKind == OriginKindEnum.FACEBOOK_EVENT)
    return mapFacebookEventToPost(event);
}


