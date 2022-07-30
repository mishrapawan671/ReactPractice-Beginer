const Details = ({ detail }) => {
  // console.log(props.id);
  return (
    <tr>
      <td>{detail.id}</td>
      <td>{detail.first_name}</td> <td>{detail.email}</td>{" "}
    </tr>
  );
};
export default Details;
