import './styles.sass';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='header'>
                    <h1 className="header-text_decor">
                        Rating for list of phone
                    </h1>
                    <h2 className="header-text-action">
                        Click on left button on mouse for increase or
                        on right for decrease
                    </h2>
            </div>
        );
    }
}
