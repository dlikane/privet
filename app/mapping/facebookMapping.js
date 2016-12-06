import {StatusEnum, OriginKindEnum} from '../model/enums';

export function mapFacebookEventToPost(event) {
  console.log("event: " + JSON.stringify(event));

  return {
    leadId: '',
    status: StatusEnum.CREATED,
    originKind: OriginKindEnum.FACEBOOK_EVENT,
    originId: event.id,
    originLocale: 'en',
    description: [ {
      locale: 'en',
      text: event.description,
    },
      {
        locale: 'ru',
        text: event.description,
      },
    ],
    startTime: event.start_time,
    postedTime: Date,
    duration: 0,
    location: event.location,
  };
}
