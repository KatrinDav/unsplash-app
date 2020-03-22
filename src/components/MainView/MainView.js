import React from 'react';
import { UNSPLASH_BASE_URL, UNSPLASH_ACCESS_KEY } from '../../constants';
import Header from '../Header/Header';
import styles from './MainView.module.scss';
import { Link } from 'react-router-dom';


class MainView extends React.Component {
    state = {
        data: [],
    }
    getData() {
        fetch(`${UNSPLASH_BASE_URL}/collections?page=1&per_page=30&client_id=${UNSPLASH_ACCESS_KEY}`)
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
        const list = this.state.data.map(item => (
            <Link key={item.id} to={`/SectionView/${item.id}`} className={styles.section_item}>
                <div className={styles.div_item}>
                    <h2 title={item.title}>{item.title}</h2>
                </div>
            </Link >

        ))
        return (
            <>
                <Header />
                <div className={styles.wrapper}>
                    {list}
                </div>

            </>

        );
    }
}

export default MainView;
