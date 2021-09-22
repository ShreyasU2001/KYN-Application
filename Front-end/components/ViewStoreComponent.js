import React, { Component } from 'react'
import StoreService from '../services/StoreService'

class ViewStoreComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            storeId: this.props.match.params.id,
            storeName: "",
            storeNumber: "",
            storeLocation: ""
        }
    }

    componentDidMount(){
        StoreService.getStoreById(this.state.storeId).then( res => {
            let store = res.data;
            this.setState(
                {
                    storeName:store.storeName,
                    storeLocation:store.storeLocation,
                    storeNumber:store.storeNumber
                }
            )
        })
    }

    render() {
        return (
            <div>
                <br></br><br></br>
                        

                <div className = "card col-md-6 offset-md-3" style={{backgroundColor:`white`}}>
                    <h3 className = "text-center" style={{fontSize:`30px`, color:`Black`}}><b>View Store Details</b></h3> 
                    <div className = "card-body" style={{fontSize:`25px`}}>

                        <div className = "row" style={{color:`Black`}}>
                            <label> Store Name:  { this.state.storeName}</label>
                            
                        </div>
                        <br></br>
                        <div className = "row" style={{color:`Black`}}>
                            <label> Store Number:  { this.state.storeNumber }</label>
                            
                        </div>
                        <br></br>
                        <div className = "row" style={{color:`Black`}}>
                            <label> Store Location:  { this.state.storeLocation }</label>
                            
                        </div>

                        
                    </div>

                </div>
                <br/><br/><br/>
            </div>
        )
    }
}

export default ViewStoreComponent