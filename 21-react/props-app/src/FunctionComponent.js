import PropTypes from 'prop-types';

export default function FunctionComponent(props) {
  const student = '학생';
  const { name } = props;

  return (
    <div>
      <h1>Hi! {student}</h1>
      <p>여기는 Function Component</p>
      <p>
        {/* 새로운 컴포넌트의 이름은 <b>{props.name}</b> */}
        새로운 컴포넌트의 이름은 <b>{name}</b>
      </p>
      <p></p>
    </div>
  );
}

FunctionComponent.defaultProps = {
  name: '기본 Props',
};

FunctionComponent.propTypes = {
  name: PropTypes.string,
  // Failed prop type: Invalid prop `name` of type `boolean` supplied to `FunctionComponent`,
  // expected `string`.
};
