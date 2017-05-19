import './styles.sass';

export default class Portlet extends React.Component {
    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e) {
        e.preventDefault();

        if(e.detail == 1 || e.detail == 0) {
            this.props.click(this.props.id, e.detail);
        }
    }

    render() {
        return (
            <div style={{order: this.props.order}} className="portlet-container">
                <div className="portlet">
                    <span className="portlet-count" onClick={this.clickHandler} onContextMenu={this.clickHandler}>{this.props.rating}</span>
                    <img src={this.props.url} className="portlet-img" />
                </div>
            </div>
        );
    }
}