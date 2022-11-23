import { gql } from "@apollo/client";

export const pastLaunches = gql`
  query PastLaunches {
    launchesPast(limit: 10) {
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