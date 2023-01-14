import CustomerService from '../services/CustomerService';
import Util from '../utils/Utils';

const util = new Util();

class CustomerController {


  static async addCustomer(req, res) {
    
    if (!req.body.customerName || !req.body.password) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    req.body.customerId = Date.now().toString(36) + Math.random().toString(36).slice(2);
    const newCustomer = req.body;
    try {
      const createdCustomer = await CustomerService.addCustomer(newCustomer);
      util.setSuccess(201, 'Customer Added!', createdCustomer);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async customerLogin(req, res) {
    if (!req.body.customerName || !req.body.password) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }

    try {
      const customer = req.body;
      const theCustomer = await CustomerService.customerLogin(customer);

      if (!theCustomer) {
        util.setError(404, `Cannot find customer with the Name ${req.body.customerName}`);
      } else {
        util.setSuccess(200, 'Found Customer', theCustomer);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteCustomer(req, res) {
    if (!req.body.customerName || !req.body.password) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }

    try {
      const customer = req.body;
      const customerToDelete = await CustomerService.deleteCustomer(customer);

      if (customerToDelete) {
        util.setSuccess(200, 'Customer deleted');
      } else {
        util.setError(404, `Customer with the Name ${req.body.customerName} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default CustomerController;
