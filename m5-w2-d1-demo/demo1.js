class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    //add handle
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // add handleChange here
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  // add handleSubmit here
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            vaule={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<NameForm />, document.getElementById("root"));
