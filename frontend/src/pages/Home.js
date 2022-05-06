import React from 'react'
import DefaultLayout from '../components/DefaultLayout';
import PageTitle from '../components/PageTitle';
import TodoContent from '../components/Todo/TodoContent';
import TodoHeader from '../components/Todo/TodoHeader';
import styles from '../styles/modules/app.module.scss';
function Home() {
    return (
        <DefaultLayout>
            <div className="container">
                <PageTitle>TODO LIST</PageTitle>
                <div className={styles.app__wrapper}>
                    <TodoHeader/>
                    <TodoContent/>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Home
