import React from 'react'


import confLogo from '../images/header-logo.svg'
import './styles/badges.css'
import BadgesList from '../components/BadgesList'
import { Link } from 'react-router-dom'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import api from '../api'

class Badges extends React.Component{
        state = {
          loading: true,
          error: null,
          data: undefined
        }

        componentDidMount(){
          this.fecthData()

          this.intervalId = setInterval(this.fecthData, 5000)
        }

        componentWillUnmount(){
          clearInterval(this.intervalId)
        }

        fecthData = async () => {
          this.setState({
            loading: true,
            error: null
          })

          try{
            const data = await api.badges.list()
            this.setState({
              loading: false,
              data: data
            })
          } catch(error){
            this.setState({
              loading: false,
              error: error
            })
          }
        }


    render(){
      if (this.state.loading === true && !this.state.data){
        return <PageLoading />
      }

      if (this.state.error){
        return <PageError error= {this.state.error} />
      }


      console.log('2/4. render()')
        return(
            <React.Fragment>
                    <div className="Badges__hero">
                            <img className="Badges__logo-conf" 
                            src={confLogo}
                            alt="Conf Logo"/>
                        </div>
                        
                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className='btn btn-primary'>New Badge</Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badge__container">
                            <BadgesList badges = {this.state.data} />        

                            {this.state.loading && 'Loading...'}                  
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges