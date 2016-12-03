/*...*/

const StatusEnum = {
  CREATED: "Created",
  POSTED: "Posted",
  DELETED: "Deleted"
};

const OriginKindEnum = {
  FACEBOOK_POST: "facebook#post",
  FACEBOOK_EVENT: "facebook#event",
  FACEBOOK_GROUP: "facebook#group",
  FACEBOOK_GALLERY: "facebook#gallery",
  YOUTUBE_VIDEO: "youtube#video"
}

const PartyKindEnum = {
  PERSON: "Person",
  COMPANY: "Company",
}

export {
  StatusEnum,
  OriginKindEnum,
  PartyKindEnum
};