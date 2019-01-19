import React, { Component } from 'react'
import ImageResults from './ImageResults'
import axios from 'axios'

export class Search extends Component {

    state={
        apiURL:'https://pixabay.com/api',
        apiKey:'11135879-e5e49f7bc55d3355963e98725',
        searchText:'',
        amount:20,
        images:[]
    }

    onTextChange = e => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, () => {
          if (val === '') {
            this.setState({ images: [] });
          } else {
            axios
              .get(
                `${this.state.apiURL}/?key=${this.state.apiKey}&q=${
                  this.state.searchText
                }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
              )
              .then(res => this.setState({ images: res.data.hits }))
              .catch(err => console.log(err));
          }
        });
    };



  render() {
    return (
      <div>
        <nav>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" required
                        name="searchText"
                        value={this.state.searchText}
                        onChange={this.onTextChange}
                        style={{fontWeight:'600',fontSize:'30px'}}
                        />
                        <label className="label-icon"
                        ><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>

        <br />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}

        </div>
    )
  }
}

export default Search
