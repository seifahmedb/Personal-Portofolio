import Photo from './meCartooon.png';


const style = {
    width: '440px',
    height: '410px',
    marginLeft: '900px',
    marginTop: '-400px',
    // borderRadius: '50%',
    // background: 'linear-gradient(to right, orange,red, purple)'
}

const imgstyle = {
    width: '500px',
    height: '450px',
    // borderRadius: '50%',
    marginLeft: '4px',
    marginTop: '5px'
}
    





const MyPhoto = () => {
    return (
        <div style={style}>
            <img style={imgstyle} src={Photo} alt="myPhoto" />
        </div>
    );
}

export default MyPhoto