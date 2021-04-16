import React from 'react';

class SignupPage extends React.Component {
  state = {
    email: "",
    password: "",
    nationality: "default",
    items: ["British", "French", "Italian", "Brazilian"]
  };

  handleChange = (event) => {
    console.log(event.target.checked);

    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {};
  render() {
    return (<div>
      <div className="form-group">
        <label htmlFor={"useremail"}>Email</label>
        <input
          type="email"
          className="form-control"
          id="useremail"
          name="email"
          onChange={this.state.handleChange}
          value={this.state.email}
         />
      </div>

      <div className="form-group">
        <label htmlFor={"pass"}>Password (8 characters minimum)</label>
        <input
          type="userpassword"
          className="form-control"
          id="pass"
          name="password"
          onChange={this.state.handleChange}
          value={this.state.password}
          minlength="8" 
          required
         />
      </div>

      <div className="form-group">
      <label htmlFor="usernationality">Nationality</label>
      <select
        className="form-control"
        id="usernationality"
        name="nationality"
        onChange={this.state.handleChange}
        value={this.state.nationality}
        defaultValue="choose nationality"
        
      >
        <option value="default" disabled>
          Select a nationality
        </option>
        {this.state.items.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
    </div>

      </div>
    );
  }
}

export default SignupPage;

