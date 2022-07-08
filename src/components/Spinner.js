import './styles/spinner.scss';

const Spinner = () => {
    return (
        <div className="text-center">
            <div className="spinner-border" role="status" />
            <span >Loading...</span>
        </div>
    )
}

export default Spinner