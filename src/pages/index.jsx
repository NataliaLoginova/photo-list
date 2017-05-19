import PortletList from '../components/portlet-list/_';
import Header from '../components/header/_';
import Footer from '../components/footer/_';
import './styles.sass';

let photos = require('../data/photo.json');

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            urls: photos
        };
    }

    render() {
        return (
            <div className="page">
                <Header/>
                <PortletList urls={this.state.urls}></PortletList>
                <Footer/>
            </div>
        )
    }
}