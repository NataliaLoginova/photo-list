export default class MainLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}