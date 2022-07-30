const { Component } = require("react");
const { default: Details } = require("./Details");

class ListRender extends Component {
  constructor() {
    super();
    this.info = [
      {
        id: 1,
        first_name: "Rey",
        last_name: "Hause",
        email: "rhause0@jimdo.com",
        gender: "Male"
      },
      {
        id: 2,
        first_name: "Sergent",
        last_name: "Swadlinge",
        email: "sswadlinge1@newyorker.com",
        gender: "Genderfluid"
      },
      {
        id: 3,
        first_name: "Helen-elizabeth",
        last_name: "Tull",
        email: "htull2@earthlink.net",
        gender: "Female"
      },
      {
        id: 4,
        first_name: "Agnesse",
        last_name: "Scutchin",
        email: "ascutchin3@over-blog.com",
        gender: "Female"
      },
      {
        id: 5,
        first_name: "Mira",
        last_name: "Anglim",
        email: "manglim4@simplemachines.org",
        gender: "Female"
      },
      {
        id: 6,
        first_name: "Fredi",
        last_name: "Truran",
        email: "ftruran5@g.co",
        gender: "Female"
      },
      {
        id: 7,
        first_name: "Josselyn",
        last_name: "Weald",
        email: "jweald6@usnews.com",
        gender: "Female"
      },
      {
        id: 8,
        first_name: "Cordy",
        last_name: "McAdam",
        email: "cmcadam7@ask.com",
        gender: "Male"
      },
      {
        id: 9,
        first_name: "Shelby",
        last_name: "Brute",
        email: "sbrute8@ftc.gov",
        gender: "Male"
      },
      {
        id: 10,
        first_name: "Celesta",
        last_name: "Rizzardo",
        email: "crizzardo9@loc.gov",
        gender: "Female"
      }
    ];
  }

  render() {
    const detailList = this.info.map((detail) => <Details detail={detail} />);
    return (
      // method 1
      // <div>
      //     {this.info.map((detail) => (
      //       <span key={detail.id}>
      //         <h3>
      //           {detail.id} {detail.name} {detail.email}
      //         </h3>
      //       </span>
      //     ))}
      // </div>

      //method 2

      <div>
        <table border="solid">
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
          {detailList}
        </table>
      </div>
    );
  }
}
export default ListRender;
