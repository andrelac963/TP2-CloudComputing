export default {
    NODE_ENV : import.meta.env.VITE_NODE_ENV || 'development',
    HOST : import.meta.env.VITE_HOST || 'localhost',
    PORT : import.meta.env.VITE_PORT || 3000,
    BACKEND_ENDPOINT: import.meta.env.VITE_BACKEND_ENDPOINT,
    RECOMMEND_ENDPOINT: import.meta.env.VITE_RECOMMEND_ENDPOINT || '/recommend'
}