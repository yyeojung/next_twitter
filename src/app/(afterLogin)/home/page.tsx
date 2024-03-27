import Tab from './_component/Tab';
import PostForm from './_component/PostForm';
import TabProvider from './_component/TabProvider';
import style from './home.module.css';
import Post from '../_component/Post';

export default function Home() {
    return (
        <main className={style.main}>
            <TabProvider>
                <Tab/>
                <PostForm/>
                <Post/>
            </TabProvider>
        </main>    
    )
}