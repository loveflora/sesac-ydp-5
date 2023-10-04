export default function PropsTest1(props) {
  return <div style={{ color: 'red' }}>{props.food}</div>;
}

PropsTest1.defaultProps = {
  food: '나베',
};
