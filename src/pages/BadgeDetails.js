import React from 'react'
import { Link } from 'react-router-dom'

import DeleteBadgeModal from '../components/DeleteBadgeModal'
import confLogo from '../images/logo-conf.svg'
import Badge from '../components/badge'

function useIncreaseCount(max){
    const [count, setCount] = React.useState(0)

    if (count > max){
        setCount(0)
    }

    return [count, setCount]
}

function BadgeDetails (props){

const [count, setCount] = useIncreaseCount(4)
const badge = props.badge

    return(
        <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={confLogo} alt="Logo de la conferencia"/>
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant">
                                <h1>
                                    {badge.firstName} {badge.lastName}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Badge firstName={badge.firstName} lastName={badge.lastName} jobTitle={badge.jobTitle}
                                email={badge.email} twitter={badge.twitter} />
                            </div>
                            <div className="col">
                                <h2>actions</h2>
                                <div className="">
                                    <div className="">
                                        <button onClick={() => {
                                            setCount(count + 1 )
                                        }} className="btn btn-primary mr-4">
                                            Increase Count {count}
                                        </button>




                                        <Link className='btn btn-primary mb-4' to={`/badge/${badge.id}/edit`}>
                                            Edit
                                        </Link>
                                    </div>

                                    <div className="">
                                        <button onClick={props.onOpenModal} className='btn btn-danger' to={`/badge/${badge.id}/delete`}>
                                            Delete
                                        </button>
                                        <DeleteBadgeModal 
                                        isOpen={props.modalIsOpen} 
                                        onClose={props.onCloseModal}
                                        onDeleteBadge={props.onDeleteBadge}
                                        />               
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    )
}

export default BadgeDetails