import './styles.sass';

export default class Footer extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className='footer'>
                <div className='footer-text'>
                    © Natalia Loginova, Epam Systems
                </div>
            </div>
        );
    }
}
