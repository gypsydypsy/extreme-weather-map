import Loader from "react-loader-spinner"

const Loading = () => {
    return (
        <div className='loading'>
            <Loader
                type="TailSpin"
                color="#2196F3"
                height={80}
                width={80}
                timeout={10000}
            />
        </div>
    )
}

export default Loading