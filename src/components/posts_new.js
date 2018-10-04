import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderTitleField() {
    return (
      <div>
        <input

        />
      </div>
    )
  }

  render() {
    return (
      <form>
        <Field
          name="title"
          component={this.renderTitleField}
          />


      </form>
    );
  }
}

export default reduxForm({
  //string asigned to the form property must be unique
  form: 'PostsNewForm'
})(PostsNew);
