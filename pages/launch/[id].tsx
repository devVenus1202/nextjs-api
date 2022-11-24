import React from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import client from '../../apollo-client';
import { GET_LAUNCH } from '../../graphql/queries';
import { Launch } from '../../types';
import { Container, Heading, Text } from '@chakra-ui/react';

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { data, error } = await client.query({
    query: GET_LAUNCH,
    variables: { 
      id: context.params?.id
    },
  });
  return {
    props: {
      launch: data.launch,
    },
 };
}

export const getStaticPaths: GetStaticPaths<{id: string}> = async () => {
  return {
    paths: [],
    fallback: true
  }
}

type PropsType = {
  launch: Launch;
}
export default function LaunchDetail(props: PropsType) {
  const { launch } = props;
  return (
    <Container>
      <Heading size={'lg'} margin={'1rem'}>{launch?.mission_name}</Heading>
      <Text>{launch?.details}</Text>
    </Container>
  )
}
