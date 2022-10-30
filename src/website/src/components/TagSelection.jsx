import React, { Component } from "react";
import "./TagSelection.css";

export default class TagSelection extends Component {
  constructor() {
    super();
    this.state = {
      allTags: [],
      selectedTags: [],
    };

    this.toggleTag = this.toggleTag.bind(this);
    this.tagIsSelected = this.tagIsSelected.bind(this);
  }

  async getTags() {
    const rawResponse = await fetch("/tags");

    if (!rawResponse.ok) {
      const message = `An error has occured: ${rawResponse.status}`;
      throw new Error(message);
    }

    this.setState({
      allTags: await rawResponse.json(),
      selectedTags: [],
    });
  }

  toggleTag(e) {
    const name = e.target.innerHTML;
    let selectedTags = this.state.selectedTags;

    if (selectedTags.find((element) => element === name)) {
      selectedTags = selectedTags.filter((element) => element !== name);
    } else {
      selectedTags.unshift(name);
    }

    this.setState({
      selectedTags: selectedTags,
    });
  }

  tagIsSelected(tag) {
    return (
      this.state.selectedTags.find((element) => element === tag) !== undefined
    );
  }

  componentDidMount() {
    this.getTags();
  }

  render() {
    const allTagsDisplay = this.state.allTags.map((tag) => {
      return (
        <li
          className={
            "tag all-tags" + (this.tagIsSelected(tag) ? " active-tag" : "")
          }
          onClick={this.toggleTag}
          key={tag}
        >
          {tag}
        </li>
      );
    });
    const selectedTagsDisplay = this.state.selectedTags.map((tag) => {
      return (
        <li className="tag active-tag" onClick={this.toggleTag} key={tag}>
          {tag}
        </li>
      );
    });
    return (
      <div>
        <h1 className="instruction-header">
          Please select the tags according to your personal interests.
        </h1>
        <div className="tag-selection container">
          <div className="tag-group">
            <h1 className="tag-header">ALL TAGS</h1>
            <ul className="tag-list">{allTagsDisplay}</ul>
          </div>
          <div className="tag-group">
            <h1 className="tag-header">YOUR TAGS</h1>
            <ul className="tag-list">{selectedTagsDisplay}</ul>
          </div>
        </div>
      </div>
    );
  }
}
