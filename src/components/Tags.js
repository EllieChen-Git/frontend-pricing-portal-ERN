import React, {Component} from 'react';
import LocalApi from '../apis/LocalApi';

function Tag(props) {
    const clickWrapper = () => props.handleClick(props.tag);
    return <button onClick={clickWrapper}>{props.tag.title}</button>;
}

class Tags extends Component{
    state = {tags: []};

    reloadTags = () => {
        LocalApi.get("/tags")
        .then((r) => this.setState({tags: r.data}))
        .catch((e) => console.log(e));  
    }
    
    componentDidMount(){
        this.reloadTags();
    }
 
    render() {
        let elements = this.state.tags.map(
            (tag) => <Tag key={tag._id} handleClick={this.props.handleSelect} tag={tag}/>);
            console.log(elements)
        return (
        <div>
            Tags: {elements} |  
            <button onClick={this.reloadTags}>Reload</button>
            <button onClick={() => this.props.handleSelect(null)}>Clear Selected</button>
            <br/>
            {this.props.selectedTag && <h3>Selected tag: {this.props.selectedTag.title}</h3>}
        </div>);
    }
}

export default Tags;