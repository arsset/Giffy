import Gif from '../Gif'
import './styles.css'

export default function ListOfGifs ({gifs}) {
  return <div className='ListOfGifs'>
    {
      gifs.map(({id, title, url, externalInfo}) =>
        <Gif
          id={id}
          key={id}
          title={title}
          url={url}
          {... externalInfo}
        />
      )
    }
  </div>
}