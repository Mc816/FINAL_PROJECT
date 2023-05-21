import { Component } from "react";
import { signUp } from "../../utilities/users-service";

export default class SignUpForm extends Component {
  state = {
    name: "",
    phrase: "",
  };

  // The object passed to setState is merged with the current state object
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const addCharacter = { ...this.state };

      const user = await signUp(addCharacter);

      this.props.setUser(user);
    } catch {
      // An error occurred
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Phrase</label>
            <input
              type="phrase"
              name="phrase"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />

            <button type="submit">Add</button>
          </form>
        </div>
        {/* <p className="error-message">&nbsp;{this.state.error}</p> */}
      </div>
    );
  }
}
