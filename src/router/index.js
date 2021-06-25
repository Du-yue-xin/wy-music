import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../components/Main'
import FindMusic from "../components/findMusic/diyRecommend/FindMusic";
import diyRecommend from "../components/findMusic/diyRecommend";
import SongList from "../components/findMusic/diyRecommend/SongList";
import MusicListTable from "../components/findMusic/diyRecommend/MusicListTable";
import CommentPage from "../components/findMusic/diyRecommend/CommentPage";
import VideoPage from "../components/findMusic/diyRecommend/VideoPage";


Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Main,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router