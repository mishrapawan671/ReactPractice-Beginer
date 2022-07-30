const Details = ({ detail }) => {
  // console.log(props.id);
  return (
    <tr key={detail.id}>
      <td>{detail.id}</td>
      <td>{detail.first_name}</td>
      <td>{detail.email}</td>
    </tr>
  );
};
export default Details;
