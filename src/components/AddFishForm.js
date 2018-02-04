import React from 'react';

class AddFishForm extends React.Component {
  createFish(event) {
    event.preventDefault();
    console.log('GOnna make some fish! 🎣');
    const fish = {
      name: this.refs.name.value,
      price: this.refs.price.value,
      status: this.refs.status.value,
      desc: this.refs.desc.value,
      image: this.refs.image.value,
    }
    this.props.addFish(fish);
    this.fishForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input ref='name' type="text" placeholder="Fish Name" />
        <input ref='price' type="text" placeholder="Fish Price" />
        <select ref='status'>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref='desc' placeholder="Fish Desc" ></textarea>
        <input ref='image' type="text" placeholder="Fish Image" />
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

export default AddFishForm;
