import Gif from 'components/Gif'
import Spinner from 'components/Spinner';
import useSingleGif from 'hooks/useSingleGif'
import useTitle from 'hooks/useTitle';
import { Redirect } from 'wouter';

export default function Detail ({ params }) {

  const {gif, isLoading, isError} = useSingleGif( { id: params.id});

  const title = gif ? gif.title: '';
  useTitle({ title: title});

  if ( isLoading ) return <Spinner/>
  if ( isError ) return <Redirect to="/404"/>
  if ( !gif ) return null;

  return <>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
}