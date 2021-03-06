import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import {
  Grid,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  Alert,
} from 'react-bootstrap';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.post ? props.post.id : v4(),
      timestamp: props.post ? props.post.timestamp : Date.now(),
      title: props.post ? props.post.title : '',
      author: props.post ? props.post.author : '',
      category: props.post ? props.post.category : '',
      body: props.post ? props.post.body : '',
      erro: '',
    };
  }

  onSubmit = e => {
    e.preventDefault();

    if (
      !this.state.title ||
      !this.state.author ||
      !this.state.category ||
      !this.state.body
    ) {
      this.setState(() => ({ erro: 'Please enter all data!' }));
    } else {
      const post = {
        id: this.state.id,
        timestamp: this.state.timestamp,
        title: this.state.title,
        author: this.state.author,
        category: this.state.category,
        body: this.state.body,
      };
      this.setState(() => ({ erro: '' }));
      this.props.onSubmit(post);
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Grid>
        {this.state.erro &&
          <Alert bsStyle="danger">
            <strong>Post not added!</strong> {this.state.erro}
          </Alert>}
        <div>
          <h3>Add a post:</h3>
        </div>
        <form onSubmit={this.onSubmit}>
          <FormGroup>
            <ControlLabel>Title</ControlLabel>
            <FormControl
              placeholder="type title"
              autoFocus
              componentClass="input"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Author</ControlLabel>
            <FormControl
              placeholder="type the author"
              componentClass="input"
              name="author"
              value={this.state.author}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Category</ControlLabel>
            <FormControl
              componentClass="select"
              name="category"
              value={this.state.category}
              onChange={this.onChange}
            >
              <option value="">select category</option>
              {this.props.categories &&
                this.props.categories.map(categoria => {
                  return (
                    <option value={categoria.name} key={categoria.name}>
                      {categoria.name}
                    </option>
                  );
                })}
            </FormControl>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Body Post</ControlLabel>
            <FormControl
              componentClass="textarea"
              name="body"
              placeholder="body"
              rows="10"
              value={this.state.body}
              onChange={this.onChange}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </form>
      </Grid>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories,
});

export default connect(mapStateToProps)(PostForm);
