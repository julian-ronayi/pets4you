import gql from 'graphql-tag';
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { initializeApollo } from '../apollo/client'

const HELLO_QUERY = gql`
  query helloQuery {
    hello
  }
`

const Index = () => {
  const { data, loading } = useQuery(HELLO_QUERY);

  if (loading) return <div>Loading</div>

  return (
    <h1>This is text from apollo: {data.hello}</h1>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: HELLO_QUERY,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Index
