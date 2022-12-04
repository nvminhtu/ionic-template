// Generated by https://quicktype.io

export interface Tweet {
    text:                      string;
    truncated:                 boolean;
    in_reply_to_user_id:       null;
    in_reply_to_status_id:     null;
    favorited:                 boolean;
    source:                    string;
    in_reply_to_screen_name:   null;
    in_reply_to_status_id_str: null;
    id_str:                    string;
    entities:                  Entities;
    contributors:              null;
    retweeted:                 boolean;
    in_reply_to_user_id_str:   null;
    place:                     null;
    retweet_count:             number;
    created_at:                string;
    retweeted_status:          RetweetedStatus;
    user:                      User;
    id:                        number;
    coordinates:               null;
    geo:                       null;
}

export interface Entities {
    user_mentions: UserMention[];
    urls:          any[];
    hashtags:      Hashtag[];
}

export interface Hashtag {
    text:    string;
    indices: number[];
}

export interface UserMention {
    indices:     number[];
    screen_name: string;
    id_str:      string;
    name:        string;
    id:          number;
}

export interface RetweetedStatus {
    text:                      string;
    truncated:                 boolean;
    in_reply_to_user_id:       null;
    in_reply_to_status_id:     null;
    favorited:                 boolean;
    source:                    string;
    in_reply_to_screen_name:   null;
    in_reply_to_status_id_str: null;
    id_str:                    string;
    entities:                  Entities;
    contributors:              null;
    retweeted:                 boolean;
    in_reply_to_user_id_str:   null;
    place:                     null;
    retweet_count:             number;
    created_at:                string;
    user:                      User;
    id:                        number;
    coordinates:               null;
    geo:                       null;
}

export interface User {
    notifications:                null;
    profile_use_background_image: boolean;
    statuses_count:               number;
    profile_background_color:     string;
    followers_count:              number;
    profile_image_url:            string;
    listed_count:                 number;
    profile_background_image_url: string;
    description:                  string;
    screen_name:                  string;
    default_profile:              boolean;
    verified:                     boolean;
    time_zone:                    null | string;
    profile_text_color:           string;
    is_translator:                boolean;
    profile_sidebar_fill_color:   string;
    location:                     string;
    id_str:                       string;
    default_profile_image:        boolean;
    profile_background_tile:      boolean;
    lang:                         string;
    friends_count:                number;
    protected:                    boolean;
    favourites_count:             number;
    created_at:                   string;
    profile_link_color:           string;
    name:                         string;
    show_all_inline_media:        boolean;
    follow_request_sent:          null;
    geo_enabled:                  boolean;
    profile_sidebar_border_color: string;
    url:                          null;
    id:                           number;
    contributors_enabled:         boolean;
    following:                    null;
    utc_offset:                   number | null;
}