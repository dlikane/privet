import {StatusEnum, OriginKindEnum} from '../model/enums';

export function mapFacebookEventToPost(event) {
  console.log("Event: " + JSON.stringify(event));
  return {
    leadId: '',
    status: StatusEnum.CREATED,
    originKind: OriginKindEnum.FACEBOOK_EVENT,
    originId: event.id,
    originLocale: 'en',
    originImg: event.cover.source,
    en_description: event.description,
    ru_description: event.description,
    startTime: event.start_time,
    postedTime: Date,
    duration: 0,
    location: event.location,
  };
}
