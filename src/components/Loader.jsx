import '../styles/Loading.scss';

const Loader = () => {
  return (
    <div className="overlay">
      <div className="loading">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default Loader
