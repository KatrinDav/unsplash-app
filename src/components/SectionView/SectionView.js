import React from 'react';
import { UNSPLASH_LIST_URL, UNSPLASH_ACCESS_KEY, fillPath } from '../../constants';
import { withRouter, Link } from 'react-router-dom';
import styles from './SectionView.module.scss';


class SectionView extends React.Component {
    state = {
        apiData: [],
    }

    componentDidMount() {
        fetch(fillPath(`${UNSPLASH_LIST_URL}client_id=${UNSPLASH_ACCESS_KEY}`, this.props.match.params))
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    apiData: data
                })
            })
    }

    sortPopular = () => {
        const tab = this.state.apiData;
        tab.sort((a, b) => {
            return b.likes - a.likes
        })
        this.setState({
            apiData: tab,
        })
    }

    sortLatest = () => {
        const tab = this.state.apiData;
        tab.sort((a, b) => {
            let x = Date.parse(a.created_at)
            let y = Date.parse(b.created_at)
            return y - x
        })
        this.setState({
            apiData: tab
        })
    }

    render() {

        const foto_list = this.state.apiData.map(item => (
            <Link key={item.id} to={`/ItemView/${item.id}`}>
                <div className={styles.item}>
                    <img src={item.urls.small} key={item.id} alt="foto" />
                    <div className={styles.info}>
                        <p>{item.likes} likes</p>
                    </div>
                </div>

            </Link>
        ))

        return (
            <>

                <button onClick={this.sortPopular} className={`${styles.btn} ${styles.popular}`} >sort by the most popular</button>
                <button onClick={this.sortLatest} className={`${styles.btn} ${styles.latest}`}>sort by the latest</button>
                <div className={styles.container}>
                    {foto_list}
                </div>


            </>
        );
    }

}




export default withRouter(SectionView);