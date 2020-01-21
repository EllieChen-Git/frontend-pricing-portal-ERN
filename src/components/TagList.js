import React, {Component} from 'react';
import LocalApi from '../apis/LocalApi';

class TagList extends Component{
    state = {tags: []};
    
    async componentDidMount(){
        const tagsResp = await LocalApi.get("/tags")
        .catch((e) => console.log(e));
        this.setState({tags: tagsResp.data});
    }
 
    render() {      
        let tagElements = this.state.tags.map((tag) => <li key={tag.id}>{tag.title}</li>);
        return <ul>{tagElements}</ul>;
    }
}

export default TagList;