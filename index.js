import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Lab06App = function(props) {
  return <main>
    <Title label="Lab06 - React Application" />
    <Catalog />
    </main>;
};
const root = ReactDOM.createRoot(document.getElementById('react-lab'));
root.render(<Lab06App />);


const Title = function(props) {
  return <h1>{props.label}</h1>;
};

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filename : "images/img1.jpg", alt : "image 1", editing : false };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAltChange = this.handleAltChange.bind(this);
    this.renderNormal = this.renderNormal.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.editClick = this.editClick.bind(this);
    this.saveClick = this.saveClick.bind(this);

  }

  editClick() {
    this.setState({ editing: true });
  }

  saveClick() {
    this.setState({ editing: false });
  }

  handleNameChange(event) {
    this.setState({ filename: event.target.value });
  }

  handleAltChange(event) {
    //const value = event.target.value;
		//const name = event.target.name;
		this.setState({alt: event.target.value});
  }

  renderNormal() {
    return (<div>
              <h2>{this.state.alt}</h2>
              <img src={this.state.filename} 
              alt={this.state.alt} 
              onClick={this.editClick} />
            </div>);
  }
  render() {
    if (this.state.editing) {
      return this.renderEdit();
    } else {
      return this.renderNormal();
    }
  }

  renderEdit() {
    return (
      <div>
        <p>
        <label> File name: </label>
          <select onChange={this.handleNameChange}>
            <option value="images/img1.jpg">Image 1</option>
            <option value="images/img2.jpg">Image 2</option>
            <option value="images/img3.jpg">Image 3</option>
            <option value="images/img4.jpg">Image 4</option>
          </select>
        </p>
        <p><label> Alt: </label>
          <input
            type="text"
            value={this.state.alt}
            onChange={this.handleAltChange}
          />
        </p>
        <button onClick={this.saveClick}>Save</button>
      </div>
    );
  }
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();