import axios from 'axios';

class ApiService {
  constructor() {
    let base_url = 'https://618b5b043013680017344043.mockapi.io';

    this.axios = axios.create({
      baseURL: base_url,
      // withCredentials: true,
    });
  }

  getMockApiMessage = async () => {
    return this.axios
      .get('/interview')
      .then((response) => {
        return response.data[0];
      })
      .catch((err) => {
        console.error(err, 'Error in ApiService route mockApi');
      });
  };

  // getOrgUnits = async () => {
  //   return this.axios.get('/orgUnits')
  // };

  // getAllEmployees = async ()=> {
  //   return this.axios.get('/employees')
  // }

  // getEmployees = async (unit) => {
  //   return this.axios.get('/orgUnits')
  // };
}

export default ApiService;
