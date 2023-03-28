import React from 'react'
import './FeaturedMovie.css'

export default ({item}) => {

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres){
    genres.push(item.genres[i].name);
  }

  let descripition = item.overview;
  if(descripition.length > 200){
    descripition = descripition.substring (0, 200) + '...';
  }

  return (
    <section className='featured' style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
        <div className='featured--vertical'>
            <div className='featured--horizontal'>
                <div className='featured--name'>
                    {item.original_name}
                </div>
                <div className='featured--info'>
                    <div className='featured--points'>
                        {item.vote_average}
                        pontos
                    </div>
                    <div className='featured--year'>
                        {firstDate.getFullYear()}
                    </div>
                    <div className='featured--seasons'>
                        {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}
                    </div>
                </div>
                <div className='featured--descripition'>
                    {descripition}
                </div>
                <div className='featured-buttons'>
                    <a className='featured--watchbutton'>
                        &#9658; Assistir
                    </a>
                    <a className='featured--mylistbutton'>
                        +Minha Lista
                    </a>
                </div>
                <div className='featured-genres'>
                    <strong>Gêneros: </strong>{genres.join(', ')}
                </div>
            </div>

        </div>
    </section>
  );
}
