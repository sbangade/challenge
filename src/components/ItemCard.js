import React from 'react';
import PropTypes from 'prop-types';

export const ItemCard = ({toggleEditing, item, image, onChange, index, onDelete}) => (
    <div className="col-md-6 col-lg-12">
      <div className="card mb-3">
        {/* <img className="card-img-top" src={image}/> */}
        <div className="card-body">
        {item.isEditing
              ?
              <div className="mb-4">
                <input
                    type="text"
                    name="story"
                    className="form-control mb-2 mr-sm-2"
                    placeholder="Story"
                    value={item.story}
                    onChange={event => onChange(event, index)}
                    required
                />
                <input
                    type="text"
                    name="name"
                    className="form-control mb-2 mr-sm-2"
                    placeholder="Name"
                    value={item.name}
                    onChange={event => onChange(event, index)}
                    required
                />
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={item.email}
                    onChange={event => onChange(event, index)}
                    required
                />
              </div>
              :
              <div>
          <div class="form-outline">
  <textarea class="form-control" id="textAreaExample1" rows="6">{item.story}</textarea>
  {/* <label class="form-label" for="textAreaExample"></label> */}
</div> 
          {/* <h5 className="card-title text-center">{item.name}</h5> */}
          <p className="card-text">
              <span className="badge">Auther</span>
              <span>{item.name}</span>
            </p>
            <p className="card-text">
              <span className="badge">Email</span>
              <span>{item.email}</span>
            </p>
          {/* <div className="row justify-content-center mb-4">
            <p className="card-text">
              <span className="badge badge-primary py-2 mr-5">Price</span>
              <span>${item.price}</span>
            </p>
          </div> */}
          </div>
          }<br></br>
          <h5>Comments</h5>
          <div class="row">
  <div class="col-4">{item.fname} {item.remail}</div>
  <div class="col-8">{item.text}</div>
</div>


          <div className="row justify-content-center">
            <div>
        <button type="button" className="btn btn-success mr-2" onClick={toggleEditing}>{item.isEditing ? "Save" : "Edit"}</button>
              <button type="button" className="btn btn-danger" onClick={onDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
);

ItemCard.propTypes = {
  image: PropTypes.string.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }),
  toggleEditing: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};