import { Container, Text, SimpleGrid, GridItem } from '@chakra-ui/react';
import React from 'react'
import { Launch } from '../types/Launch'
import InfoCard from './InfoCard';
type PropsType = {
  data: Array<Launch>
}
export default function DataView(props: PropsType) {
  const {data} = props;
  if (data.length === 0) {
    return <Text>No result</Text>
  }
  return (
    <SimpleGrid gap={8} maxW={'full'} paddingX="0" paddingY='5' minChildWidth='xs'>
      {data.map((launch:Launch) => <InfoCard  key={launch.mission_name} data={launch} />)}
    </SimpleGrid>
  )
}
