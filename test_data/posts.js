/*
 post // type: facebook#event, facebook#post, facebook#gallery, youtube#video, youtube#list, native

 party // person, service, company,

 tag // party

 post has follow-up posts (in reverse - lead_id)

 post has owners
 */

var posts = {
  "posts": [
    {
      "_id": "5840f295e62502227897df34",
      "lead_id": "",
      "kind": "facebook#event",
      "status": "published",
      "origin_id": "535468143313636",
      "origin_local": "ru",
      "origin_img": "",
      "description": [
        {
          "locale": "ru",
          "msg": "Клуб бардовской песни \"Южный крест\" приглашает на вечер “Крылья на Минуту\" дуэта Ланы Джанджгава и Михаила Фролова. Стихи читает Яков Маргулис.\nВечер состоится  Glen Eira Town Hall, corner Glen Eira & Hawthorn Roads, Caulfield"
        },
        {
          "locale": "en",
          "msg": "Bard Club - Southern Cross running an event"
        }
      ],
      "start_time": "2016-11-13T18:00:00+1100",
      "posted_time": "2016-10-19T11:20:11+0000",
      "duration": "2h",
      "location": "Glen Eira Town Hall",
      "parties" : ["5840f295e62502227897df33"],
      "tags": []
    },
    {
      "_id": "5840f295e62502227897df37",
      "lead_id": "",
      "kind": "youtube#video",
      "status": "published",
      "origin_id": "",
      "origin_local": "ru",
      "origin_img": "",
      "description": [
        {
          "locale": "",
          "msg": "The XIII Russian Resurrection Festival - Opening ceremony Melbourne"
        },
      ],
      "start_time": "",
      "posted_time": "2016-11-28T13:54:50.000Z",
      "duration": "",
      "location": "Federation Square",
      "parties": ["5840f295e62502227897df33"],
      "tags": []
    }
  ]
};

var parties = {
  "parties": [
    {
      "_id": "5840f295e62502227897df33",
      "kind": "company",
      "origin_kind": "facebook",
      "origin_id": "535468143313636",
      "thumb_url": "",
      "contact": {
        "address": "Glen Eira Town Hall, Melbourne, 3000",
        "phone": "13412341234",
        "email": "one@two.three.com",
        "link_url": ""
      },
      "name_ru": "Клуб бардовской песни \"Южный крест\"",
      "name_en": "Bard Club - Southern Cross",
      "description_ru": "Клуб бардовской песни \"Южный крест\"",
      "description_en": "Bard Club - Southern Cross",
      "tags": []
    }
  ]
};

var tags = {
  "tags": [
    {
      "id": "4440f295e62502227897df34",
      "name_ru": "видео",
      "name_en": "video"
    }
  ]
};
