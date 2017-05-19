import MainLayout from './layouts/main';
import IndexPage from './pages/index';

let app = document.getElementById('app');

ReactDOM.render(
    <MainLayout>
        <IndexPage />
    </MainLayout>
, app);