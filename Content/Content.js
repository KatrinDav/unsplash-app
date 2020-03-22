import React from 'react';
import { UNSPLASH_BASE_URL, UNSPLASH_ACCESS_KEY } from '../../constants';
import './Content.css';
import { Link } from 'react-router-dom';


class Content extends React.Component {
    state = {
        data: [],
    }
    getData() {
        fetch(`${UNSPLASH_BASE_URL}/collections/featured?page=1&client_id=${UNSPLASH_ACCESS_KEY}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    data: data
                })
            })
    }
    componentDidMount() {
        this.getData()
    }
    render() {

        // this.props.match.params.id;
        const list = this.state.data.map(item => (
            <Link key={item.id} to={`/SectionView/${item.id}`} className="section_item">
                <div className="div_item">
                    <img src={item.cover_photo.urls.small} alt="foto" />
                    <figcaption className="title">{item.title}</figcaption>
                </div>

            </Link >
        ))
        return (
            <>
                <h2 className='header'>Lista sekcji</h2>
                <div className="wrapper">
                    {list}
                </div>

            </>

        );
    }
}

export default Content;
