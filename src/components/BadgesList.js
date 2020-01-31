import React from 'react'

import '../pages/styles/badges.css'
import { Link } from 'react-router-dom'
import Gravatar from './Gravatar'

function useSearchBadges(badges){
    
    const [query, setQuery] = React.useState('')
    const [ filteredBadges, setFilteredBadges ] = React.useState(badges)

    React.useMemo(() => {
        const result = badges.filter(badge =>{
        return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase())
        })

        setFilteredBadges(result)

    }, [badges, query])

    return {query, setQuery, filteredBadges}
}


function BadgesList (props){

    const badges = props.badges

    const { query, setQuery, filteredBadges } = useSearchBadges(badges)

    if (filteredBadges.length === 0){
        return(
            <div>
                <div className="form-group">
                     <label>Filter Badges</label>
                    <input type="text" className='form-control' 
                    onChange={(e) => {
                    setQuery(e.target.value)
                    }}
                    value={query}/>
                </div>
                <h3>No badges were found</h3>
                <Link className = 'btn btn-primary' to='/badges/new'  >Create new badge</Link>
            </div>
        )
    }

    return(
    <div>
        <div className="form-group">
            <label>Filter Badges</label>
            <input type="text" className='form-control' 
            onChange={(e) => {
                setQuery(e.target.value)
            }}
            value={query}
            
            />
        </div>
        <ul className="list-unstyled">
            {filteredBadges.map((badge) => {
                return(
                    <Link key={badge.id} 
                    className=' text-reset text-decoration-none'
                    to={`/badges/${badge.id}`}> 
                            <li className="lista_datos"   >
                                <div className="personal_image">
                                    <Gravatar email ={badge.email} alt='Avatar' />
                                </div>
                                <div className="personal_info">
                                    <p> {badge.firstName} {badge.lastName} </p>
                                    <p> @{badge.twitter}</p>
                                    <p> {badge.jobTitle} </p>
                                </div>
                                </li>
                        </Link>
                )
            })}
        </ul>
    </div>
    )
}




export default BadgesList