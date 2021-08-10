import React from 'react';
import PropTypes from 'prop-types';

//TODO : Destruct the name and email and story within the function argument parentheses
//TODO : Add name as a value to the item-name input element and also email to the email-input element
//TODO : Add a name attribute to the item-name input element with a value of name
//TODO : Add onChange to the list of destructed elements in the function argument list.
//TODO : Add an onChange attribute to both input elements with the value of the onChange prop.
//TODO : Add an onSubmit to the list of destructed elements in the function argument list.
//TODO : Add an onSubmit attribute to the form with the value of onSubmit.
export const AddItem = ({ story, name, email, onChange, onSubmit}) => (
    <div className="row justify-content-center">
      <form className="form-inline" onSubmit={onSubmit}>
      <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="Story"
            value={story}
            name= "story"
            onChange={onChange}
        />
        <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="Auther Name"
            value={name}
            name= "name"
            onChange={onChange}
        />

        <div className="input-group mb-2 mr-sm-2">
          <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              name="email"
              onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2 pxy-4">Save</button>
      </form>
      
    </div>
);


AddItem.PropTypes = {
  story: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired

}

