import React, { Component } from 'react'
import StoreService from '../services/StoreService'

class ListStoreComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
                stores: [],
                keyword:'',
        }
        this.addStore = this.addStore.bind(this);
        this.editStore = this.editStore.bind(this);
        this.deleteStore = this.deleteStore.bind(this);
        this.searchStore = this.searchStore.bind(this);
    }

    componentDidMount(){
        StoreService.getStores().then((res) => {
            this.setState({ stores: res.data});
        });

    }

    



    deleteStore(id){
        StoreService.deleteStore(id).then( res => {
            this.setState({stores: this.state.stores.filter(store => store.storeId !== id)});
        });
    }
    viewStore(id){
        
        this.props.history.push(`/view-store/${id}`);
    }
    editStore(id){
        this.props.history.push(`/add-store/${id}`);
    }

    addStore(){
        this.props.history.push('/add-store/_add');
    }


    changeSearchHandler= (event) => {
        console.log("search Handler");
        this.setState({searchKeyword: event.target.value});
    }

    searchStore(searchKeyword){
        console.log("search Store Method "+searchKeyword);
         this.props.history.push(`/search-stores/${searchKeyword}`);
        

    }



    render() {
        return (
            <div>
                <br/>
                 <h2 className="text-center">Store List</h2>
                 <div className = "row">
                    <div className="col-md-10">
                                     <nav className="navbar navbar-light bg-dark"  style={{ border:`0px`, height:`83px`, width:`700px`, alignItems:`center`, marginLeft:`350px` }}>
                  <form className="form-inline" style={{width:`550px`}}>
                    <input className="form-control mr-sm-6 " type="search" placeholder="Search" aria-label="Search" value={this.state.searchKeyword} onChange={this.changeSearchHandler} style={{width:`385px`, margin:`0px`, float:`left`, marginLeft:`20px`}}/>
                   
                    <button onClick={ () => this.searchStore(this.state.searchKeyword)} className="btn btn-info ">Search </button>

                  </form>
                </nav>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-secondary" onClick={this.addStore} style={{marginTop:`15px`}}> Add New Store</button>
                </div>
                 </div>
                 
<br></br><br></br><br></br>



                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Store No. </th>
                                    <th> Store Name</th>
                                    <th> Store Number</th>
                                    <th> Store Location</th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.stores.map(
                                        store => 
                                        <tr key = {store.storeId}>
                                                <td> {store.storeId} </td>   
                                                <td> {store.storeName} </td>   
                                                 <td> {store.storeNumber}</td>
                                                 <td> {store.storeLocation}</td>
                                                
                                             <td>
                                                 <button onClick={ () => this.editStore(store.storeId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStore(store.storeId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewStore(store.storeId)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListStoreComponent