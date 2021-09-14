import {Route,Switch} from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import FavoritePages from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import Layout from './components/layouts/Layout';
function App() {
  return <Layout>
    
    <Switch>
<Route path='/' exact><AllMeetups /></Route>
<Route path='/newmeetup'><NewMeetup /></Route>
<Route path='/favorites'><FavoritePages /></Route>
</Switch>
  </Layout>;
    
  
}

export default App;
