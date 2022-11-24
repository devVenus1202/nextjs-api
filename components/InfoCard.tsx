import React from 'react'
import { 
  Card, 
  CardBody, 
  CardFooter, 
  Heading, 
  Text, 
  Image,
  Button, 
  Link,
  LinkBox,
  Flex
} from '@chakra-ui/react'
import { Launch } from '../types';

type PropsType = {
  data: Launch
}

export default function InfoCard(props: PropsType) {
  const { data } = props;
  const thumbnailImage = data.links.flickr_images[0] || data.links.mission_patch;
  return (
    <Flex width="100%" alignItems="stretch" justifyContent="center">
      <Card maxWidth={"sm"} backgroundColor="white" overflow="hidden" width="100%">
        <Image
          objectFit="cover"
          src={thumbnailImage}
          height="12rem"
          alt="Chakra UI"
        />
        <CardBody padding="1rem" pb="0">
          <Link href={`launch/${data.id}`} target="_blank"><Heading size="md">{data.mission_name}</Heading></Link>
          <Text mb="1rem" fontSize="0.8rem" color="gray" fontStyle="italic">{new Date(data.launch_date_utc).toLocaleString()}</Text>
          <Text noOfLines={2}>
            {data.details}
          </Text>
        </CardBody>
        <CardFooter
          padding="1rem"
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Link href={data.links.video_link} target="_blank" color="gray">
            <Text fontStyle="italic">Watch Video</Text>
          </Link>
          {data.links.article_link && <Link href={data.links.article_link} target="_blank" color="gray">
            <Text fontStyle="italic">Read Article</Text>
          </Link>}
        </CardFooter>
      </Card>
    </Flex>
  )
}
