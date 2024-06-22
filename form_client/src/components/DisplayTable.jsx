import Table from "react-bootstrap/Table";

function DisplayTable() {
  return (
    <Table striped="columns" className="my-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>jksdgfksjdgfksjd</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DisplayTable;
