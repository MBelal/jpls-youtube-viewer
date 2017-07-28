import React, { Component } from "react";
import styled from "styled-components";

const SearchContainer = styled.header`
  height: 3rem;
  width: 100%;
  background-color: #eee;
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  div {
    margin: 0 0.5rem;
    width: 100%;
    display: flex;
    transition: all 0.3s;
    form {
      &::before {
        content: '\u21d2';
        opacity: 0.3;
        height: 1rem;
        width: 1rem;
        position: absolute;
        z-index: 3;
        margin: 0 0.25rem;
      }
      display: flex;
      flex-grow: 1;
      align-items: center;
      input {
        flex-grow: 1;
        display: block;
        margin: auto;
        height: 1.5rem;
        padding: 0 1.25rem;
        transition: all 0.3s;
      }
    }
  }
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <SearchContainer>
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={event => {
                this.setState({ searchTerm: event.target.value });
                this.props.onChange(event.target.value);
              }}
              placeholder="Search..."
            />
          </form>
        </div>
      </SearchContainer>
    );
  }
}

export default SearchBar;
