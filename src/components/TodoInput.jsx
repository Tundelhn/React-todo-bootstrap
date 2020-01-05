import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-4">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              value={item}
              onChange={handleChange}
              type="text"
              className="form-control text-capitalize"
              placeholder="Add a todo item"
            />
          </div>
          <button
            className={
              editItem
                ? 'btn btn-success btn-block mt-3'
                : 'btn btn-primary btn-block mt-3'
            }>
            {editItem ? 'edit Item' : 'add item'}
          </button>
        </form>
      </div>
    );
  }
}
