import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import GameContext from '../context/GameContext';
import {formatPrice} from '../helpers/formatPrice'

const GameCard = () => {
    const {games, setGames} = useContext(GameContext);

    const navigate = useNavigate();

  return (
    <>
        {games.map((g) => (
            <div className="card col-sm-12 col-lg-4 m-3 p-0 bg-search" key={g.id} style={{width:"18rem"}}>
                <img src={g.img} className="card-img-top" alt={g.name} />
                <div className="card-body">
                    <h5 className="card-title titles text-start">{g.name}</h5>
                    <h4 className="card-title subtitles text-start">$ {formatPrice(g.price)}</h4>
                    <p className="card-text texts text-white text-start">{g.desc}</p>
                </div>
                <div className="card-body">
                    <button to={`/details`} onClick={() =>navigate(`/details`)} className='btn btn-outline-cyan m-1'>
                        Ver publicación
                    </button>
                    <button to={"/favorites"} onClick={() =>navigate(`/favorites`)} className='btn btn-outline-magenta m-1'>
                        Agregar a Favoritos
                    </button>      
                </div>
            </div>
        ))}          
    </>
  )
}

export default GameCard