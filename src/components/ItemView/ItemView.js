import React from 'react';
import { withRouter } from 'react-router-dom';
import { UNSPLASH_PHOTO_URL, UNSPLASH_ACCESS_KEY, fillPath } from '../../constants';
import InfoItem from '../InfoItem/InfoItem';
import styles from './ItemView.module.scss';


class ItemView extends React.Component {
    state = {
        url: '',
        date: '',
        description: '',
        alt_description: '',
        likes: '',
        views: '',
        author: '',
        downloads: '',
        location: '',

    }
    componentDidMount() {
        fetch(fillPath(`${UNSPLASH_PHOTO_URL}client_id=${UNSPLASH_ACCESS_KEY}`, this.props.match.params))
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    url: data.urls.regular,
                    date: data.created_at,
                    description: data.description,
                    alt_description: data.alt_description,
                    likes: data.likes,
                    views: data.views,
                    author: data.user.name,
                    downloads: data.downloads,
                    location: data.location.title,
                })
            })
    }
    render() {
        console.log(this.props.match.params)
        const { url, date, description, alt_description, likes, views, author, downloads, location } = this.state;
        const photo = <img src={url} alt="foto" />;

        return (
            <>
                <div className={styles.item_foto}>
                    {photo}
                </div>
                <div className={styles.item_info}>
                    <InfoItem date={date} description={description} alt_description={alt_description} likes={likes} views={views} author={author} downloads={downloads} location={location} />
                </div>


            </>
        );
    }
}

export default withRouter(ItemView);