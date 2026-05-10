
import { createRoot } from 'react-dom/client'
import './index.css'
import { store } from './store/store'
import Posts from './components/Posts'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Posts/>
    </Provider>
)
