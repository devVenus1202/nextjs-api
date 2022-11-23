export type Launch = {
  mission_name: string;
  launch_date_local: string;
  launch_date_unix: string;
  details: string;
  links: {
    article_link: string;
    video_link: string;
    mission_patch: string;
  }
}