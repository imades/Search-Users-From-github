import React, { Component } from 'react'

export default class SearchUsers extends Component {
      
    state={
         search:' '         
    }
    handleForm=(e)=>{
        this.setState({
            search:e.target.value
        })
    }
    searchusers=(e)=>{
        e.preventDefault();
        this.props.getUserSearch(this.state.search)
    }
    render() {
        const {search}=this.state;
        return (
         
                <form onSubmit={this.searchusers}>
                    <div className="form-group">
                        <input onChange={this.handleForm} value={search} placeholder="Search an User..." type="text" className="form-control"/>
                    </div>
                        <button type="submit" className="btn btn-info">Search</button>
                </form>
            
        )
    }
}

