import { gql } from "@apollo/client";

export const PAST_LAUNCHES = gql`
  query PastLaunches($missionName: String) {
    launchesPast(limit: 10, find: {mission_name: $missionName}) {
      mission_name
      details
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
        mission_patch
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`