import { gql } from "@apollo/client";

export const PAST_LAUNCHES = gql`
  query PastLaunches($missionName: String, $offset: Int!, $limit: Int!) {
    launchesPast(sort:"launch_date_utc", order:"desc", limit: $limit, offset:$offset find: {mission_name: $missionName}) {
      id
      mission_name
      details
      launch_date_local
      launch_date_utc
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
        mission_patch
        flickr_images
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`

export const GET_LAUNCH = gql`
  query GetLaunch($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      details
      launch_date_local
      launch_date_utc
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
        mission_patch
        flickr_images
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`