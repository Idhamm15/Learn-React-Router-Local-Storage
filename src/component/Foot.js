import './Foot.css';

function Foot(props) {
  const name = 'Sandi';
  return (
    <div id="footer">
      <h1>created by: {`${name} dan ${props.createdBy}`}</h1>
    </div>
  )
}

export default Foot;