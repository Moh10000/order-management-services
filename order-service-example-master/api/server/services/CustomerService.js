import database from '../src/models';

class CustomerService {

  static async addCustomer(newCustomer) {
    try {
      return await database.Customer.create(newCustomer);
    } catch (error) {
      throw error;
    }
  }


  static async customerLogin(customer) {
    try {
      customer.customerName
      const theCustomer = await database.Customer.findOne({
        where: { customerName:  customer.customerName}
      });
      if(theCustomer.password == customer.password)
      {
        return theCustomer;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async deleteCustomer(customer) {
    try {
      const customerToDelete = await database.Customer.findOne({ where: { customerName:  customer.customerName} });
      if(customerToDelete.password == customer.password)
      {
      if (customerToDelete) {
        const deletedCustomer = await database.Customer.destroy({
          where: { customerName:  customer.customerName}
        });
        return deletedCustomer;
      }}
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default CustomerService;
