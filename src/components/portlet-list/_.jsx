import './styles';

import Portlet from '../portlet/_';

export default class PortletList extends React.Component {
    constructor(props) {
        super(props);

        let portlets = new Array(this.props.urls.length).fill(0).map((_, i) => {
            return {
                id: i,
                rating: 0
            };
        });

        this.state = {
            portlets
        };

        this.click = this.click.bind(this);
        this.reset = this.reset.bind(this);
    }

    click(key, which) {
        let portlets = this.state.portlets.slice(0);
        let portlet = portlets.find(_ => _.id == key);
        let rating = portlet.rating;

        if(which == 1) { //left
            rating += 1;
        } else if (which == 0) { //right
            if(rating > 0)
                rating -= 1;
        }

        portlet.rating = rating;

        this.setState({
            portlets
        });        
    }

    reset() {
        let portlets = this.state.portlets.slice(0).map(p => {
            p.rating = 0;
            return p;
        });

        this.setState({
            portlets
        });
    }

    render() {
        let count = this.props.urls;
        let sortedPortlets = this.state.portlets.sort((a, b) => {
            if (a.rating >= b.rating) return -1;
            if (a.rating <= b.rating) return 1;
            return 0;
        });

        let portlets = this.props.urls.map((url, index) => {
            let portlet = this.state.portlets.find(_ => _.id == index);
            let portletOrder = sortedPortlets.findIndex(_ => _.id == index);

            return <Portlet 
                    url={url}
                    rating={portlet.rating}
                    order={portletOrder}
                    id={portlet.id}
                    click={this.click}
                    key={index}/>
        });

        return (
            <div>
                <div className="button-container">
                    <button type="button" className="button-reset" onClick={this.reset}>Reset</button>
                </div>
                <div className="portlet-list">
                    {portlets}
                </div>
            </div>
        );
    }
}

/*
export function (props) {
    render() {
        let portlets = props.urls.map((url, index) => <Portlet url={url} key={index} />);

        return (
            <div className="portlet-list">
                {portlets}
            </div>
        );
    }
}
*/