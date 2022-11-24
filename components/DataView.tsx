import { Text, SimpleGrid, Center } from '@chakra-ui/react';
import React from 'react'
import { Launch } from '../types'
import InfoCard from './InfoCard';
type PropsType = {
  data: Array<Launch>
}
export default function DataView(props: PropsType) {
  const {data} = props;
  if (data.length === 0) {
    return <Center h="10rem"><Text size="sm">No result</Text></Center>
  }
  return (
    <SimpleGrid columns={{xs: 1, sm: 2, md: 3, lg: 4, xl: 4, '2xl': 6}} gap="1.5rem" maxW="full" paddingX="0" paddingY="5">
      {data.map((launch:Launch) => <InfoCard  key={launch.mission_name} data={launch} />)}
    </SimpleGrid>
  )
}
