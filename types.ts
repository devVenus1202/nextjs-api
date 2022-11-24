export type Launch = {
  id: string;
  mission_name: string;
  launch_date_local: string;
  launch_date_unix: string;
  launch_date_utc: string;
  details: string;
  links: {
    article_link: string;
    video_link: string;
    mission_patch: string;
    flickr_images: Array<string>;
  }
}