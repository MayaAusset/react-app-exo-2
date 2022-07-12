import axios from 'axios';
import employees from '../data/employees';

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

  getOrgUnits = async () => {
    try {
      const employeeUnits = employees.data.map((employee) => employee.unit);
      const orgUnits = [...new Set(employeeUnits)];
      return orgUnits;
    } catch (err) {
      console.error(err, 'Error at getOrgUnit');
    }
  };

  getAllEmployees = async () => {
    try {
      return employees.data;
    } catch (err) {
      console.error(err, 'Error at getOrgUnit');
    }
  };

  getAllEmployeesPerUnit = async (unit) => {
    try {
      return employees.data.filter((em) => em.unit === unit);
    } catch (err) {
      console.error(err, 'Error at getOrgUnit');
    }
  };
}

export default ApiService;
