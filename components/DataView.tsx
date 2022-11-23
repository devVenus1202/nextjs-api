import { Text } from '@chakra-ui/react';
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
    <div>
      {data.map((launch:Launch) => <InfoCard key={launch.mission_name} data={launch} />)}
    </div>
  )
}
