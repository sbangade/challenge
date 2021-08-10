import React, {Component} from 'react';
import image from '../img/vumbulaitem.png';
import {ItemCard} from "./ItemCard";
import {Footer} from "./Footer";
import {Nav} from "./Nav";
import {Jumbtron} from "./Jumbtron";
import {AddItem} from "./AddItem";

class App extends Component {
  state = {
    story: '',
    name: "",
    email: "",
    items: [
      {
        id: 1,
        story: 'Many people opt to use plain text rather than rich text for most of their editing. This practice is especially common among programmers and developers, who code in languages constructed with plain text and are used to that environment. Plain text is simple, easy to read, and can be read and sent to anyone. It also has none of the device or software compatibility issues that come with varying fonts. Those are just some of the reasons why many people use text files over more powerful applications like Word. There is even a large group of people who use plain text for all text editing, from creating grocery lists to typing out full-length novels.',
        name: "Stephen King",
        email: "Stephen@gmail.com",
        fname : 'shubham',
        remail: 'sbangade1995@gmail.com',
        text: 'Great article'
      },
      {
        id: 2,
        story: 'Diwali, or Dipawali, is Indias biggest and most important holiday of the year. The festival gets its name from the row (avali) of clay lamps (deepa) that Indians light outside their homes to symbolize the inner light that protects from spiritual darkness. This festival is as important to Hindus as the Christmas holiday is to Christians. Over the centuries, Diwali has become a national festival thats also enjoyed by non-Hindu communities.',
        name: "Ray Bradbury",
        email: "raygmail.com",
        fname : 'Merwyn',
        remail: 'merwyn19@gmail.com',
        text: 'I really enjoy diwali'
      },
      {
        id: 3,
        story: 'The early Christian community distinguished between the identification of the date of Jesus’ birth and the liturgical celebration of that event. The actual observance of the day of Jesus’ birth was long in coming. In particular, during the first two centuries of Christianity there was strong opposition to recognizing birthdays of martyrs or, for that matter, of Jesus. Numerous Church Fathers offered sarcastic comments about the pagan custom of celebrating birthdays when, in fact, saints and martyrs should be honoured on the days of their martyrdom—their true “birthdays,” from the church’s perspective.',
        name: "Arundhati Roy",
        email: "arundhati@gmail.com",
        fname : 'Harsh',
        remail: 'hasrsh15@gmail.com',
        text: 'I love cristmass seassion'
      },
      {
        id: 4,
        story: 'The festival of colours, Holi, is the most vibrant of all Hindu festivals. It marks the end of winter in India and welcomes the spring season. On this festive day, people play with colours, meet and greet one another and create new beginnings. But do you know the real reason why Holi is celebrated? Here’s all you need to know about this colourful festival and what you can look forward to during the upcoming Holi in India.',
        name: "Rusking Bond",
        email: "ruskin@gmail.com",
        fname : 'Clevin',
        remail: 'clevin@gmail.com',
        text: 'I would love to come to India to celebrate holi'
      }
    ]
  };

  /**
   * Handle input changes in the AddItem component.
   * @param event
   */
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  /**
   * Add an item to state.
   * @param event
   */
  addItem = event => {
    event.preventDefault();
    const {story, name, email, fname, remail, text} = this.state;
    const itemsInState = this.state.items;
    const itemsArrayLength = itemsInState.length;
    const id = itemsArrayLength ? (itemsInState[itemsArrayLength - 1].id + 1) : 1;
    this.setState({
      items: [
        ...itemsInState,
        Object.assign({}, {
          id,
          story,
          name,
          email,
          fname,
          remail,
          text
        })
      ],
      story: "",
      name: "",
      email: "",
      fname: '',
      remail: '',
      text: ''
    })
  };

  /**
   * Toggle the isEditing property of an item when the Edit button
   * within ItemCard is clicked.
   * @param index
   */
  toggleItemEditing = index => {
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            isEditing: !item.isEditing
          }
        }
        return item;
      })
    });
  };

  /**
   * Update the Name, email and post of an item.
   * @param event
   * @param index
   */
  handleItemUpdate = (event, index) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            [name]: value
          }
        }
        return item;
      })
    });
  };

  onDelete = index => {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1)
      ]
    });
  };

  render() {
    const {story, name, email, fname, remail, text} = this.state;
    return <div>
      <Nav/>

      <Jumbtron/>

      <div className="container pt-4">

        <AddItem
            story={story}
            name={name}
            price={email}
            fname = {fname}
            remail = {remail}
            text ={text}
            onChange={this.handleInputChange}
            onSubmit={this.addItem}
        />
        {/* <Comments
            fname = {fname}
            remail = {remail}
            text ={text}
            onChange={this.handleInputChange}
            onSubmit={this.addItem}
        /> */}
        <div class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
    aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary">search</button>
</div>
        <h1 className="display-4 my-4 text-center text-muted">Posts</h1>

        <div className="row">
          {
            this.state.items.map((item, index) =>
                <ItemCard
                    key={item.id}
                    index={index}
                    image={image}
                    item={item}
                    toggleEditing={() => this.toggleItemEditing(index)}
                    onChange={this.handleItemUpdate}
                    onDelete = {() => this.onDelete(index)}
                />
            )
          }
        </div>

        <hr/>
        <Footer/>
      </div>
    </div>;
  }
}

export default App;