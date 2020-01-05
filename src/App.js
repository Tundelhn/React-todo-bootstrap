import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
export class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    console.log(newItem);

    const updatedItem = [...this.state.items, newItem];
    this.setState({
      items: updatedItem,
      item: '',
      id: uuid.v4(),
      editItem: false
    });
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    const filterItemId = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filterItemId
    });
  };

  handleEdit = id => {
    const filterItem = this.state.items.filter(item => item.id !== id);
    const foundItem = this.state.items.find(item => item.id === id);
    console.log(foundItem);
    this.setState({
      items: filterItem,
      item: foundItem.title,
      editItem: true,
      id: id
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
