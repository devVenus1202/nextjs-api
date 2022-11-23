import React from 'react'
import { 
  Card, 
  CardBody, 
  CardFooter, 
  Heading, 
  Text, 
  Image,
  Button 
} from '@chakra-ui/react'
import { Launch } from '../types/Launch';

type PropsType = {
  data: Launch
}

export default function InfoCard(props: PropsType) {
  const { data } = props;
  console.log("data",data)
  return (
    <Card maxW='md'>
      <Image
        objectFit='cover'
        src={data.links.mission_patch}
        alt='Chakra UI'
      />
      <CardBody>
        <Heading size='md'>{data.mission_name}</Heading>
        <Text mb={2} size='sm' color={'gray'} fontStyle='italic'>{data.launch_date_local}</Text>
        <Text>
          {data.details}
        </Text>
      </CardBody>
      <CardFooter
        justify='space-between'
        flexWrap='wrap'
        sx={{
          '& > button': {
            minW: '136px',
          },
        }}
      >
        <Button flex='1' variant='ghost'>
          Read More
        </Button>
      </CardFooter>
    </Card>
  )
}
