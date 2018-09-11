import React from 'react';

class PickList extends React.Component {
  renderItems() {
    return this.props.items.map(item => (
      <li key={item.initial}>{item.name}</li>
    ));
  }
  render() {
    return (
      <div className="item-title">
        <p>{this.props.title}</p>
        <p>
          <input type="text" placeholder="filter" />
        </p>
        <ul className="items">
          {this.renderItems()}
        </ul>
      </div>
    );
  }
}

export default PickList;
